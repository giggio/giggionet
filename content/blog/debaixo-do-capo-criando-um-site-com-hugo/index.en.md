---
title: "Under the hood: creating a site with Hugo"
date: 2025-03-24T15:00:00-03:00
slug: under-the-hood-creating-a-site-with-hugo
comment_term: under-the-hood-creating-a-site-with-hugo
author: Giovanni Bassi
feature_image: images/hugo-logo.svg
feature_image_alt: Logo do Hugo
feature_image_list_top_offset: "30%"
categories:
  - web
tags:
  - hugo
  - github
  - static
summary: |
  I abandoned my favorite publishing platform and embraced the Hugo static site generator.
  In this post, I tell you why.
---

### Evaluating the Options

When I decided to create a new website, the first option that came to mind was WordPress. I’ve been using it for many
years and I like it. Since I’m also well-versed in infrastructure, setting up a service in the cloud and running it is
very simple. It’s tempting.

But there are performance challenges. While I maintained the Lambda3 site, we faced several problems. Initially, we
solved them with cache plugins, but over time, even that wasn’t enough, and we started using Cloudflare’s cache, which
in fact solved the problem definitively.

It was a bit much: PHP + MariaDB + Cloudflare, all just to serve a static site. And it still needed plugins to write in
Markdown, which was what I wanted from the start. Wasn’t there a better solution?

My main argument in favor of WordPress is its ecosystem of plugins, which is unbeatable. But for a static site, that
seemed excessive. I just wanted a site with a blog and a few sections. Did I really need all of that?

Giving up WordPress meant having to deliver everything it and its plugins do. My minimum requirements included static
pages, a blog, and RSS. Along the way, other needs emerged: posts categorization and tagging, blocking generative AI
robots, image optimization, among others. Not to mention the common frontend needs, like compiling styles written in
Sass.

### Choosing Hugo

Decided to use a static site generator, I went to evaluate options. I wanted fast software, under constant development,
mature and free. It needed to meet my needs and offer flexibility for the future. [Hugo](https://gohugo.io/) won, but
other good options were [Astro](https://astro.build/), [Jekyll](https://jekyllrb.com/), and
[Zola](https://www.getzola.org/). I evaluated others, but these were the ones I considered the most. It’s been a while
since I made the decision for Hugo; I started the project months ago, and it was shelved for a while.

Hugo met everything I needed. With almost [80 thousand stars on GitHub](https://github.com/gohugoio/hugo), it is a tool
in constant update, with almost 9 thousand commits. Made in Golang, it has good documentation and an active forum for
questions.

Moreover, it features [hundreds of themes](https://themes.gohugo.io/) distributed across the internet. Since I’m not a
designer, that was essential. I chose the [Roxo](https://github.com/StaticMania/roxo-hugo) theme, which I ended up
completely customizing. The only thing that will still give me trouble is updating Bootstrap 4 to version 5, something
that isn’t so trivial.

### What’s Good About Hugo

#### Development Experience

The development experience with Hugo is excellent. The built-in server, started with `hugo server`, runs the site and
hot reloads whenever a file is changed. Changes in CSS don’t even reload the page; they are applied dynamically. On my
machine, a Markdown post takes 22ms to process, and the entire site half a second. On GitHub Actions, the build takes
2.5s, so YMMV. Template development is equally fast; you save and immediately see the result, without delay. The
experience is the same as developing a dynamic site with server-side rendering, and with immediate feedback, somewhat
better than working on an Angular or React SPA.

#### Flexibility

With Hugo, you have full control over HTML, CSS, and JavaScript. You don’t depend on whoever wrote a plugin to adapt it
to get to the result you want. There are plugins for Hugo (called modules), but the most common is to
find code snippets to customize as needed. Since it is very extensible, that’s enough. I really liked this approach,
which allows for enormous freedom.

#### Template System

Hugo uses HTML templates to structure the site and Markdown for content. This is useful because metadata remains in the
[front matter](https://gohugo.io/content-management/front-matter/), facilitating translations, RSS, and other features.

Its template system is powerful. The templates are divided into [types](https://gohugo.io/templates/types/), such as
sections (lists of pages) and individual pages. There is support for partials, allowing for the componentization of
reusable elements like header and footer.

The templates can generate any format, such as JSON, XML, or others. This is essential for features like
[sitemap.xml](https://giggio.net/pt-br/sitemap.xml) and RSS.

#### Data Features

At the footer there is a section of podcasts I listen to and blogs I read. Both were built using a Hugo feature to
reference [data sources](https://gohugo.io/content-management/data-sources/). You can create CSV, JSON, TOML, YAML, and
XML files (I used YAML) and use them as a source.

For example, creating a YAML data file for podcasts, like this:

```yaml
- name: Medo e delírio em Brasília
  url: https://medoedelirioembrasilia.com.br/
- name: Hipsters.tech
  url: https://www.hipsters.tech/
```

And then using it, like this:

```go-html-template
{{ with site.Data.podcasts }}
  <li><a href="{{ .url }}">{{ .name }}</a></li>
{{ end }}
```

#### Shortcodes and Code Fences

There are also [shortcodes](https://gohugo.io/content-management/shortcodes/), which are ways to easily create HTML,
like embedding a YouTube video, or creating code with _syntax highlighting_.

```markdown
{{</* youtube EFAe8W3n2ks */>}}
```

The codes above were generated solely with [_code fences_](https://gohugo.io/content-management/syntax-highlighting/) —
those codes with three or four backticks in the markdown — and they use a shortcode under the hood. This is an example
of code fences with `yaml`:

````markdown
```yaml
prop: true
```
````

#### Taxonomy

Hugo has a taxonomy system, which is a way to categorize your pages. The most common, and what I’m using, are categories
and tags for blog posts, but you could use it to organize anything. I also used it to build pages for types of
contributions (for example, [videos](http://giggio.net/participations/kinds/videos/) – check its code on
[Github](https://github.com/giggio/giggionet/tree/main/content/participation_kinds)).

The example they use in the [documentation](https://gohugo.io/content-management/taxonomies/) is with movies and actors.
Thus, a movie page can list its actors. Actor is the `taxonomy`, the actor’s name becomes the `term`. The cool thing is
that you can create pages for these classifications, both for the taxonomy and for the term. That’s how I have here the
[categories](https://giggio.net/blog/categories/) page, [tags](https://giggio.net/blog/tags/), and each of their terms,
such as the tag [blog](https://giggio.net/blog/tags/blog/). The pages, the taxonomies, and the terms are data that you
can manipulate.

#### Build

During the build, all pages are generated, the entire site. With the dev server running you can choose whether to
rebuild everything or just the page that changed. It builds the lists of pages, the taxonomies, everything. It also
caches everything it did, such as image manipulations and files it may have downloaded.

Hugo supports environments. In dev, it doesn’t optimize anything (and this is configurable). The prod build, on the
other hand, can do a series of things. Just look at what happens on my site:

- Sass compilation, concatenation of all CSS, tree shaking (with PostCSS), minification, and fingerprinting.
- Optimization of all images, which are converted to webp and in some cases resized.
- HTML minification

I also perform critical CSS analysis with the [critical](https://github.com/addyosmani/critical) tool, which is run for
each individual page. I also generate search with [pagefind](http://pagefind.app/) (you can try it
[here](https://giggio.net/en/search/) – and I admit I spent little time on it, but it’s working).

This happens locally, if I want to test, and also using the
[workflow](https://github.com/giggio/giggionet/blob/main/.github/workflows/build-hugo.yaml) from GitHub Actions, which
also performs linting and spell checking (with [cspell](https://cspell.org/)).

#### Other Features

- Hugo supports multiple languages, and I’m using that on this site (click the little flag at the top in the header).
- The index, at the beginning of this post, was also built using a page metadata, the
  [.TableOfContents](https://gohugo.io/methods/page/tableofcontents/) (check out
  [the source code](https://github.com/giggio/giggionet/blob/b7be46d67eeb539459c4d51d5a16f15468f086d9/layouts/blog/single.html#L37)).
- You can use external resources that can be downloaded, such as an image, or a CSS file, or JSON, and then process them
  and generate content from them. That’s how I’m generating my [robots.txt](http://giggio.net/robots.txt) file (see the
  source [here](https://github.com/giggio/giggionet/blob/b7be46d67eeb539459c4d51d5a16f15468f086d9/layouts/robots.txt)),
  like this:

  ```go-html-template
  {{- with try (resources.GetRemote "https://link/para/robots.json") -}}
  ```

  (notice the `try`?)

- The integration with Node.js resources is excellent, thanks to the ability to mount directories and files. You can
  specify that any directory should be available for the site, and when accessing the resource, it copies the necessary
  files. That’s how I’m doing it with the files from [Font Awesome](https://fontawesome.com/search), check out how
  the
  [configuration file](https://github.com/giggio/giggionet/blob/b7be46d67eeb539459c4d51d5a16f15468f086d9/config/_default/hugo.yaml#L147C3-L155)
  looks:

  ```yaml
  module:
    mounts:
      - source: node_modules/@fortawesome/fontawesome-free
        target: assets/css/fontawesome
  ```

### What Could Improve

Hugo’s main problem is the lack of debugging. When you’re deep into template developing and something doesn’t work
as you’d like, ideally you would be able to debug the problem while the site is being generated, but the tool does not
offer that.

We’re stuck with good and old writing to HTML approach, using the `debug.Dump` instruction, when the result appears
directly in the HTML, or the `warnidf` function, which generates a log in the terminal. It helps, but it’s an experience
that could be improved. I struggled a bit until I discovered that these existed, so here’s a tip for those who are
starting.

### Conclusion

I still have more to say about Hugo, but this post is already long. The main point is that Hugo is an excellent tool for
static sites. It perfectly solved my problem, it’s a pleasure to use, and from what I see, it will continue to serve me
for a long time.

I still have more to talk about regarding the entire structure around it, such as how I used GitHub Pages, the use of
Nix to structure the tools, and much more, and that will also be saved for future posts.

What do you think of Hugo? Comment below!
