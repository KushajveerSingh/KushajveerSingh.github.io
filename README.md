Install [starlight](https://github.com/withastro/starlight)
```bash
npm create astro@latest -- --template starlight
```

Select
- `./` - Where should we create your new project?
- `Yes` - Install dependencies?
- `Yes` - Do you plan to write TypeScript?
- `Strictest` - How strict should TypeScript be?

Make the following changes
- Delete everything in `public` and place your desired favicon file here. Then add the path to favicon file in `astro.config.mjs`.
    ```ts
    export default defineConfig({
      integrations: [
        starlight({
          ...,
          favicon: '/favicon.ico',
          ...,
        })
      ]
    })
    ```
- Delete everything in `src/assets` folder. This folder is used to store all the images.
- Delete everything in `src/content/docs` except `src/content/docs/index.mdx` and change `index.mdx` to the following
    ```mdx
    ---
    title: Hello world
    template: splash
    ---

    Hello world
    ```
- Remove `sidebar` property in `astro.config.mjs`

The folder structure should be as follows
```bash
.
├── node_modules
├── public
│   └── favicon.ico
├── src
│   ├── assets
│   ├── content
│   │   ├── config.ts
│   │   └── docs
│   │       └── index.mdx
│   └── env.d.ts
├── .gitignore
├── astro.config.mjs
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

---

Add [starlight-links-validator](https://github.com/HiDeoo/starlight-links-validator) support.

```bash
npm install starlight-links-validator
```

Update `astro.config.mjs` to include Starlight Links Validator integration before the Starlight integration
```ts
import starlightLinksValidator from 'starlight-links-validator';

export default defineConfig({
  integrations: [
    starlightLinksValidator(),
	starlight({
      ...
    }),
  ],
});
```

---

Upgrade to latest version and see [CHANGELOG](https://github.com/withastro/starlight/blob/main/packages/starlight/CHANGELOG.md) before that
```bash
npm install @astrojs/starlight@latest
```
---

