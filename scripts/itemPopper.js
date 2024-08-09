const imagePop = document.getElementById("popImage");
const paths = [
  "./assets/popovers/c.png",
  "./assets/popovers/cpp.png",
  "./assets/popovers/css.png",
  "./assets/popovers/express.png",
  "./assets/popovers/figma.png",
  "./assets/popovers/github.png",
  "./assets/popovers/html.png",
  "./assets/popovers/illustrator.png",
  "./assets/popovers/js.png",
  "./assets/popovers/next.webp",
  "./assets/popovers/node.png",
  "./assets/popovers/react.png",
  "./assets/popovers/bootstrap.png",
  "./assets/popovers/cloudflare.png",
  "./assets/popovers/firebase.png",
  "./assets/popovers/sql.png",
  "./assets/popovers/tailwind.png",
  "./assets/popovers/ts.png",
  "./assets/popovers/markdown.png",
  "./assets/popovers/aws.png",
  "./assets/popovers/azure.png",
  "./assets/popovers/render.jpg",
  "./assets/popovers/googleCloud.png",
  "./assets/popovers/Vercel.png",
  "./assets/popovers/astro.png",
  "./assets/popovers/jquery.png",
  "./assets/popovers/jwt.png",
  "./assets/popovers/mui.png",
  "./assets/popovers/npm.png",
  "./assets/popovers/socket.png",
  "./assets/popovers/vite.png",
  "./assets/popovers/wordpress.png",
  "./assets/popovers/zod.svg",
  "./assets/popovers/shadcn.png",
  "./assets/popovers/prisma.jpg",
  "./assets/popovers/sequalize.svg",
  "./assets/popovers/canva.webp",
  "./assets/popovers/github-logo.png",
  "./assets/popovers/docker.png",
  "./assets/popovers/eslint.png",
  "./assets/popovers/jira.png",
  "./assets/popovers/trello.png",
];

const win = {
  x: window.innerWidth - 100,
  y: innerHeight - 100,
};

setInterval(() => {
  const index = Math.floor(Math.random() * paths.length);
  imagePop.setAttribute("src", paths[index]);
  imagePop.style.top = Math.random() * win.y + "px";
  imagePop.style.left = Math.random() * win.x + "px";
  imagePop.style.opacity = "1";
  setTimeout(() => {
    imagePop.style.opacity = "0";
  }, 1000);
}, 2000);
