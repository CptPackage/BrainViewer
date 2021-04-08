const hoverLabel = document.getElementById("hover-label");
const sections = document.getElementsByClassName("section");
const sectionsLength = sections.length;
for (let i = 0; i < sectionsLength; i++) {
  sections[i].addEventListener("mouseover", ({ target }) => {
    const value = target.attributes["sectionname"].nodeValue;
    hoverLabel.innerText = value;
    console.log("Hovered:", value);
  });
}