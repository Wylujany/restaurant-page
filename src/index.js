import "./style.css";
import { pageLoad } from "./modules/pageload.js";
import { firstLoad } from "./modules/firstload.js";

firstLoad();

const btnNames = document.querySelectorAll(".list_item");

btnNames.forEach((btnName) => {
  btnName.addEventListener("click", handleClick);
});

function handleClick(e) {
  pageLoad(e.target.textContent);
}
