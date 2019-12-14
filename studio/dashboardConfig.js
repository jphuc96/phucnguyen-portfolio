export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5df4755592246703818adfba',
                  title: 'Sanity Studio',
                  name: 'phucnguyen-portfolio-studio',
                  apiId: 'f03d0a7c-a28d-4dd3-8f41-1773584b3ee5'
                },
                {
                  buildHookId: '5df47555c3ede959e565be17',
                  title: 'Portfolio Website',
                  name: 'phucnguyen-portfolio',
                  apiId: '49e22394-a92d-496a-be38-ccf4367774c4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jphuc96/phucnguyen-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://phucnguyen-portfolio.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
