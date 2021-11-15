export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '61921c086b8d4943b36baa6d',
                  title: 'Sanity Studio',
                  name: 'quzi-qorin-blog-studio',
                  apiId: '0bceb762-c549-472d-a5f0-7d615bfb7c53'
                },
                {
                  buildHookId: '61921c08edf7c8157b4f1366',
                  title: 'Blog Website',
                  name: 'quzi-qorin-blog',
                  apiId: 'ec0b950e-fd55-4a8d-9954-a0967a7d39f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/quziqorin/quzi-qorin-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://quzi-qorin-blog.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
