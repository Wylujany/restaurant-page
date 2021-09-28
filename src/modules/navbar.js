import Icon from "../assets/currywurst.png";

function render() {
  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");

  const logo = new Image();
  logo.classList.add("restaurant_logo");
  logo.src = Icon;

  const list = document.createElement("ul");
  list.classList.add("nav_links");
  const l1 = document.createElement("li");
  const l2 = document.createElement("li");
  const l3 = document.createElement("li");
  l1.classList.add("list_item");
  l2.classList.add("list_item");
  l3.classList.add("list_item");

  l1.textContent = "Main Page";
  l2.textContent = "Menu";
  l3.textContent = "Contact";

  navbar.append(logo);
  navbar.append(list);
  list.append(l1);
  list.append(l2);
  list.append(l3);
  return navbar;
}
export { render as navbarRender };
