# Giovanni Bassi's Site

These is the code to my personal site, hosted at [giggio.net](https://giggio.net).

## Tools

You need [Hugo](https://gohugo.io/), [Pagefind](https://pagefind.app/docs/)
and Node.js (and NPM), prettier and dart-sass.

## Setting up the development environment

Either install the tools, or use Nix with
[direnv](https://github.com/direnv/direnv) or `nix develop`.
Several tools depend on Node.js tools, you will need to `npm ci`.

There is an [h](./h) script you can use. If you use Nix it will be
made available in the path and you can call it as `h`, otherwise use `./h`.

Completions will also be enabled by Nix, if not using it, you can
enable them by running:

```bash
source <(./h complete)
```

If you use Nix, completions will be set up automatically.

Run `h --help` to see all the helpers.

## Building the site

Then, for a quick view of the site, run:

```bash
h server # or h server dev, or h server prod
# or
hugo server --renderToMemory # and other options
```

For search to work you need to render to disk, then run Pagefind:

```bash
hugo # builds the pages so that pagefind can build the search index
pagefind --site public # builds the search index
h server # build and serves the server
```

## Deploying the site

Build and deploy with `h`.
The `h build` command will build Hugo, add search and run other steps, like
critical.

```bash
h build && h deploy azure
# or
h build && h deploy cloudflare
# or
h build && h deploy github # will not actually deploy, you need to use Github actions
```

You will need to adapt the files used for deploying.

See [.env.example](./.env.example) for environment variables (create a
`.env` file using it as an example).

### Cloudflare

This uses Cloudflare Workers. You need to install Wrangler CLI or use the Nix tools.
See [wrangler.jsonc](./wrangler.jsonc) for the configuration.
You will need to change the worker name in that file.

### Azure

This uses Azure Static Web Apps. You need to install SWA CLI or use the Nix tools.
See [swa-cli.config.json](./swa-cli.config.json) for the configuration.
You will need to change some keys in that file.

### Github Pages

TBD.

## Blog guidelines

### Images

Images that will be featured should be 16:9, ideally with 848x480, as the blog maximum width is 730px.

## Linting and spell checking

Several files are being linted, and with different tools, and with VSCode extensions support.

- Markdown is using markdownlint-cli2;
- JavaScript and JSON are using ESLint;
- HTML and Sass are using Prettier;

And the spell checker is also running with VSCode support and the cspell command line tool.

All of those are also being check by Git hooks and by the Github workflow.

## Testing performance

Don't validate tests like Lighthouse using `hugo server` or `h server prod`, as some optimizations happen outside
of Hugo's build.
Run `h build`, then run `http-server public --port 1313`.

## Tips

- Use `npm run unused-css` to view css that is not being used.
- Install the git hooks. See the [README.md](./.githooks/README.md) for how to do it.
- Lint the files before committing. See [the linting section above](#linting-and-spell-checking).
- To view the build page, simulating github actions run:
  `GIT_COMMIT_SHA=$(git show --format="%H" -s) GIT_AUTHOR_NAME=$(git show --format="%an" -s) GIT_AUTHOR_DATE=$(git show
  --format="%ai" -s) GIT_COMMIT_MSG=$(git show --format="%s" -s) GITHUB_ACTIONS=true GITHUB_REF_NAME=main
  GITHUB_REPOSITORY=giggio/giggionet GITHUB_RUN_ID=14393394914 GITHUB_WORKFLOW='My build' h server`

## Author

[Giovanni Bassi](https://links.giggio.net/bio)

## License

Everything under the `content/blog` folder and every markdown file (`.md`)
outside of that folder is licensed under the
[Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/).

Everything else is licensed under the [MIT license](https://opensource.org/license/MIT).

This site used the
[Roxo](https://github.com/StaticMania/roxo-hugo/tree/eac3f49bc57315701ca29498525078bd28c1338b)
theme (which is also licensed under the MIT license), as a basis,
but it has diverged significantly from it.
