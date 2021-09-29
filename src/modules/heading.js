function render() {
  const block1 = document.createElement("div");
  block1.classList.add("block1");

  const headline_con = document.createElement("div");
  headline_con.classList.add("headline_container");

  const headline_real = document.createElement("div");
  headline_real.classList.add("headline_real");

  const heading4 = document.createElement("p");
  heading4.classList.add("heading4");
  heading4.textContent = "VIEWS RESTAURANT";

  const heading3 = document.createElement("p");
  heading3.classList.add("heading3");
  heading3.textContent = "REAL POLISH TASTE";

  block1.append(headline_con);
  headline_con.append(headline_real);
  headline_real.append(heading4);
  headline_real.append(heading3);

  return block1;
}
export { render as headingRender };
