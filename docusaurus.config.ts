import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const remarkPlugins: any[] = [];
const rehypePlugins: any[] = [];

const config: Config = {
  title: 'Kushajveer Singh',
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
    'Full Stack Software Engineer with 7 years of experience in architecting and deploying end-to-end software solutions for internal tools and dashboards, with a focus on creating fail -safe systems optimized for performance and memory efficiency.',

  organizationName: 'KushajveerSingh',
  projectName: 'KushajveerSingh.github.io',
  deploymentBranch: 'gh-pages',

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },

    image: 'profile.jpeg',

    metadata: [],

    navbar: {
      title: 'Kushajveer Singh',
      logo: {
        alt: 'Kushajveer Singh profile picture',
        src: 'profile.jpeg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'notes',
          position: 'left',
          label: 'Notes',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
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
              label: 'Twitter',
              href: 'https://twitter.com/Kkushaj',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/kushaj/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/kushajveersingh/',
            },
          ],
        },
      ],
      hideOnScroll: true,
    },

    prism: {
      theme: prismThemes.palenight,
      darkTheme: prismThemes.palenight,
    },

    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Kushajveer Singh. All rights reserved.`,
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
          title: 'Blog',
          items: [
            {
              label: 'Blog',
              href: '/blog',
            },
            {
              html: `<div style="padding-bottom: 10px;"></div>`,
            },
            {
              html: `
              <a
                href="https://kushajveersingh.com/blog/tags"
                class="footer__link-item"
              >
                Tags
              </a>
              `,
            },
            {
              html: `
              <a
                href="https://kushajveersingh.com/blog/archive"
                class="footer__link-item"
              >
                Archive
              </a>
              `,
            },
            {
              html: `
              <a
                href="https://kushajveersingh.com/blog/rss.xml"
                class="footer__link-item"
              >
                RSS.xml
              </a>
              `,
            },
            {
              html: `
              <a
                href="https://kushajveersingh.com/blog/atom.xml"
                class="footer__link-item"
              >
                Atom.xml
              </a>
              `,
            },
            {
              html: `
              <a
                href="https://kushajveersingh.com/blog/feed.json"
                class="footer__link-item"
              >
                Feed.json
              </a>
              `,
            },
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/KushajveerSingh',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Kkushaj',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/kushaj/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/kushajveersingh/',
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
          path: 'notes',
          editUrl:
            'https://github.com/KushajveerSingh/KushajveerSingh.github.io/edit/main/',
          routeBasePath: 'notes',
          sidebarPath: './sidebars.ts',
          sidebarCollapsed: false,
          remarkPlugins: remarkPlugins,
          rehypePlugins: rehypePlugins,
          showLastUpdateTime: true,
        },
        blog: {
          editUrl:
            'https://github.com/KushajveerSingh/KushajveerSingh.github.io/edit/main/',
          blogTitle: 'Kushajveer Singh blog',
          blogDescription: 'Blog',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All posts',
          postsPerPage: 'ALL',
          remarkPlugins: remarkPlugins,
          rehypePlugins: rehypePlugins,
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            limit: false,
            title: 'Kushajveer Singh Blog',
            description: 'Blog',
            copyright: `Copyright © ${new Date().getFullYear()} Kushajveer Singh Blog. All rights reserved.`,
            language: 'en-US',
          },
          showLastUpdateTime: true,
        },
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

  markdown: {
    format: 'mdx',
    mermaid: true,
  },

  headTags: [],

  scripts: [
    {
      src: 'https://beamanalytics.b-cdn.net/beam.min.js',
      'data-token': '7b93b436-c2e2-4be3-b042-8e41b6afdaf6',
      async: true,
    },
  ],

  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
