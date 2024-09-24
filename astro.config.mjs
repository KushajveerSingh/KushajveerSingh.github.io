// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

import starlightImageZoom from 'starlight-image-zoom';

// https://astro.build/config
export default defineConfig({
  site: 'https://KushajveerSingh.github.io',
  trailingSlash: 'always',

  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
  },

  integrations: [
    tailwind({ applyBaseStyles: true }),

    starlight({
      title: 'Kushajveer Singh Sooch',
      description:
        'Full-stack software engineer. Love hiking & orienteering, painting in various mediums, and occasionally crafting origami.',

      editLink: {
        baseUrl: 'https://github.com/KushajveerSingh/notes/edit/main/',
      },

      sidebar: [
        {
          label: 'Documentation',
          items: ['documentation/starlight'],
        },
        {
          label: 'Internal',
          items: [
            {
              label: 'Learning Resources',
              items: [
                'learning_resources/books',
                'learning_resources/random',
                'learning_resources/digital_content',
                'learning_resources/full_stack',
                'learning_resources/devops',
                'learning_resources/software',
                'learning_resources/job',
                'learning_resources/cpp',
                'learning_resources/apple',
              ],
            },
            'project_ideas',
            'working',
          ],
          collapsed: true,
        },
      ],

      customCss: ['./src/tailwind.css'],

      social: {
        instagram: 'https://www.instagram.com/kushajveersingh/',
        github: 'https://github.com/KushajveerSingh/notes',
        linkedin: 'https://www.linkedin.com/in/kushaj/',
        'x.com': 'https://x.com/Kkushaj',
      },

      expressiveCode: {
        // @ts-ignore
        plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
      },

      head: [
        {
          tag: 'script',
          attrs: {
            src: 'https://beamanalytics.b-cdn.net/beam.min.js',
            'data-token': '7b93b436-c2e2-4be3-b042-8e41b6afdaf6',
            async: true,
          },
        },
      ],

      lastUpdated: true,
      favicon: '/favicon.ico',

      plugins: [starlightImageZoom()],

      credits: false,
    }),
  ],
});
