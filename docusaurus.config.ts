import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const remarkPlugins: any[] = [remarkMath];
const rehypePlugins: any[] = [rehypeKatex];

const docs_obj = {
  editUrl:
    'https://github.com/KushajveerSingh/KushajveerSingh.github.io/edit/main/',
  sidebarCollapsed: false,
  remarkPlugins: remarkPlugins,
  rehypePlugins: rehypePlugins,
  showLastUpdateTime: true,
};

const config: Config = {
  title: 'Kushajveer Singh Sooch',
  url: 'https://kushajveersingh.com/',
  baseUrl: '/',

  favicon: 'favicon.ico',

  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US'],
  },

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',

  tagline:
    'Full-stack software engineer. Love hiking & orienteering, painting in various mediums, and occasionally crafting origami.',

  organizationName: 'KushajveerSingh',
  projectName: 'KushajveerSingh.github.io',
  deploymentBranch: 'gh-pages',

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },

    image: 'profile.jpeg',

    metadata: [
      {
        name: 'description',
        content:
          'Full-stack software engineer. Love hiking & orienteering, painting in various mediums, and occasionally crafting origami.',
      },
    ],

    navbar: {
      title: 'Kushajveer Singh Sooch',
      logo: {
        alt: 'Kushajveer Singh Sooch profile picture',
        src: 'profile.jpeg',
      },
      items: [
        {
          to: 'notes/',
          position: 'left',
          label: 'Notes',
        },
        {
          to: 'work/',
          position: 'left',
          label: 'Work',
        },
        {
          to: 'projects/',
          position: 'left',
          label: 'Projects',
        },
        {
          to: 'certifications/',
          position: 'left',
          label: 'Certifications',
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
        {
          type: 'dropdown',
          label: 'Socials',
          position: 'right',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/KushajveerSingh',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/kushajveersingh/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Kkushaj',
            },
          ],
        },
      ],
      hideOnScroll: true,
    },

    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
    },

    prism: {
      theme: prismThemes.palenight,
      darkTheme: prismThemes.palenight,
      additionalLanguages: [],
    },

    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Kushajveer Singh Sooch. All rights reserved.`,
      style: 'dark',
      links: [
        {
          title: 'Main',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              html: `
              <a
                href="https://kushajveersingh.com/sitemap.xml"
                class="footer__link-item"
              >
                Sitemap
              </a>
              `,
            },
          ],
        },
        {
          title: 'Notes',
          items: [
            {
              label: 'Notes',
              to: '/notes',
            },
          ],
        },
        {
          title: 'Work',
          items: [
            {
              label: 'Work',
              to: '/work',
            },
          ],
        },
        {
          title: 'Projects',
          items: [
            {
              label: 'Projects',
              to: '/projects',
            },
          ],
        },
        {
          title: 'Certifications',
          items: [
            {
              label: 'Certifications',
              to: '/certifications',
            },
          ],
        },
        // {
        //   title: 'Blog',
        //   items: [
        //     {
        //       label: 'Blog',
        //       href: '/blog',
        //     },
        //     {
        //       html: `<div style="padding-bottom: 10px;"></div>`,
        //     },
        //     {
        //       html: `
        //       <a
        //         href="https://kushajveersingh.com/blog/tags"
        //         class="footer__link-item"
        //       >
        //         Tags
        //       </a>
        //       `,
        //     },
        //     {
        //       html: `
        //       <a
        //         href="https://kushajveersingh.com/blog/archive"
        //         class="footer__link-item"
        //       >
        //         Archive
        //       </a>
        //       `,
        //     },
        //     {
        //       html: `
        //       <a
        //         href="https://kushajveersingh.com/blog/rss.xml"
        //         class="footer__link-item"
        //       >
        //         RSS.xml
        //       </a>
        //       `,
        //     },
        //     {
        //       html: `
        //       <a
        //         href="https://kushajveersingh.com/blog/atom.xml"
        //         class="footer__link-item"
        //       >
        //         Atom.xml
        //       </a>
        //       `,
        //     },
        //     {
        //       html: `
        //       <a
        //         href="https://kushajveersingh.com/blog/feed.json"
        //         class="footer__link-item"
        //       >
        //         Feed.json
        //       </a>
        //       `,
        //     },
        //   ],
        // },
        {
          title: 'Socials',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/KushajveerSingh',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/kushajveersingh/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Kkushaj',
            },
          ],
        },
      ],
    },

    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
  } satisfies Preset.ThemeConfig,

  presets: [
    [
      'classic',
      {
        docs: {
          ...docs_obj,
          path: 'docs/notes',
          routeBasePath: 'notes',
          sidebarPath: './docs/sidebars/notes.ts',
        },
        // blog: {
        //   editUrl:
        //     'https://github.com/KushajveerSingh/KushajveerSingh.github.io/edit/main/',
        //   blogTitle: 'Kushajveer Singh blog',
        //   blogDescription: 'Blog',
        //   blogSidebarCount: 'ALL',
        //   blogSidebarTitle: 'All posts',
        //   postsPerPage: 'ALL',
        //   remarkPlugins: remarkPlugins,
        //   rehypePlugins: rehypePlugins,
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: 'all',
        //     limit: false,
        //     title: 'Kushajveer Singh Blog',
        //     description: 'Blog',
        //     copyright: `Copyright © ${new Date().getFullYear()} Kushajveer Singh Sooch Blog. All rights reserved.`,
        //     language: 'en-US',
        //   },
        //   showLastUpdateTime: true,
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: null,
          priority: null,
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        ...docs_obj,
        id: 'work',
        path: 'docs/work',
        routeBasePath: 'work',
        sidebarPath: './docs/sidebars/work.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        ...docs_obj,
        id: 'projects',
        path: 'docs/projects',
        routeBasePath: 'projects',
        sidebarPath: './docs/sidebars/projects.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        ...docs_obj,
        id: 'certifications',
        path: 'docs/certifications',
        routeBasePath: 'certifications',
        sidebarPath: './docs/sidebars/certifications.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        ...docs_obj,
        id: 'todo',
        path: 'docs/todo',
        routeBasePath: 'todo',
        sidebarPath: './docs/sidebars/todo.ts',
      },
    ],
  ],

  markdown: {
    format: 'mdx',
    mermaid: true,
  },

  headTags: [],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  scripts: [],

  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
