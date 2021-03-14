// List of all user projects
export const myProjects = [
  {
    // Random User Stage
    name: 'Random User Stage',
    description:
      'Fetch random user entities from external API and display them as list.',
    stack: ['React', 'HTML5/Scss', 'Netlify', 'external API'],
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
      'Load this page, enable browser localization(GPS) and see your position on the map. Additionally you will get some country information.',
    stack: ['React', 'HTML5/CSS3', 'Netlify', 'MapBox', ' external APIs'],
    images: {
      carousel: false,
      src: ['projects/WhereAmI.png'],
    },
    link: 'https://mk-where-am-i.netlify.app//',
  },
  {
    // "SIWEPP"
    name: 'SIWEPP (in progress)',
    description:
      "SImple WEb based resource Planning for Projects\n It's a universal micro management system, on a calendar timeline basis, for managing existing resources.\nWatch daily project progress related by resources (eg. equipment) and save money for upcoming projects due to detailed planning properties.",
    stack: [
      'React',
      'HTML5/CSS3/Sass',
      'Material UI',
      'Netlify',
      'Express',
      'Postgre SQL',
      'Heroku',
    ],
    images: {
      carousel: true,
      src: ['projects/SIWEPPstart.png', 'projects/SiweppMain.png'],
    },
    link: '',
  },
  // {
  //   // Endless Candle
  //   name: 'Endless candle',
  //   description:
  //     'Excercise about React basic hooks\n This candle is a bit modified by me. Now she can burn forever 😁',
  //   stack: ['React', 'Netlify'],
  //   images: {
  //     carousel: false,
  //     src: ['projects/endlessCandle.PNG'],
  //   },
  //   link: 'https://mks-endless-candle.netlify.app/',
  // },
  {
    // Hackernews clone
    name: 'H4ck3rn3ws Clon3',
    description:
      'Group project, establish interaction with the Hacker News API and display results.',
    stack: ['React', 'Bootstrap', ' external API'],
    images: {
      carousel: false,
      src: ['projects/HackernewsClone.PNG'],
    },
    link: 'https://h4ck3rn3ws-clon3.netlify.app/',
  },
]
