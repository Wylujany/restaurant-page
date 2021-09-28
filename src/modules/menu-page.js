import { navbarRender } from "./navbar.js";

function menuPage() {
  const content = document.getElementById("content");
  content.append(navbarRender());
  const main = document.createElement("div");
  main.classList.add("main");

  const main_text = document.createElement("div");
  main_text.classList.add("main_text");

  const menu = document.createElement("h1");
  menu.textContent = "TAKIE NASZE MENU";

  main.append(main_text);
  main_text.append(menu);

  return main;
}
export { menuPage };
