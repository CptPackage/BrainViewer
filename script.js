const modalElement = $("#article-modal");
const modalCloseButton = document.getElementById("modal-close-btn");
const modalTitle = document.getElementsByClassName("modal-title")[0];
const hoverLabel = document.getElementById("hover-label");
const sections = document.getElementsByClassName("section");
const sectionsLength = sections.length;

for (let i = 0; i < sectionsLength; i++) {
  sections[i].addEventListener("mouseover", ({ target }) => {
    const value = target.attributes["sectionname"].nodeValue;
    hoverLabel.innerText = value;
  });

  sections[i].addEventListener("click", ({ target }) => {
    const value = target.attributes["sectionname"].nodeValue;
    modalTitle.innerHTML = value;
    modalElement.modal("show");
  });
}

modalCloseButton.addEventListener("click", () => {
  modalElement.modal("hide");
});
