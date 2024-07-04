# KushajveerSingh.github.io

## Frontmatter

### Docs

```
title:
description:
image:
slug:
draft: false
unlisted: false (hidden, not indexed, excluded from sitemap)


id: (file path without extension) unique document ID
pagination_label: text used in next/prev
sidebar_label: text used in sidebar
sidebar_position: a number
hide_title: (false) to not show 'title' as h1
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
pagination_next: id of document you want next, or 'null' to hide next button
pagination_prev: same as above
custom_edit_url: pass null to disable editing, or provide a custom url
tags: undefined
last_update: to override last update author/date
```

### Blog

```
title:
description:
image:
slug:
authors: kushaj
date:
tags: []
draft: false
unlisted: false

hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
last_update: undefined
```

### Pages

```
title:
description:
image:
draft: false
unlisted: false
hide_table_of_contents: false
```

## TODO

-   modify src/css/custom.css to use tailwind theme or a custom theme
-   create a global data.ts file and move src/pages.index.tsx (title, description info to that)
-   add blog/authors.yml to data.ts
-   in docusaurus.config.ts, move the following to data.ts
    -   title, url, tagline
    -   blogtitle, blogdescription
    -   feedOptions.title, feedOptions.description, feedOptions.copyright
-   add headTags in docusaurus.config.ts based on html head options
-   generate favicon (other things that you would have done for picpulse project)
-   modify kushajveersingh.com/blog and kushajveersingh.com/blog/tags page
-   add support for plugin-pwa
-   Verify all links in footer are working
-   in docusaurus.config.ts themeConfig
    -   image: tfor og:image, twitter:image
    -   metadata
    -   add navbar fields to data.ts
    -   add all socials
    -   move socials to data.ts
    -   organize duplication in footer links, and move copyright to data.ts

## Pages

-   Create in `src/pages`. It is recommended to create a directory for each page, to keep all the styles, components in the same place. Like `src/pages/support/index.tsx`.
-   Import styles using `import styles from './styles.module.css';`.
-   Files prefixed with underscore, would be ignored and no route will be created.
-   `.tsx` page

    ```tsx
    import Layout from '@theme/Layout'; // for navbar, footer

    export default function Page(): JSX.Element {
        return (
            <Layout>
                <div>Hello World</div>
            </Layout>
        );
    }
    ```

-   `.mdx` page

    ```mdx
    ---
    title: Kushajveer Singh
    hide_table_of_contents: true
    ---

    Hello world
    ```

## Docs

-   Each document can be tagged like in a blog post.
-   Every document has an id. For `docs/guide/hello.md` the id is `guide/hello`. Is id used for refering document when creating sidebar.
-   The following URLs will all resolve to `docs/Guides`
    -   `/docs/Guides/index.md`
    -   `/docs/Guides/README.md`
    -   `/docs/Guides/Guides.md`
-   `slug` can be used to change the url of the document. It can be absolute or relative to the current folder.
    -   `slug: /myslug` - absolute from base url.
    -   `slug: myslug`, `slug: ./../myslug` - relative to current folder.
-   Recommended to make file system mirror the sidebar structure, and use `slug` to customize the url of each document.
    -   Docusaurus supports number prefix patterns i.e. it will remove the number prefix from the doc id, title, label, URL paths. So you can name your files like `01-Intro.md`.
    -   The above approach has a downside, that when you update the file name, all other file names also need to be updated, which can affect hyperlinks as well.
    -   Instead you can provide sidebar position using `sidebar_position: 2` frontmatter.

## Blog

-   Files can be named
    -   `YYYY-MM-DD-my-blog-post-title.mdx` - md file
    -   `YYYY-MM-DD-blog-title/index.mdx` - folder + md file
    -   `category/YYYY/MM-DD-my-blog-post.mdx`

## CSS

-   See list of available class names [here](https://docusaurus.io/docs/styling-layout#theme-class-names).
-   [Infima](https://infima.dev/) is used. Refer to their components, for more details. Use [ColorBox](https://colorbox.io/) to generate 7 shades of color, which is used by Infima when creating the theme. Also, check the colors at this [link](https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima) to ensure accessibility.
-   Using CSS modules.

    -   Create `styles.module.css`.
        ```css
        .main {
            padding: 12px;
        }
        ```
    -   Import it in JS.

        ```tsx
        import styles from './styles.module.css';

        function Comp(): JSX.ELement {
            return <main className={styles.main}></main>;
        }
        ```

## Swizzling

The `Root` component can be swizzled (wrapped not ejected) to add authentication logic.

```jsx
// src/theme/Root.js
export default function Root({ children }) {
    return <>{children}</>;
}
```

## Static assets

-   In JS, do not use absolute paths, as these would break when `baseUrl` is modified. Use `import()`, `require()`, `useBaseUrl` instead.

    ```jsx
    import Img from '@site/static/img/my_img.png';

    <img src={Img} />;
    ```

    ```jsx
    <img src={require('@site/static/img/my_img.png').default} />
    ```

    ```jsx
    import useBaseUrl from '@docusaurus/useBaseUrl';

    <img src={useBaseUrl('/img/my_img.png')} />;
    ```

-   In markdown, absolute paths can be used, as they are internally resolved to `require()`.

    ```mdx
    [Link](/img/my_img.png)

    <a href={require('static/img/my_img.png')}>Link</a>
    ```

-   In CSS, use absolute paths.

    ```css
    @font-face {
        src: url('/font/Caroline.otf');
    }
    ```

## Markdown

MDX is converted to JSX. So write MDX as you would JSX.

### Define a component in file

```mdx
export const Comp = ({ children }) => <div>{children}</div>;

<Comp>Something</Comp>
```

### Register components globally

You can register components globally, to be available in all the files without import by wrapping `MDXComponents` ([link](https://docusaurus.io/docs/markdown-features/react#mdx-component-scope)).

### Import text files as codeblock

Install raw-loader

```
npm install --save raw-loader
```

```mdx
import CodeBlock from '@theme/CodeBlock';
import SourceFile from '!!raw-loader!./file';

<CodeBlock language='jsx'>{SourceFile}</CodeBlock>
```

### Import markdown files

Prefix the markdown file with underscore, to not create a doc page.

```mdx
<span>Hello {props.name}</span>
```

Import the markdown file

```mdx
import PartialExample from './_markdown-partial-example.mdx';

<PartialExample name='World' />
```

### Components - Tabs

This can be used to Python, JS implementation side by side.

-   With `groupId` tabs can be synced (the value is stored in local-storage).
-   You can provide a default value using `<Tabs defaultValue="label_value" ...>`.
-   To render only the default tab use `<Tabs lazy ...>`.
-   To add the selected tab to the URL, use `queryString`, and whenever a tab is clicked it will add `?current-os=android` to the url. When not using `groupId` you can provide it as `queryString='current-os'`.

```mdx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    groupId='operating-systems'
    queryString
>
    <TabItem
        value='win'
        label='Windows'
    >
        Use Ctrl + C to copy.
    </TabItem>
    <TabItem
        value='mac'
        label='macOS'
    >
        Use Command + C to copy.
    </TabItem>
</Tabs>
```

### Code blocks

Supported languages

-   See list of default languages added by Docusaurus [here](https://github.com/FormidableLabs/prism-react-renderer/blob/master/packages/generate-prism-languages/index.ts#L9-L23).
-   Add additional languages to `themeConfig.prism.additionalLangauges`. The name here should match `prism-{language}.js`. So although you can use `cs` for C#, the name in `additionalLanguages` would be `csharp`.
-   See list of Prism supported languages [here](https://prismjs.com/#supported-languages).

Codeblock features

-   `jsx title="/src/pages/hello.tsx` - to add title.
-   `// highlight-next-line` - highlight next line.
-   `// highlight-start` and `// highlight-end` - highlight all lines within this.
-   `jsx {1,4-6,11}` - another way to highlight lines.
-   Instructions to add your own magic comments with css (like a red line for errors) are [here](https://docusaurus.io/docs/markdown-features/code-blocks#custom-magic-comments).
-   `jsx showLineNumbers` (swizzling CodeBlock component to add `showLineNumbers` by default, should work).

### Admonitions

```mdx
:::note[Your title]

Some conmtent.

:::
```

These can be nested as well by having for colons in the parent.

Following are supported

-   note
-   tip
-   info
-   warning
-   danger

## Images

Themed images are also supported.

```mdx
import ThemedImage from '@theme/ThemedImage';

<ThemedImage
    alt='Docusaurus themed image'
    sources={{
        light: useBaseUrl('/img/docusaurus_light.svg'),
        dark: useBaseUrl('/img/docusaurus_dark.svg'),
    }}
/>
;
```

Check [this](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image) for an optimized Image component (only for png, jpg).

### Math equations

Use `$...$` for inline equations.

Use `$$ .. $$` for multi line equations.

### Diagrams

Use `mermaid` as the language for the codeblock.

To generate dynamic diagrams use the `@theme/Mermaid` component.

```
themeConfig: {
    mermaid: {
        theme: {
            light: 'neutral',
            dark: 'forest',
        },
        options: {
            // Passed directly to mermaid.initialize
        }
    },
}
```

## Docusaurus components

### Head

```jsx
import Head from '@docusaurus/Head';

const MySEO = () => (
    <Head>
        <meta
            property='og:description'
            content='My custom description'
        />
        <meta charSet='utf-8' />
        <title>My Title</title>
        <link
            rel='canonical'
            href='http://mysite.com/example'
        />
    </Head>
);
```

### Link

```jsx
import Link from '@docusaurus/Link';

const Page = () => (
    <div>
        <p>
            Check out my <Link to='/blog'>blog</Link>!
        </p>
        <p>
            Follow me on{' '}
            <Link to='https://twitter.com/docusaurus'>Twitter</Link>!
        </p>
    </div>
);
```
