---
title: Project Ideas
pagefind: false
---

## Project writing tips

-   Start each project with a day spent on project planning, scope (including features), rough estimate.
-   Do the first iteration of project, which includes building a "hello, world" equivalent. This should include all the things (like deployment, docs, source control, ...) other than the actual core features.
-   Refine the original estimate.
-   After feature completion, do a review of the code base to ensure DRY, Orthogonality, ... principles are being followed. Refer to the following resources
    -   [The Pragmatic Programmer](../../books/general_programming/the_pragmatic_programmer_your_journey_to_mastery/)
    -   [Design Patterns: Elements of Reusable Object-Oriented Software](../../books/general_programming/design_patterns_elements_of_reusable_object_oriented_software/)
-   Do an iteration focused on performance optimization. This is where subsections of code are analyzed to, improve performance. Also, check the network tab to identify and bottlenecks.
-   Do one final iteration to verify Pragmatic Programmer principles are being met.
-   Do a project retrospect. Work on refining the estimate and identifying how to make it more accurate in the future.

## Astro

### Asset shortcut plugin

-   Make referencing asset folder easier. Currently to access the images, you have to use `../../assets`. But we can use `~` to reference `assets` by default.
-   This is also true, when using `baseUrl`. As all the relative links have to add `baseUrl`.
-   Using relative URLs should also be improved by this plugin. And this should take into account `baseUrl`, `trailingSlash` values as well.
-   Modify Kushajveer.github.io repo after the project is implemented.

## Starlight

### Documentation clone

-   There are a tone of features in Docusaurus (and other static site generators like hugo, eleventy, gatsby, jekyll, material for mkdocs, sphinx, read the docs, asciidoc, bookstack, confluence) that are missing in Starlight.
-   Clone starlight and create a new theme, with all these features included.
-   Include remarkplugins, rehypeplugins.
-   Add blog support (plus additional starlight plugins).
-   Add protected pages for internal docs.
-   Integrate all TODO from code in a single page.

### Sidebar utils plugin

**Motivation** \
Show "Internal" in the sidebar only for the _internal_ subroute. Also, create a table of contents like page for "kushajveersingh.com/internal" which has the same content as the "internal" in the sidebar. This has the benefit

-   people don't have to create the page manually.
-   people can go directly to "internal" and look for what they want, rather than going to "internal/something".

Other stuff

-   Add option to collapse sidebar like Docusaurus and look for other features provided by Docusaurus sidebar.
-   Look at other Starlight plugins related to sidebar.

## Prettier

### Plugin markdown codeblocks

-   Create a Prettier plugin, that disables formatting of codeblocks in Markdown.
-   Also, see if the logic can be extended to format the codeblock based upon the language used by the codeblock. And provide an option which can be provided in the backticks to disable formatting manually.
-   Look into Prettier markdown code, to see if various formatting options can be disabled manually.
-   Modify KushajveerSingh.github.io with relevant changes after finishing the project (remove prettier-ignore comments).

### Configurable Formatter

**Motivation** \
Unopinionated prettier alternative. In Markdown, prettier would currently format codeblocks and that would mess up JS code. And the way to avoid this is by adding prettier ignore comments, which is annoying.

Split the project into core module and language specific modules.

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

## HTML

### Analyze DOM

-   There are chrome extensions that deal with analyzing DOM like number of nodes. Consolidate all the extensions into one script/extension.
-   Chrome console shows DOM after JD render. Ctrl-U shows HTML returned by the server. In the chrome DOM, spaces and newline nodes are not shows. In your project show these as well.
-   Add a graph showing the dom depth.

### Linter

-   In the spec, there are ton of recommendations, plus errors which browsers respect. And all this information can be converted to linting rules.
-   For each tag look into
    -   how many times they can appear in the DOM. Like `<title>` can only appear once and in the `<head>`.
    -   the possible attribute values, and no duplication of attributes.
-   Security best practices, should also be integrated. This includes how to get rid of all security attacks like cross-site, and more (as mentioned in the spec).
-   For SSR framework, get all the routes and then run the linter on the generated HTML. Since in SSR, all HTML is hidden in JS and linter would not be of much use.
-   Check HTML xmlns for XML, for stricter parsing.
-   `<p><p>Text</p></p>` - Linter can look into unnecessary tags as well. What is nested div's are used, but the code be replaced with just one div.
-   h1 tags should be in order, and there should be no skipping.
-   After reading best UI practices, see if these guidelines can be translated to a linter.
-   Ensure all the tags are closed. Every tag (should probably) have a certain number of valid tags that can be nested inside of it. This information might be helpful for guessing if the tag was closed or not. When using the HTML parser, you have to look into if the AST returned includes auto-closing nodes added by the parser, which is what we don't want. The reason why we don't want auto-closing tags, is it sometimes results in weird behavior.

    -   This website lists [most common errors](https://htmlparser.info/conformance-checkers/).

        ![Most common HTML errors](../../../assets/project_ideas/html_linter_most_common_errors.png)

### Minifier

-   For each tag, use the spec to minify to the extreme.
-   Add an option to further compress the output using popular compression techniques and show the output size comparison using various all the comparison options.
-   Use DOM analyzer, to test the effectiveness of the minifier, in terms of `querySelector` performance, number of nodes, and other relevant stuff.
-   For removing optional closing tags, one situation that comes to my mind is people modifying HTML from JS. Using `.innerHTML` to access HTML, would produce HTML without closing tags in production, which would be different from development, since the closing tags would be enforced through the linter.
-   Run the browser parser to generate HTML for the minified HTML and the original HTML, and it should be the same.

### Formatter

Create HTML formatter module for Configurable formatter.

### Parser library

-   Create a utility library that exposes the HTML parser that you use in previous projects, and can work on both full-HTML string and streaming HTML.
-   For the streaming HTMl, build a visualization tool to show how the DOM looks over time. The streaming should be at 1 character increment levels. And then of course you can provide a batch size option.
-   Show where the parser got halted. Like script, link, style tags halt the HTML parser. How can this information be made available to the users.

## CSS

### Inline style sorter

-   Sort inline styles using the same rules as Tailwind CSS
-   Use Tailwind logic to move all the inline styles to style.css

## Artificial Intelligence

### Pragmatic programmer

-   In the book Pragmatic programmer, there are multiple principles like DRY, orthogonality, and so on.
-   Additionally, there are various code examples that shows things not to do.
-   All of these things can be checked by AI on a codebase.
-   This can be implemented by taking checking one function at a time. Create different LLM prompts for each principle and run for each function.
-   The idea of the AI is to provide suggestions on why a certain pragmatic principle is being violated, and how to resolve it.
-   An optimization can include, only running this stuff on the modified code, after the initial cache of the entire codebase has been created.

Read the book again, for each example document it, and find similar examples online for best practices.

Another idea for checking duplication of utility function

-   Create a list of all the utility functions in a project, and optionally a string that describes the intent of each utility function.
-   When a new developer creates a utility function, they can query this database, to see if a similar utility function exists. And this can avoid duplication.
-   This workflow can be triggered from GitHub comments as well (which is really helpful during a pull request).

Another idea for testing orthogonality

-   Check the commit messages with bug/feature and create reports on the number of files changed, which can can test for orthogonality.

### Language best practices

-   For every language, there are common guidelines, best practices, best design patterns.
-   This is an extension to Pragmatic Programmer project, for language specific stuff.

### Charts

-   When creating charts, use AI to analyze how people of different calibre would use and understand the info.
-   For the chart, show how info can be improved, what is redundant, and what extra info can be added to improve comprehension, and what supplementary/complementary charts can be used.

## Other

### Static Page encrypt/decrypt

**Motivation**\
When hosting documentation on CND (without server), it is not possible to hide internal pages from public. HTTP password, hiding routes exist

-   Encrypt HTML of the page during build process, and when user navigates to the URL, the encrypted HTML is shown.
-   User can provide a one-way password (decryption key). The program decrypts the HTML. One optimization you can do is, every decrypted HTML should contain doctype at the top, so if the decrypted html does not start with doctype, then say incorrect password.
-   This encryption strategy can be extended to page components as well.
-   Store the password in cache and revalidate after some time.

### Spellcheck program

-   When using VSCode [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) extension, there are so many false positives.
-   Make your own spell checker, and provide utilities to add their own content.
-   For example, in case of HTML, the HTML spec contains all the valid words. So just add every word of HTML spec into the spell check dictionary, and this should include HTML specific words. You can look into creating separate dictionaries for each language.
-   An alternative, is to look into the grammar of each language and add all the keywords and stuff like that. Also, for each language there are rules like, the function name can be anything, so spell checker should not be enforced there.

### Project version and info tracker

**Motivation**\
Make it easier to track the dependency of packages used across multiple projects, thus helping with version upgrades. And the same reasoning for personal info, like the tagline I use across all social media.

Other stuff

-   For every dependency, For every dependency, show the location and version number that the dependency is used in, in tabular form. Current version, latest version, location. Set the background of the table cell based on how far the current version is from the latest version.
-   Create a C++ script that can automatically get the version number of all the dependencies used by a project. So if you have 10 projects, you provide it 10 urls/locations and 10 methods to get all the required version numbers. And then you run the script whenever you want to update the page. It also fetches the latest package version.
-   The information can be outputted in some standard format (read on which format to choose).
-   Also, add personal information tracking. Like you are using a tagline across multiple social media accounts and pages. So you list things like tagline, name and then list of all locations those things are used.
-   For MDN HTML docs, you have to check the modified files between the last and current commit.

### NBA Game App

-   How would a NBA game have played if there was a 4 point line, or the 3 point line was molded into a custom line, with all the related stats.
-   Create a leaderboard of who can make the losing team the winner the fastest by modifying the 3 point line.
-   Do the marketing and creating a viral hashtag like `myteamwon`.

## Company Ideas

### Basketball shooting machine

-   Set up basketball shooting machines in gym and create a website for people to book 1 hour sessions.
-   Split the charges/maintenance with the gym and yourself.
-   Invest money equivalent to the cost of the machine, before expansion.

### Ground marking machine

-   Get the machine for marking grounds for baseball, football, ... and approach schools to do this for them.

### Health information website

-   The purpose of the website is to provide information that a normal person can use (alternatively, what is the base fitness, health knowledge that every human should have). This should not be geared towards some domain experts like body lifters, athletes.
-   Create a website to provide information about healthy lifestyle (exercise, recovery, nutrition, sleep, ...).
-   Completely free and proof-checked with experts. Donations are welcome but not expected.
-   Have a forum section, where people can post suggestion for new/missing topics.
-   How to take care of each body part (ear, nose, eyes, ...).
-   For supplementation, show how you can get raw ingredients and make this stuff at home, optimized for your blood work/goals.

Companion app

-   To track stuff in a single place. Like for sleep, there are various metrics that can be tracked (all provided by a watch), or simply user logs.
-   Make this app available on a cloud provider that people can setup themselves, so as to ensure all the sensitive data stays with them.
-   Users can enter the stuff they eat daily (through a barcode scan) and the portion used, and the app will display the micro-nutrients consumed daily.

### Pharmacy company

-   Focus on one health domain, like eyes. What are all the possible disorders, and the best medicine for each.
-   For some medicines, companies charge ridiculous amount of money (due to patents and copyright).
-   Screw the patents, and create the cheapest possible option.
-   Make the final price of the medicine completely transparent. If the medicine cost $10, then break it down to the smallest factor and show how you got $10 as the final price.

### Origami machine

-   It takes paper and diagram and does all the pre-creasing.
-   Diagrams composed of grids, and creases are folds in the grid.
-   The machine first makes the grid, and then square by square makes the creases.
-   Software that helps making the creases easier.
    Create HTML formatter module for Configurable formatter.

### Stapler

-   Stapler that folds paper instead of using physical stable.

## Job roles explores

-   GIS
-   Licensed land surveyor field
-   Emergency management
-   Project associate recovery specialist
-   Mineral rights for oil and gas companies
-   Check if company is meeting compliance for something

## (Template) - Template repo

-   Create a template repo on github that you will use for all future side projects.
-   Create a script that walks through all the setup, and can read the config from a JSON file for example. So you should be able to recreate the entire repo using the JSON file and the script.
-   Also, if people want to make changes to the existing repo, see if the script can be adjusted for that as well.
-   Use GoLang, HTMX, Tailwind as the tech stack.
-   Along side the interactive tutorial script, have detailed documentation as well.
-   If you just want documentation, then the repo can be used to generate that as well. If you just want to write HTML files, then it can be used as well.
