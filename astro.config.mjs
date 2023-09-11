import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

// https://astro.build/config
export default defineConfig({
  site: 'https://KushajveerSingh.github.io',

  integrations: [
    starlightLinksValidator(),

    starlight({
      title: 'Kushajveer Singh',
      description:
        'This is my personal website. It contains information about all my projects, work experience, and details on how you can contact me. I also use this website to host my personal notes on all the technologies I am using and learning for fun.',

      logo: {
        src: '/src/assets/profile.jpg',
        // light: '/src/assets/profile.jpg',
        // dark: '/src/assets/profile.jpg',
        alt: 'My profile picture',
        replacesTitle: false,
      },

      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },

      editLink: {
        baseUrl:
          'https://github.com/KushajveerSingh/KushajveerSingh.github.io/edit/main/',
      },

      sidebar: [
        {
          label: 'Algorithms',
          collapsed: true,
          items: [
            { label: 'Leetcode', autogenerate: { directory: 'algorithms/leetcode' } },
            { label: 'Recursion', link: '/algorithms/recursion' },
            { label: 'Backtracking', link: '/algorithms/backtracking' },
            { label: 'Divide and Conquer', link: '/algorithms/divide_and_conquer' },
            { label: 'Dynamic Programming', link: '/algorithms/dynamic_programming' },
            { label: 'Greedy', link: '/algorithms/greedy' },
            { label: 'Linked List', link: '/algorithms/linked_list' },
            { label: 'Binary (Search) Tree', link : '/algorithms/binary_tree_and_search' },
            { label: 'Math', link : '/algorithms/math' },
          ],
        },
        {
          label: 'Short Notes',
          collapsed: true,
          items: [
            { label: 'HTML', autogenerate: { directory: 'short_notes/html' } },
            { label: 'React', autogenerate: { directory: 'short_notes/react' } },
            { label: 'Starlight', link: '/short_notes/starlight' },
            { label: 'Design System', link: '/short_notes/design_system' },
            { label: 'PostCSS', link: '/short_notes/postcss' },
            { label: 'Tailwind CSS', link: '/short_notes/tailwindcss' },
            { label: 'Express', link: '/short_notes/express' },
            { label: 'EJS', link: '/short_notes/ejs' },
            { label: 'ESLint', link: '/short_notes/eslint' },
            { label: 'Prettier', link: '/short_notes/prettier' },
            { label: 'pnpm', link: '/short_notes/pnpm' },
            { label: 'nvm (Node.js)', link: '/short_notes/nvm_nodejs' },
            { label: 'TOML', link: '/short_notes/toml' },
            { label: 'CPU working', link: '/short_notes/cpu' },
          ],
        },
        { label: 'Investing', autogenerate: { directory: 'investing' }, collapsed: true },
        {
          label: 'Rust',
          collapsed: true,
          items: [{ label: 'Docs', link: '/rust/docs' }],
        },
        {
          label: 'Header Links',
          collapsed: true,
          items: [
            { label: 'About', link: '/about' },
            { label: 'Blog', link: '/blog' },
            { label: 'Projects', link: '/projects' },
            { label: 'Work', link: '/work' },
            { label: 'Notes', link: '/notes' },
          ],
        },
      ],

      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
      },

      social: {
        github: 'https://github.com/KushajveerSingh',
        linkedin: 'https://www.linkedin.com/in/kushaj/',
        twitter: 'https://twitter.com/Kkushaj',
      },

      customCss: [],
      head: [],

      lastUpdated: true,
      pagination: true,
      favicon: '/favicon.ico',
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
