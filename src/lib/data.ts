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

export const projects: {
  title: string;
  description: string;
  demoUrl?: string;
  githubUrl?: string;
  img: string;
}[] = [
  {
    title: "CLI chat application",
    demoUrl: "https://cli.sachetsubedi001.com.np",
    githubUrl: "https://github.com/sachetsubedi/chat-CLI",
    description:
      "A CLI chat application built with ExpressJs and Socket.io in a terminal theme.",
    img: "/projects/cli.png",
  },

  {
    title: "Sorting Visaulaizer",
    demoUrl: "https://vis.sachetsubedi001.com.np",
    githubUrl: "",
    description: "A visualizer that visualizes working of sorting algorithms.",
    img: "/projects/sort.png",
  },
  {
    title: "Image Analyzer",
    demoUrl: "https://analyze.sachetsubedi001.com.np",
    githubUrl: "https://github.com/sachetsubedi/image-analyzer",
    description: "An AI powered image analyzer. ",
    img: "/projects/analyze.png",
  },
  {
    title: "Links Shortner",
    githubUrl: "https://github.com/sachetsubedi/links-shortner",
    description: "Your very own link shortner ready to be deployed.",
    img: "/projects/links.png",
  },
  {
    title: "To Do List",
    githubUrl: "https://github.com/sachetsubedi/To-Do-List",
    demoUrl: "https://todo.sachetsubedi001.com.np",
    description: "A simple to do list to track your tasks.",
    img: "/projects/todo.png",
  },
  {
    title: "Text Cryptography",
    githubUrl: "https://github.com/sachetsubedi/Text-Encryption",
    description:
      "Simple text encryption and decryption programs with different methods.",
    img: "/projects/crypto.png",
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
      { icon: "simple-icons:tailwindcss", title: "Tailwind CSS" },
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
      { icon: "simple-icons:gitlab", title: "GitLab" },
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
