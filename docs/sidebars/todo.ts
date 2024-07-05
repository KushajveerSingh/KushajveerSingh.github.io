import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  todo: [
    'index',
    {
      type: 'category',
      label: 'Learning Resources',
      items: [
        'learning_resources/digital_content',
        'learning_resources/coding_interview',
      ],
    },
    {
      type: 'category',
      label: 'Project Ideas',
      items: ['project_ideas/index'],
    },
  ],
};

export default sidebars;
