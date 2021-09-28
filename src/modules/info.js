function render() {
  const main = document.createElement("div");
  main.classList.add("main");

  const main_text = document.createElement("div");
  main_text.classList.add("main_text");

  const heading1 = document.createElement("h1");
  heading1.textContent = "A Couple of Words About Us";

  const meetUs = document.createElement("p");
  meetUs.textContent = "MEET US";

  const long_paragraph_con = document.createElement("div");
  long_paragraph_con.classList.add("long_paragraph");

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "The Views restaurant is a the center of the city, in the biggest Park in Warsaw. We offer real polish dishes.";

  main.append(main_text);
  main_text.append(heading1);
  main_text.append(meetUs);
  main_text.append(long_paragraph_con);
  long_paragraph_con.append(paragraph);

  return main;
}
export { render as infoRender };
