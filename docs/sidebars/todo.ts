import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  todo: [
    'index',
    {
      type: 'category',
      label: 'Learning Resources',
      items: [
        'learning_resources/digital_content',
        'learning_resources/web_development',
        'learning_resources/devops',
        'learning_resources/coding_interview',
        'learning_resources/books',
        'learning_resources/overemployment',
      ],
    },
    {
      type: 'category',
      label: 'Other',
      items: ['other/relevant_websites'],
    },
  ],
};

export default sidebars;
