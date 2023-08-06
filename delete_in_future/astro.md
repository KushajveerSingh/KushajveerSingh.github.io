https://docs.astro.build/en/tutorial/5-astro-api/1/

# Astro

## Table of Contents
- [Setup](#setup)
    - [VS Code](#vs-code)
    - [ESLint](#eslint)
    - [Prettier](#prettier)
- [Add variables in .astro files](#add-variables-in-astro-files)
- [Add css in .astro files](#add-css-in-astro-files)
- [Astro components](#astro-components)
- [Add JS for client-side interactivity](#add-js-for-client-side-interactivity)

## Setup

Install Astro (v2.8.5) `pnpm create astro@latest`
- `./test_project` - create project in current directory
- Include sample files
- (Yes) Install dependencies
- (Yes) Use TypeScript
- (Strictest) How strict should TypeScript be
- (Yes) Initialize a new git repo

Install astro from a GitHub repo using
`pnpm create astro@latest --template <github-username>/<github-repo>#<branch>`.

Start dev server using `pnpm run dev` at http://localhost:30000/.

Other
- Delete `public/favicon.svg`.
- Delete `src/components`.
- Delete `src/layouts`.
- Remove everything from `src/pages/index.astro` and put `<h1>Hello World</h1>`.

### VS Code
- Install [Astro VSCode Extenstion](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode).
- Install [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extenstion.
- Install [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) extenstion.
- Create `.vscode/settings.json`
    ```json
    {
      "prettier.documentSelectors": ["**/*.astro"],
      "[astro]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "stylelint.validate": ["astro"],
      "eslint.validate": ["javascript", "javascriptreact", "astro", "typescript", "typescriptreact"]
    }
    ```

### ESLint
`pnpm install --save-dev typescript eslint eslint-plugin-astro @typescript-eslint/parser`

Create `.eslintrc.js`
```js
module.exports = {
  extends: [
    "plugin:astro/recommended",
  ],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
    // ...
  ],
}
```

### Prettier
- In VSCode extension, Prettier and the prettier-plugin-astro are already included.    
- Add `READEME.md` to `.prettierignore`.
- Add the following to `.prettierrc`
    ```json
    {
      "printWidth": 100,
      "semi": true,
      "singleQuote": true,
      "tabWidth": 2,
      "trailingComma": "es5",
      "editor.formatOnSave": true,
      "proseWrap": "always",
      "useTabs": false,
      "plugins": ["./node_modules/prettier-plugin-astro"]
    }
    ```

## Add variables in .astro files
The syntax is the same as JSX.

```html
---
const var = 'Somethhing';
const skills = ['HTML', 'CSS', 'JS'];
const ifTrue = true;
---

<html>
  <body>
    <p>{var}</p>
    
    {skills.map((skill) => <li>{skill}</li>)}

    {ifTrue ? <p>True tag</p> : <p>False tag</p>}
    {ifTrue && <p>True tag</p>}
  </body>
</html>
```

## Add css in .astro files
Add it is `<head>` tag like normal. You can reference the JS variables indide it also (you have to define the variables in the `<style>` tag before that).

```html
---
const skillColor = 'navy';
---

<html>
  <head>
    <style define:vars={{ skillColor }}>
      .skill {
        color: var(--skillColor);
      }
    </style>
  </head>

  <body>
    {skills.map(skill => <li class='skill'>{skill}</li>)}
  </body>
</html>
```

Import CSS files, to apply global styles
```html
---
import '../styles/global.css';
---
```

## Astro components
The `---` at the top can be removed if you don't need them.

Create `src/components/Social.astro`
```html
---
const { platform, username } = Astro.props;
---

<html>
  <body>
    <a href={`https://www.${platform}.com/${usernname}`}>{platform}</a>
  </body>
</html>
```

Import the component in other files
```html
---
import Social from '../components/Social.astro';
---

<html>
  <body>
    <Social platform="twitter" username="kushaj" />
  </body>
</html>
```

## Add JS for client-side interactivity
At the bottom specify the JS in `<script>` tags.

```html
---
---

<html>
  <body>
    <script>
      document.querySelectoor('.hamburger').addEventListener('click', () => {});
    </script>
  </body>
</html>
```

Or import JS file (`src/scripts/menu.js`)
```js
document.querySelectoor('.hamburger').addEventListener('click', () => {});
```

Import the file
```html
<html>
  <body>
    <script>
      import "../scripts/menu.js";
    </script>
  </body>
</html>
```

## Layouts
Create layout in `src/laytouts/BaseLayout.astro`. Use `<slot />` to specify where the children elements would be added.
```html
---
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import '../styles/global.css';
const pageTitle = Astro.props;
---
<html lang="en">
  <head>
    <title>{pageTitle}</title>
  </head>
  <body>
    <Header />
    <slot />
    <Footer />

    <script>
      import "../scripts/menu.js";
    </script>
  </body>
</html>
```

Use the above layout
```html
---
import BaseLayout from '../layouts/BaseLayout.astro';
const pageTitle = 'Home Page';
---

<BaseLayout pageTitle={pageTitle}>
  <h1>Child elements</h1>
</BaseLayout>
```

To use the layout in Markdown files, add it in the frontmatter and then in the layout you can reference all the properties in the frontmatter
```html
---
layout: ../layouts/BlogLayout.astro
title: Blog
---
```

In `layouts/BlogLayout.astro`
```html
---
const { frontMatter } = Astro.props;
---

<h1>{frontMatter.title}</h1>
```

## Useful astro methods
`Astro.glob` returns a list objects matching the patterns (with the object being the frontmatter).