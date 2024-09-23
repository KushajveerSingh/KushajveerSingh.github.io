---
title: Project Ideas
pagefind: false
---

## (Prettier) - Plugin to disable codeblock formatting

-   Create a Prettier plugin, that disables formatting of codeblocks in Markdown.
-   Also, see if the logic can be extended to format the codeblock based upon the language used by the codeblock. And provide an option which can be provided in the backticks to disable formatting manually.
-   Look into Prettier markdown code, to see if various formatting options can be disabled manually.

## (Starlight) - Sidebar utils plugin

**Motivation**\
Show "Internal" in the sidebar only for the _internal_ subroute. Also, create a table of contents like page for "kushajveersingh.com/internal" which has the same content as the "internal" in the sidebar. This has the benefit

-   people don't have to create the page manually.
-   people can go directly to "internal" and look for what they want, rather than going to "internal/something".

Other stuff

-   Add option to collapse sidebar like Docusaurus and look for other features provided by Docusaurus sidebar.
-   Look at other Starlight plugins related to sidebar.

## (Prettier) - Configurable Formatter

**Motivation**\
Unopinionated prettier alternative. In Markdown, prettier would currently format codeblocks and that would mess up JS code. And the way to avoid this is by adding prettier ignore comments, which is annoying.

**Goal**

-   It should be drop in replacement.
-   Rewrite in C++.
-   Clear all [prettier tests](https://github.com/prettier/prettier/tree/main/tests/format) to ensure success.
-   All the 3rd party plugins/integrations should work automatically. For this you might have to force people to rename your package to "prettier" manually (or through a script, soft alias).

Other stuff

-   Make every formatting option of prettier available as a config option.
-   Prettier plugin to disable formatting of content inside codeblocks in markdown. Need to handle the case of using more than 3 backticks to specify a codeblock.
-   Additionally, code inside codeblocks should be formatted as per the provided language.
-   Disable formatting of content inside frontmatter i.e. inside `---`.
-   Publish on `npm`, `jsr`. Look for other alternatives.
-   Copy prettier repository/doc/npm structure.
-   By default, the new formatter should behave the same as prettier.
-   Provide a config file, which includes all the config options, that people can read top-to-bottom. This is one thing that I found annoying with current tools, as you have to check the docs for all possible options and sometimes they are not even documented properly.
-   C++23 is the target and the formatting should be parallelized.
-   Look at prettier alternatives like [Biome](https://biomejs.dev/) written in Rust and do speed comparisons.
-   For every possible formatting done by Prettier, expose a function letting people build their own logic on how to format that option. For example, if you have code that handle formatting ternaries, then expose a function that can override that behavior.
-   Use the Chrome JS parser to get the AST.
-   If AST is the way to fo formatting, then look into all the programming languages out there and integrate their AST into the project, and then provide an option to format each node. This would make the project a universal formatter.

## (Other) Project version and info tracker

**Motivation**\
Make it easier to track the dependency of packages used across multiple projects, thus helping with version upgrades. And the same reasoning for personal info, like the tagline I use across all social media.

Other stuff

-   For every dependency, For every dependency, show the location and version number that the dependency is used in, in tabular form. Current version, latest version, location. Set the background of the table cell based on how far the current version is from the latest version.
-   Create a C++ script that can automatically get the version number of all the dependencies used by a project. So if you have 10 projects, you provide it 10 urls/locations and 10 methods to get all the required version numbers. And then you run the script whenever you want to update the page. It also fetches the latest package version.
-   The information can be outputted in some standard format (read on which format to choose).
-   Also, add personal information tracking. Like you are using a tagline across multiple social media accounts and pages. So you list things like tagline, name and then list of all locations those things are used.
