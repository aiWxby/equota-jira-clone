export const taskSections = [
  {
    id: "to-do",
    sectionTitle: "TO DO",
  },
  {
    id: "doing",
    sectionTitle: "DOING",
  },
  {
    id: "done",
    sectionTitle: "DONE",
  },
];

export const taskList = [
  {
    belongsTo: "to-do",
    title: "Make a Kanban App",
    description:
      "Please use trello and designs in Dribble as reference. And carry on...",
    date: "12th Jan",
    author: "Prahlad",
    image: "https://picsum.photos/300",
    files: [
      {
        type: "url",
        content: "docs.google.com",
      },
      {
        type: "attachment",
        content: "main.psd",
      },
    ],
    tags: [
      {
        palette: "gray",
        content: "Design",
      },
      {
        palette: "success",
        content: "Development",
      },
    ],
    comments: {
      count: 3,
      avatars: [1, 2],
    },
  },
  {
    belongsTo: "to-do",
    title: "Fix his kid through any means",
    description: "",
    date: "12th Jan",
    author: "Hiranya",
    image: "",
    files: [
      {
        type: "attachment",
        content: "main.psd",
      },
    ],
    tags: [
      {
        palette: "gray",
        content: "Design",
      },
    ],
    comments: {
      count: 3,
      avatars: [1],
    },
  },
  {
    belongsTo: "to-do",
    title: "Share it with friends",
    description: "",
    date: "12th Jan",
    author: "Prahlad",
    image: "",
    files: [],
    tags: [],
    comments: {
      count: 7,
      avatars: [1, 2],
    },
  },
  {
    belongsTo: "doing",
    title: "Share the links for inspiration",
    description: "",
    date: "12th Jan",
    author: "Hiranya",
    image: "",
    files: [
      {
        type: "url",
        content: "dribble.com/ertugrul",
      },
      {
        type: "attachment",
        content: "main.psd",
      },
    ],
    tags: [
      {
        palette: "gray",
        content: "Design",
      },
      {
        palette: "success",
        content: "Development",
      },
    ],
    comments: {
      count: 1,
      avatars: [1],
    },
  },
  {
    belongsTo: "done",
    title: "Treatment by Fire",
    description: "",
    date: "12th Jan",
    author: "Narshima",
    image: "",
    files: [],
    tags: [
      {
        palette: "gray",
        content: "Design",
      },
    ],
    comments: {
      count: 8,
      avatars: [1],
    },
  },
  {
    belongsTo: "done",
    title: "Use Elephants and Snakes",
    description: "",
    date: "12th Jan",
    author: "Kumar",
    image: "",
    files: [],
    tags: [],
    comments: {
      count: 0,
      avatars: [],
    },
  },
];
