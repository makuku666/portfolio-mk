// List of all user projects
export const myProjects = [
  {
    // MERN-Redux Demo Shop
    name: 'MERN-Redux Demo Shop',
    description:
      'Simple shop demo which is using Redux for global state management.',
    stack: [
      'JS | React',
      'Redux',
      'SCSS/SASS',
      'Node | Express',
      'Mongoose | MongoDb',
      'Heroku',
      'external API',
    ],
    images: {
      carousel: false,
      src: ['projects/mern-redux-demo-shop.png'],
    },
    link: 'https://mern-redux-shop.herokuapp.com/',
  },
  {
    // Random User Stage
    name: 'Random User Stage',
    description:
      'Fetch random user entities from external API and display them as list.',
    stack: ['JS | React', 'SCSS/SASS', 'Netlify', 'external API'],
    images: {
      carousel: false,
      src: ['projects/RandomUserStage.png'],
    },
    link: 'https://random-user-stage.netlify.app/',
  },
  {
    // Where Am I?
    name: 'Where Am I?',
    description:
      'Find your position on the world map and get local information of your place.',
    stack: [
      'TypeScript | React',
      'SCSS/SASS',
      'Netlify',
      'MapBox',
      ' external APIs',
    ],
    images: {
      carousel: false,
      src: ['projects/WhereAmI.png'],
    },
    link: 'https://mk-where-am-i.netlify.app//',
  },
  {
    // "SIWEPP"
    name: 'SIWEPP (in progress)',
    description: `SImple WEb based resource Planning for Projects 
      A universal micro management system, on a calendar timeline basis, for managing existing resources.
      
      Watch daily project progress related by resources and save money for upcoming projects due to detailed planning properties.`,
    stack: [
      'Redwood.js',
      'JS | React',
      'Chakra UI',
      'Storybook & Jest',
      'Apollo | GraphQL',
      'Node | Express',
      'Postgre SQL',
    ],
    images: {
      carousel: true,
      src: ['projects/SIWEPPstart.png', 'projects/SiweppMain.png'],
    },
    link: '',
  },
]
