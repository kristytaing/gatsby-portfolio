module.exports = {
  SiteTitle: 'Kristy',
  Sitelogo: '#',
  SiteLogoText: 'Kristy',
  SiteAuthor: 'Kristy Taing',
  SiteDescription: 'Front End Developer',
  defaultDescription: 'Software engineer!',
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  },
  SiteSocialLinks: {
    twitter: 'https://twitter.com/KristyTaing',
    github: 'https://github.com/KristyTaing',
    linkedin: 'https://www.linkedin.com/in/kristytaing/',
  },
  SiteAddress: {
    city: 'San Francisco',
    region: 'California',
    country: 'US',
    zipCode: '94110',
  },
  SiteContact: {
    email: 'kristy.taing@gmail.com',
    phone: 'phone number',
  },
  SiteCopyright: '2020',
};
