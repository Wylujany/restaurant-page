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

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("info-container");
  const bold1 = document.createElement("strong");
  const bold2 = document.createElement("strong");
  const bold3 = document.createElement("strong");

  const adress = document.createElement("p");
  adress.textContent = "ADDRESS";
  const adressinf = document.createElement("p");
  adressinf.textContent = "Sus St. 142";

  bold1.appendChild(adress);

  main.appendChild(main_text);
  main_text.appendChild(contactUs);
  main.appendChild(contactInfo);
  contactInfo.appendChild(bold1);
  contactInfo.appendChild(adressinf);
  return main;
}
export { renderContactBanner, renderContact };
