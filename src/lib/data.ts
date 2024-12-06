export const globeSlugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "express",
  "prisma",
  "amazonaws",
  "firebase",
  "nginx",
  "vercel",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
  "trello",
  "nodedotjs",
  "nodemon",
  "zod",
  "eslint",
  "nextdotjs",
  "cloudflare",
  "shadcnui",
  "tailwindcss",
  "mui",
  "socketdotio",
  "vite",
  "bootstrap",
  "markdown",
];

export const E_SKILLCOLORS = {
  html: "bg-red-500",
  css: "bg-blue-500",
  js: "bg-yellow-500",
  typescript: "bg-blue-700",
  react: "bg-cyan-500",
  nextjs: "bg-gray-900",
  prisma: "bg-indigo-500",
  mysql: "bg-orange-500",
  azure: "bg-blue-500",
  docker: "bg-teal-500",
  redux: "bg-purple-500",
  zustand: "bg-green-600",
  jest: "bg-pink-500",
  cypress: "bg-green-500",
  graphql: "bg-purple-700",
  tailwindcss: "bg-sky-500",
  octave: "bg-gray-700",
  express: "bg-gray-800",
  matterjs: "bg-yellow-600",
  mui: "bg-blue-400",
  workflows: "bg-gray-600",
  socketio: "bg-black",
};

export const projects: {
  title: string;
  description: string;
  demoUrl?: string;
  githubUrl?: string;
  img: string;
  techStacks: { title: string; color: string }[];
}[] = [
  {
    title: "CLI chat application",
    demoUrl: "https://cli.sachetsubedi001.com.np",
    githubUrl: "https://github.com/sachetsubedi/chat-CLI",
    description:
      "A CLI chat application built with ExpressJs and Socket.io in a terminal theme.",
    img: "/projects/cli.png",
    techStacks: [
      { title: "Express js", color: E_SKILLCOLORS.express },
      { title: "Socket.io", color: E_SKILLCOLORS.socketio },
      { title: "HTML", color: E_SKILLCOLORS.html },
      { title: "CSS", color: E_SKILLCOLORS.css },
      { title: "JavaScript", color: E_SKILLCOLORS.js },
    ],
  },

  {
    title: "Sorting Visaulaizer",
    demoUrl: "https://vis.sachetsubedi001.com.np",
    githubUrl: "",
    description: "A visualizer that visualizes working of sorting algorithms.",
    img: "/projects/sort.png",
    techStacks: [{ title: "Next js", color: E_SKILLCOLORS.nextjs }],
  },
  {
    title: "Image Analyzer",
    demoUrl: "https://analyze.sachetsubedi001.com.np",
    githubUrl: "https://github.com/sachetsubedi/image-analyzer",
    description: "An AI powered image analyzer. ",
    img: "/projects/analyze.png",
    techStacks: [
      { title: "Express js", color: E_SKILLCOLORS.express },
      { title: "Azure computer vision", color: E_SKILLCOLORS.socketio },
      { title: "HTML", color: E_SKILLCOLORS.html },
      { title: "CSS", color: E_SKILLCOLORS.css },
      { title: "JavaScript", color: E_SKILLCOLORS.js },
    ],
  },
  {
    title: "Links Shortner",
    githubUrl: "https://github.com/sachetsubedi/links-shortner",
    description: "Your very own link shortner ready to be deployed.",
    img: "/projects/links.png",
    techStacks: [
      { title: "Express js", color: E_SKILLCOLORS.express },
      { title: "Mysql", color: E_SKILLCOLORS.mysql },
      { title: "Prisma", color: E_SKILLCOLORS.prisma },
    ],
  },
  {
    title: "To Do List",
    githubUrl: "https://github.com/sachetsubedi/To-Do-List",
    demoUrl: "https://todo.sachetsubedi001.com.np",
    description: "A simple to do list to track your tasks.",
    img: "/projects/todo.png",
    techStacks: [
      { title: "HTML", color: E_SKILLCOLORS.html },
      { title: "Css", color: E_SKILLCOLORS.css },
      { title: "JavaScript", color: E_SKILLCOLORS.js },
    ],
  },
  {
    title: "Text Cryptography",
    githubUrl: "https://github.com/sachetsubedi/Text-Encryption",
    description:
      "Simple text encryption and decryption programs with different methods.",
    img: "/projects/crypto.png",
    techStacks: [{ title: "C++", color: E_SKILLCOLORS.azure }],
  },
];

export const techStack = [
  {
    topic: "Languages",
    items: [
      { icon: "lineicons:typescript", title: "TypeScript" },
      { icon: "lineicons:javascript", title: "JavaScript" },
      { icon: "flowbite:html-solid", title: "HTML" },
      { icon: "lineicons:css3", title: "CSS" },
      { icon: "lineicons:markdown", title: "Markdown" },
      { icon: "mdi:language-c", title: "C" },
      { icon: "mdi:language-cpp", title: "C++" },
    ],
  },
  {
    topic: "Frameworks and Libraries",
    items: [
      { icon: "simple-icons:react", title: "React" },
      { icon: "ri:nextjs-fill", title: "Next.js" },
      { icon: "simple-icons:express", title: "Express" },
      { icon: "mdi:nodejs", title: "Node.js" },
      { icon: "simple-icons:socketdotio", title: "Socket.io" },
      { icon: "simple-icons:tailwindcss", title: "Tailwind" },
      { icon: "simple-icons:mui", title: "Material UI" },
      { icon: "simple-icons:bootstrap", title: "Bootstrap" },
      { icon: "simple-icons:vite", title: "Vite" },
      { icon: "simple-icons:shadcnui", title: "Shadcn" },
    ],
  },

  {
    topic: "Database amd ORM",
    items: [
      { icon: "lineicons:mysql", title: "MySql" },
      { icon: "simple-icons:mongodb", title: "MongoDB" },
      { icon: "simple-icons:firebase", title: "Firebase" },
      { icon: "simple-icons:prisma", title: "Prisma" },
      { icon: "file-icons:sequelize", title: "Sequelize" },
    ],
  },
  {
    topic: "Hosting and SAAS",
    items: [
      { icon: "simple-icons:vercel", title: "Vercel" },
      { icon: "codicon:azure", title: "Azure" },
      { icon: "simple-icons:render", title: "Render" },
      { icon: "simple-icons:cloudflare", title: "Cloudflare" },
      { icon: "simple-icons:netlify", title: "Netlify" },
      { icon: "simple-icons:amazonaws", title: "AWS" },
      { icon: "simple-icons:firebase", title: "Firebase" },
    ],
  },
  {
    topic: "Others",
    items: [
      { icon: "simple-icons:git", title: "Git" },
      { icon: "simple-icons:github", title: "GitHub" },
      { icon: "simple-icons:docker", title: "Docker" },
      { icon: "simple-icons:jira", title: "Jira" },
      { icon: "simple-icons:trello", title: "Trello" },
      { icon: "simple-icons:figma", title: "Figma" },
      { icon: "simple-icons:nginx", title: "Nginx" },
      { icon: "simple-icons:eslint", title: "ESLint" },
      { icon: "simple-icons:zod", title: "Zod" },
      { icon: "simple-icons:nodemon", title: "Nodemon" },
    ],
  },
];
