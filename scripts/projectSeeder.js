import { projects } from "../lib/projects.js";
const projectContainer = document.getElementById("projectsContainer");

projects.forEach((project) => {
  projectContainer.innerHTML += `
    <div class="projectItem">
          <div class="left">
            <div class="projectHeader">${project.title}</div>
            <div class="projectDesc">${project.description}</div>
            <div class="projectComps">
               ${project.components
                 .map((item) => {
                   return `<span class="projectComp" style="background-color: ${item.color}">${item.title}</span>`;
                 })
                 .join("")}
            </div>
          </div>
          <div class="right actionButtons">
            <a
              href="${project.links.github}"
              class="actionButtonLinks"
              target="_blank"
            >
              <button class="actionButton">Github</button>
            </a>
            <a
              href="${project.links.demo}"
              class="actionButtonLinks"
              target="_blank"
            >
              <button class="actionButton">Demo</button>
            </a>
          </div>
        </div>
    `;
});
