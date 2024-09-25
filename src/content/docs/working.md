---
title: Working
pagefind: false
---

### documentation/starlight.md

-   make prettier plugin
-   remove prettier-ignore comments, after plugin
-   After reading html docs, Create a template for head tags for markdown frontmatter

### index.md

-   On homepage, create a dialog of what this website is about. These are the things that I currently know in depth (also link to the relevant projects for that). And then, here are the projects that I have worked. This should be about half a page summary of the projects, which then redirect to the main project showcase and detail page. And a separate link for the documentation, which would be maintained in this repo as well.

### astro.config.mjs

-   Add head tags after reading html docs to astro.config.mjs

### books/general_programming/the_pragmatic_programmer_your_journey_to_mastery.md

-   finish reading book
-   reread the notes for corrections and conciseness

### Add to projects

html linter. In the spec, there are ton of recommendations and also errors which browsers respect. This can all be put into a linter. The linter can also look into, security best practices. You can also add things like tags should only appear once. Like `<title>` should only appear once. This is important because html is mostly being generated from frameworks now, and people might duplicate tags without even knowing.

So final html tools

-   minifier
-   linter
-   formatter
-   dom analyzer - use to test performance of minifer like queryselector performance and number of nodes

In case of modern SSR frameworks, you need to get all the routes and then run the linter on the generated html. As in SSR, all the html is hidden in JS and linter would be of no use.
