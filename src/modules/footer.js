function renderfoot() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.textContent = "Made by Gejzowany for The Odin Project";
  return footer;
}
export { renderfoot as footerRender };
