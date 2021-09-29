import { navbarRender } from "./navbar.js";
import { headingRender } from "./heading.js";
import { infoRender } from "./info.js";
function firstLoad() {
  const content = document.getElementById("content");
  content.appendChild(navbarRender());
  content.appendChild(headingRender());
  content.appendChild(infoRender());
}
export { firstLoad };
