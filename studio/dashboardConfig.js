export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea9de74afbb95fdd8bc9b2c',
                  title: 'Sanity Studio',
                  name: 'netstreit-demo-studio',
                  apiId: '5faad68f-d7ac-4868-959a-d615a44f5066'
                },
                {
                  buildHookId: '5ea9de7432749de1aeed21e0',
                  title: 'Landing pages Website',
                  name: 'netstreit-demo',
                  apiId: 'c26d3eb2-4610-4ab3-9004-763b5bfda6ec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bthornton/netstreit-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://netstreit-demo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
