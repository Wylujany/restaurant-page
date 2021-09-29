import { headingRender } from "./heading.js";
import { infoRender } from "./info.js";
import { menuPage } from "./menu-page.js";
import { renderContactBanner } from "./contact.js";
import { renderContact } from "./contact.js";

function load(choice) {
  const content = document.getElementById("content");
  console.log(choice);
  clearPage();
  if (choice === "Main Page") {
    content.appendChild(headingRender());
    content.appendChild(infoRender());
  } else if (choice === "Menu") {
    content.appendChild(menuPage());
  } else if (choice === "Contact") {
    content.appendChild(renderContactBanner());
    content.appendChild(renderContact());
  }
}
function clearPage() {
  while (content.children.length > 1) {
    content.children[1].remove();
  }
}
export { load as pageLoad };
