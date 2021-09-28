import "./style.css";
import { headingRender } from "./modules/heading.js";
import { infoRender } from "./modules/info.js";
import { pageLoad } from "./modules/pageload.js";

pageLoad("Main Page");

const btnNames = document.querySelectorAll(".list_item");

btnNames.forEach((btnName) => {
  btnName.addEventListener("click", handleClick);
});

function handleClick(e) {
  pageLoad(e.target.textContent);
}
