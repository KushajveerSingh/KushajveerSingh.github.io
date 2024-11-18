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
          label: 'Frontend',
          items: ['frontend/web_platform'],
        },
        {
          label: 'Books',
          items: [
            {
              label: 'General Programming',
              items: [
                'books/general_programming/the_pragmatic_programmer_your_journey_to_mastery',
                'books/general_programming/design_patterns_elements_of_reusable_object_oriented_software',
              ],
            },
          ],
        },
        {
          label: 'C#',
          items: ['csharp/tooling'],
        },
        {
          label: 'Internal',
          items: [
            'internal/adventure',
            'internal/project_ideas',
            'internal/tracker',
            'internal/working',
            {
              label: 'Learning Resources',
              items: [
                'internal/learning_resources/digital_content',
                'internal/learning_resources/full_stack',
                'internal/learning_resources/software',
                'internal/learning_resources/devops',
                'internal/learning_resources/random',
                'internal/learning_resources/certifications',
                'internal/learning_resources/books',
                'internal/learning_resources/job',
                'internal/learning_resources/money',
                {
                  label: 'Programming Languages',
                  autogenerate: {
                    directory:
                      'internal/learning_resources/programming_languages',
                  },
                },
              ],
            },
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
