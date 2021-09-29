function renderContactBanner() {
  const block2 = document.createElement("div");
  block2.classList.add("block2");

  return block2;
}

function renderContact() {
  const main = document.createElement("div");
  main.classList.add("main");

  const main_text = document.createElement("div");
  main_text.classList.add("main_text");

  const contactUs = document.createElement("h1");
  contactUs.textContent = "Contact Us!";

  main.appendChild(main_text);
  main_text.appendChild(contactUs);

  return main;
}
export { renderContactBanner, renderContact };
