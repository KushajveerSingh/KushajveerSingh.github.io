import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  todo: [
    'index',
    {
      type: 'category',
      label: 'Learning Resources',
      items: ['learning_resources/data_structures_and_algorithms'],
    },
    {
      type: 'category',
      label: 'Project Ideas',
      items: ['project_ideas/index'],
    },
  ],
};

export default sidebars;
