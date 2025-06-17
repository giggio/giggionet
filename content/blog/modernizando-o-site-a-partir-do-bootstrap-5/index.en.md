---
title: Modernizing the website using Bootstrap 5
date: 2025-04-02T13:00:00-03:00
comment_term: modernizing-the-website-using-bootstrap-5
author: Giovanni Bassi
featureImage: images/bootstrap-v5-new-logo.png
featureImageAlt: Bootstrap logo
feature_image_list_top_offset: "10%"
categories:
  - web
tags:
  - hugo
  - Bootstrap
  - FontAwesome
  - JavaScript
  - Sass
  - CSS
---

In the last few days, I updated this site to [Bootstrap 5](https://blog.getbootstrap.com/2021/05/05/bootstrap-5/). I
took the opportunity to make several improvements and I want to share how that process went.

<!--more-->

More than just an update, I used this chance to enhance various parts of the site, including where it touches
[Hugo](https://gohugo.io/).

### Bootstrap 5

Migrating to Bootstrap 5 turned out to be much smoother than I expected. I thought it would be an extremely laborious
process, but in practice, it was pretty straightforward. There are countless articles and even the
[official documentation](https://getbootstrap.com/docs/5.3/migration/) that explain every step, so I won't dive too deep
into the technical details of the update itself. During the process, I realized I could improve other parts of the site,
so I decided to work on them as well.

If you want to check out the update, the commit is
[on Github](https://github.com/giggio/giggionet/commit/484dd97a07340bfcda0d77bd5e7ccc899b3e1bad).

### EcmaScript modules

Bootstrap 5, released in mid-2021 (three and a half years after version 4.0), brought full support for ES Modules,
which are widely supported by 2025. Previously, my code loaded scripts and styles via CDN. That took advantage of users’
caches but ended up downloading the entire library, including unnecessary code and styles since not everything was used.
Plus, it didn’t use ESM.

With ESM, I was able to apply tree shaking – the removal of unused code. Luckily, Hugo already offers an option to
perform this process, making everything extremely simple.

I created a file called
[vendor.mjs](https://github.com/giggio/giggionet/blob/789839f6a6e14c4a14cd72c2ab5d2a1d48ad5d64/assets/js/vendor.mjs) to
list only the dependencies I actually use. This is the file that gets compiled. It basically exports the libraries, like
this:

```js
export { Popover, Tooltip } from 'bootstrap';
```

Using Hugo’s [js.Build](https://gohugo.io/functions/js/build/) method, the bundle is generated automatically. In short,
it looks like this:

```go-html-template
{{ with resources.Get "/js/vendor.mjs" }}
  {{ $opts := dict
    "minify" hugo.IsProduction
    "sourceMap" "linked"
    "format" "esm"
  }}
  {{
    printf `<!-- Vendor file: %q -->`
    (js.Build $opts | fingerprint "sha256").RelPermalink | safeHTML
  }}
{{ end }}
```

This file is then imported into my main script, the
[script.js](https://github.com/giggio/giggionet/blob/789839f6a6e14c4a14cd72c2ab5d2a1d48ad5d64/assets/js/script.mjs),
with a simple `import`. It starts off like this:

```js
import { Popover, Tooltip } from './vendor.mjs';
```

I simply import this file, without building it, which means the vendor file isn’t inlined. The challenge was that the
file name changes (because of the fingerprint), but I solved that with an
[importmap script](https://developer.mozilla.org/docs/Web/HTML/Element/script/type/importmap).

I started using Bootstrap installed via Npm, which made the process a lot easier because Hugo’s `js.Build` uses
[esbuild](https://esbuild.github.io/) to automatically search within the `node_modules` directory.

Another advantage is that the vendor file remains static, which allows browsers to leverage their cache extensively. It
only changes when I update the dependencies. When that happens, the compiled file name changes, solving browser cache
issues. The same goes for `script.mjs`, though that one tends to change more often as new features are added.

Fun fact: rewriting this script was the only part that Github Copilot managed to automate during this migration – and it
generated a bug that I fixed right away.

### Sass compilation

I had already been performing tree shaking and analyzing all of my Sass/CSS, but the Bootstrap CSS was loaded entirely
via CDN. Since Bootstrap’s Sass is already available in `node_modules`, I started integrating it directly, eliminating
all of the __unused Bootstrap CSS__. I lost the potential cache benefits from the CDN, but I believe the vendor file
will make up for that.

The challenge was tweaking my unused CSS analysis function, as much of the CSS remaining in the final file (before tree
shaking) wasn’t written by me. This script cross-references the generated HTML with the CSS and points out unused
selectors, allowing me to remove them manually afterward. With a bit of Bash and open-source tools, I managed to sort it
out. If you're interested, check out the
[unused-css](https://github.com/giggio/giggionet/blob/789839f6a6e14c4a14cd72c2ab5d2a1d48ad5d64/package.json#L12)
script in the `package.json`.

### Goodbye jQuery

I’m incredibly grateful to jQuery – it paid many of my bills and was a great companion – but by 2025, it just doesn’t
make sense anymore. While Bootstrap 4 depended on jQuery, Bootstrap 5 does not. So, I removed it.

The problem was that the lightbox library I had chosen depended on jQuery, and I didn’t want to keep it around just for
that reason. I decided to replace it with [Photoswipe](https://photoswipe.com/), which already supports ESM, making
implementation easier. To import it, I used another script with `importmap`, pointing directly to the CDN. And with
that, I also eliminated the extra files from the previous library, which required me to also deliver its images. Now,
everything comes from the CDN.

### Switching FontAwesome to JS + SVG

After optimizing Bootstrap’s JavaScript and CSS, I decided to tackle other areas of the site. I noticed that the web
font files for [FontAwesome](https://fontawesome.com/) were quite large – with three groups of free fonts (solid,
regular, and brands), totaling over 300KB. On the other hand, FontAwesome offers an option to use JavaScript + SVG
instead of fonts, without changing the HTML. This approach even allows for tree shaking, as described in the
[documentation](https://docs.fontawesome.com/apis/javascript/tree-shaking).

The biggest challenge was the documentation, which ended up being confusing, especially with the constant promotion of
premium icons. I'm considering switching to [Bootstrap’s own icons](https://icons.getbootstrap.com/) or at least mixing
some of them in, but I'm still evaluating. Either way, figuring out how to use FontAwesome’s JavaScript APIs wasn’t
simple since there isn’t a complete example available.

I used the same technique with the `vendor.mjs` file, including only the icons I need. Creating this file correctly was
challenging, but with some Bash-fu, I managed to generate a file whose sole purpose is to import the icons I’m using –
the
[fontawesome.generated.mjs](https://github.com/giggio/giggionet/blob/789839f6a6e14c4a14cd72c2ab5d2a1d48ad5d64/assets/js/fontawesome.generated.mjs).
If you want to see how it was done, all of the project’s Bash code is concentrated in one file (and I promise I’ll write
a detailed post about it soon):
[find it here](https://github.com/giggio/giggionet/blob/789839f6a6e14c4a14cd72c2ab5d2a1d48ad5d64/nix/h#L492-L556).

The generated file, in simplified form, looks like this:

```js
import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faMastodon } from "@fortawesome/free-brands-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
library.add(faMastodon, faCheck);
export { dom, library };
```

In the actual file, lines 2 and 3 contain all the icons.

Using it is super simple: I created another file called `fontawesome.mjs`, which imports the generated file and contains
a single function responsible for initializing the icons:

```js
import { dom } from './fontawesome.generated.mjs';
export function initFontawesome(...nodes) {
  if (nodes.length === 0)
    // essa chamada inicializa os ícones da página inteira:
    dom.i2svg();
  else
    for (const node of nodes)
      // essa chamada inicializa apenas os ícones dos
      // elementos recebidos e é usada quando um elemento
      // com ícone é adicionado dinamicamente à página:
      dom.i2svg({ node });
}
```

Finally, this file is imported and exported in `vendor.mjs`.

You might have noticed that the `initFontawesome` function optionally accepts a list of nodes. To avoid having to call
it manually everywhere, I created a
[MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) that triggers it whenever an `<i>`
element is added to the DOM. So when that happens, the `<i>` is removed by FontAwesome’s code and replaced with an
`<svg>`.

### Dark Mode

One of the reasons for updating to Bootstrap was its new implementation of light and dark themes, something essential
for me as a dark mode fan. My site’s all-white look was really bugging me, so this change was a top priority!

#### Moving Sass variables to CSS

The [documentation](https://getbootstrap.com/docs/5.3/customize/color-modes/) for Bootstrap explains the process well,
and the implementation was very straightforward. The challenge was that my code, inherited from a theme, made heavy use
of [Sass variables](https://sass-lang.com/documentation/variables/). For an effective dark mode implementation, I needed
to migrate to
[CSS variables](https://developer.mozilla.org/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
(or, more accurately, __CSS custom properties__). I carried out this migration
[in this commit](https://github.com/giggio/giggionet/commit/26ca930e5169eb9b6c457cbab67afbce966023e0) –
and it was super easy.

#### Implementing dark mode

The implementation was super straightforward. Preferably, Bootstrap doesn’t rely solely on the
[prefers-color-scheme](https://developer.mozilla.org/docs/Web/CSS/@media/prefers-color-scheme)
media query, since that would make it hard for
users to switch themes without altering their browser or OS settings. Instead, it uses the `data-bs-theme-value`
attribute, which you can place anywhere (typically on the `<html>`).

With that done, you just need to create a section for default CSS variables (which in my case became the light theme),
and another for the alternative (dark) theme, something like this:

```scss
:root {
  --body-color: white;
  --text-color: black;
}
@include bootstrap.color-mode(dark) {
  --body-color: black;
  --text-color: white;
}
```

The importance of migrating to CSS variables beforehand becomes clear here.

The Sass `color-mode` mixin basically inserts the content inside the mentioned attribute, like so:

```scss
@mixin color-mode($mode) {
  [data-bs-theme="#{$mode}"] {
    @content;
  }
}
```

And the above code compiles to:

```css
:root {
  --body-color: white;
  --text-color: black;
}
[data-bs-theme="dark"] {
  --body-color: black;
  --text-color: white;
}
```

Since the `[data-bs-theme]` attribute is defined on the `<html>`, it has higher specificity than `:root`, altering the
CSS variables and consequently, all the site’s colors.

Bootstrap’s documentation provides a base code for this functionality, which I used and tweaked slightly. It only uses
the media query until the user opts to switch themes, ensuring a very flexible system.

The biggest challenge wasn’t implementing dark mode, but finding a color scheme that I liked while still respecting the
visual identity of the light theme, especially for blog post readability. For that, the predominant background needed to
be black – for me, dark mode is truly black. On OLED screens, every turned-off pixel counts! No dark gray. In the end, I
liked the result, but I still need to live with it a bit longer to see if it really works for me.

So, did you like dark mode? Any suggestions for improvement? Leave your comment down below!

#### Adapting generated themes from tools

Two widgets didn’t automatically adapt: the [Giscus](https://giscus.app/) comments and Hugo’s [syntax
highlighting](https://gohugo.io/content-management/syntax-highlighting/). Both used fixed themes, but luckily they offer
customization options with just a few lines of JavaScript. Giscus provides an API to adjust the theme, while Hugo’s
syntax highlighting allows using external CSS – you just need to change the `href` of the `<link>` that loads the
highlight CSS.

I’m even thinking about offering users the option to change just the syntax highlighting theme, with a subtle screen
element that allows for this change. It’s the kind of customization that’s only possible when you have complete control
over the HTML, something that would be quite labor-intensive in WordPress.

### Conclusion

This journey took me about 30 hours, with a good portion of that time dedicated to research. If I had to do it again, it
would definitely be faster now that I’ve learned the parts of the work I didn’t know before. It was an extremely
enjoyable experience getting back into frontend development after a few years, without relying on SPA
libraries/frameworks or even TypeScript. Seeing how modern and accessible CSS and JavaScript have become was refreshing.
Perhaps soon, Sass won’t even be necessary. JavaScript handles a codebase of this size very well, especially with the
TypeScript compiler constantly checking the code, which ends up being a huge help.

I still have other stories from this update to tell, but since they aren’t directly related to adopting Bootstrap 5,
I’ll save them for another post.

So, did you know you could do all this with a static site generator? Were you aware of these new JavaScript and CSS
innovations? Drop a comment below and let me know what you think!

It’s so much fun working with Hugo, Bootstrap, modern JavaScript, and CSS!
