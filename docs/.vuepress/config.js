module.exports = {
  title: 'Vue component library',
  description: 'Vue component library documentation',
  themeConfig: {
    repo: 'frederikwagner/vue-component-library',
    sidebarDepth: 2,
    sidebar: [
      ['/', 'Home'],
      ['/inspiration', 'Inspiration'],
      {
        title: 'Creating your own library',
        collapsable: false,
        children: [
          ['/create/getting-started', 'Getting started'],
          ['/create/development', 'Development'],
          ['/create/project-structure', 'Project structure'],
          ['/create/deployment', 'Deployment']
        ]
      },
      {
        title: 'Using the standard library',
        collapsable: false,
        children: [
          ['/use/getting-started', 'Getting started'],
          ['/use/global-styles', 'Global styles']
        ]
      },
      {
        title: 'Standard components',
        collapsable: false,
        children: [
          ['/components/component-types', 'Component types'],
          ['/components/BaseButton', '<base-button>']
        ]
      }
    ]
  }
}
