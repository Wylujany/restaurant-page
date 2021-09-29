import { headingRender } from "./heading.js";
import { infoRender } from "./info.js";
import { menuPage } from "./menu-page.js";
import { renderContactBanner } from "./contact.js";
import { renderContact } from "./contact.js";
import { footerRender } from "./footer.js";

function load(choice) {
  const content = document.getElementById("content");
  console.log(choice);
  clearPage();
  if (choice === "Main Page") {
    content.appendChild(headingRender());
    content.appendChild(infoRender());
    content.appendChild(footerRender());
  } else if (choice === "Menu") {
    content.appendChild(menuPage());
    content.appendChild(footerRender());
  } else if (choice === "Contact") {
    content.appendChild(renderContactBanner());
    content.appendChild(renderContact());
    content.appendChild(footerRender());
  }
}

function clearPage() {
  while (content.children.length > 1) {
    content.children[1].remove();
  }
}

export { load as pageLoad };
