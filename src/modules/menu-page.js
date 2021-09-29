function menuPage() {
  const main = document.createElement("div");
  main.classList.add("main");

  const main_text = document.createElement("div");
  main_text.classList.add("main_text");

  const menu = document.createElement("h1");
  menu.textContent = "THIS IS OUR MENU";

  const items_container = document.createElement("div");
  items_container.classList.add("items_container");

  const dishes = [
    {
      name: "SUS SOUP",
      price: 20,
    },
    {
      name: "conk",
      price: 3,
    },
  ];

  main.appendChild(main_text);
  main_text.appendChild(menu);
  main.appendChild(items_container);

  for (let i = 0; i < dishes.length; i++) {
    let temp = document.createElement("div");
    temp.className = "dish_div";
    let dishName = document.createElement("h2");
    dishName.textContent = dishes[i].name;
    let dishPrice = document.createElement("h4");
    dishPrice.textContent = dishes[i].price + " zł";

    temp.appendChild(dishName);
    temp.appendChild(dishPrice);
    items_container.appendChild(temp);
  }

  return main;
}
export { menuPage };
