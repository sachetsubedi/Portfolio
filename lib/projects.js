const colors = {
  html: "#f06529",
  css: "#2965f1",
  javascript: "#d1ca08",
  react: "#61dafb",
  nodejs: "#026e00",
  express: "#000000",
  mongodb: "#13aa52",
  postgresql: "#336791",
  socketio: "#010101",
  tailwind: "#06b6d4",
  nextjs: "#000000",
  typescript: "#007acc",
  reacthookform: "#b50e83",
  shadcn: "#000000",
};

export const projects = [
  {
    title: "CLI chatroom",
    description: "A simple chatroom implemented in the terminal",
    links: {
      github: "https://github.com/sachetsubedi/chat-CLI",
      demo: "https://cli.sachetsubedi001.com.np",
    },
    components: [
      {
        title: "Node Js",
        color: colors.nodejs,
      },
      {
        title: "HTML",
        color: colors.html,
      },
      {
        title: "Socket.io",
        color: colors.socketio,
      },
      {
        title: "Tailwind CSS",
        color: colors.tailwind,
      },
      {
        title: "Express JS",
        color: colors.express,
      },
    ],
  },
  {
    title: "Sorting Visualizer",
    description: "A web app to visualize sorting algorithms",
    links: {
      github: "https://github.com/sachetsubedi/sorting-visualizer",
      demo: "https://vis.sachetsubedi001.com.np",
    },
    components: [
      {
        title: "Next js",
        color: colors.nextjs,
      },
      {
        title: "Tailwind CSS",
        color: colors.tailwind,
      },
      {
        title: "Typescript",
        color: colors.typescript,
      },
      {
        title: "React Hook Form",
        color: colors.reacthookform,
      },
      {
        title: "Shadcn",
        color: colors.shadcn,
      },
    ],
  },
  {
    title: "Binary Clock",
    description: "A clock that shows time in binary format",
    links: {
      github: "https://github.com/sachetsubedi/Binary-Clock",
      demo: "https://sachetsubedi.github.io/Binary-Clock/",
    },
    components: [
      {
        title: "HTML",
        color: colors.html,
      },
      {
        title: "Tailwind CSS",
        color: colors.tailwind,
      },
      {
        title: "Javascript",
        color: colors.javascript,
      },
    ],
  },
];
