import { headingRender } from "./heading.js";
import { infoRender } from "./info.js";
const content = document.getElementById("content");
function load(shit) {
  clearPage();
  if (shit === "Main Page") {
    content.appendChild(headingRender());
    content.appendChild(infoRender());
  } else if (shit === "Menu") {
    content.appendChild(headingRender());
  }
}
function clearPage() {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
}
export { load as pageLoad };
