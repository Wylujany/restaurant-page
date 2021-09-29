import { headingRender } from "./heading.js";
import { infoRender } from "./info.js";
import { menuPage } from "./menu-page.js";

function load(choice) {
  const content = document.getElementById("content");
  console.log(choice);
  clearPage();
  if (choice === "Main Page") {
    content.appendChild(headingRender());
    content.appendChild(infoRender());
  } else if (choice === "Menu") {
    content.appendChild(menuPage());
  }
}
function clearPage() {
  while (content.children.length > 1) {
    content.children[1].remove();
  }
}
export { load as pageLoad };
