import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

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
      defaultMode: 'dark',
      // respectPrefersColorScheme: true,
    },

    // FOr meta, og:image, twitter:image
    image: 'profile.jpeg',

    metadata: [],

    navbar: {
      title: 'Kushajveer Singh',
      logo: {
        alt: 'Kushajveer Singh profile picture',
        src: 'profile.jpeg',
      },
      hideOnScroll: true,
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
          label: 'Social',
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
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Main',
          items: [
            {
              label: 'Home',
              to: '/',
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
              label: 'Archived Posts',
              href: '/blog/archive',
            },
            {
              label: 'RSS.xml',
              href: '/blog/rss.xml',
            },
            {
              label: 'Atom.xml',
              href: '/blog/atom.xml',
            },
            {
              label: 'Feed.json',
              href: '/blog/feed.xml',
            },
          ],
        },
        {
          title: 'Social',
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
      copyright: `Copyright © ${new Date().getFullYear()} Kushajveer Singh. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/KushajveerSingh/KushajveerSingh.github.io/tree/main/',
          routeBasePath: 'notes',
          sidebarCollapsed: false,
          remarkPlugins: [],
          rehypePlugins: [],
          showLastUpdateTime: true,
        },
        blog: {
          blogTitle: 'title for seo',
          blogDescription: 'description for seo',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All posts',
          showReadingTime: true,
          postsPerPage: 'ALL',
          remarkPlugins: [],
          rehypePlugins: [],
          feedOptions: {
            type: 'all',
            limit: false,
            title: 'Kushajveer Singh Blog',
            description: 'TODO add description for blog',
            copyright: `Copyright © ${new Date().getFullYear()} Kushajveer Singh Blog. All rights reserved.`,
            language: 'en-US',
          },
          editUrl:
            'https://github.com/KushajveerSingh/KushajveerSingh.github.io/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  markdown: {
    format: 'mdx',
    mermaid: true,
    remarkRehypeOptions: {},
  },

  scripts: [
    {
      src: 'https://beamanalytics.b-cdn.net/beam.min.js',
      'data-token': '7b93b436-c2e2-4be3-b042-8e41b6afdaf6',
      async: true,
    },
  ],
};

export default config;
