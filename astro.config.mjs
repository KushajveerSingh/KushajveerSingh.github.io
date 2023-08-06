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
      description: 'This is my personal website. It contains information about all my projects, work experience, and details on how you can contact me. I also use this website to host my personal notes on all the technologies I am using and learning for fun.',
      
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
        baseUrl: 'https://github.com/KushajveerSingh/KushajveerSingh.github.io/edit/main/'
      },

      sidebar: [
        { 
          label: 'Short Notes',
          items: [
            { label: 'Starlight', link: '/short_notes/starlight' },
          ],
        },
        { label: 'Currently working on', link: '/currently_working_on' },
        {
          label: 'Header Links',
          collapsed: true,
          items: [
            { label: 'About', link: '/about' },
            { label: 'Blog', link: 'https://www.kushajveersingh.com/blog/' },
            { label: 'Projects', link: '/projects' },
            { label: 'Work', link: '/work' },
          ]
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
