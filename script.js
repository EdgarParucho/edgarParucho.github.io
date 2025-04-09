const aboutProject = {
  mantra: aboutMantra,
  wallance: aboutWallance,
  lighthouse: aboutLighthouse,
  notebook: aboutNotebook,
};

function showFeatures({ projectName, lang }) {
  showSidebar();
  hideBodyScrollbar();
  setSidebarContent({ projectName, lang });
  setTimeout(() => showSidebarContent(), .1);
}

function showSidebar() {
  document.getElementById("sidebar").classList.remove("sidebar_hidden");
}

function hideBodyScrollbar() {
  document.getElementsByTagName("body")[0].setAttribute("style", "overflow: hidden;");
}

function setSidebarContent({ projectName, lang }) {
  setSidebarTitle(projectName);
  fillCard({ projectName, lang, section: 'features' });
  fillCard({ projectName, lang, section: 'development' });
  fillCard({ projectName, lang, section: 'solutions' });
}

function setSidebarTitle(projectName) {
  const sidebarTitle = document.getElementById("sidebar-title");
  sidebarTitle.textContent = projectName.toUpperCase();
  sidebarTitle.scrollIntoView({ behavior: "smooth" });
}

function fillCard({ projectName, lang, section }) {
  const card = document.getElementById(`${section}-card`);
  const [cardImg] = card.getElementsByTagName("img");

  cardImg.setAttribute("src", aboutProject[projectName][`${section}Img`]);
  cardImg.setAttribute("alt", aboutProject[projectName][`${section}ImgAlt`][lang]);

  const sectionParagraphElements = card.getElementsByTagName("p");
  const sectionParagraphText = aboutProject[projectName][`${section}Paragraphs`][lang];

  for (let i = 0; i < 3; i++) sectionParagraphElements[i].textContent = sectionParagraphText[i];

}

function showSidebarContent() {
  document.getElementById("sidebar-content")
    .classList.add("sidebar__content_visible");
}

function hideFeatures() {
  hideSidebarContent();
  showBodyScrollbar();
  setTimeout(() => hideSidebar(), 300);
}

function hideSidebarContent() {
  document.getElementById("sidebar-content")
    .classList.remove("sidebar__content_visible");
}

function showBodyScrollbar() {
  document.getElementsByTagName("body")[0].removeAttribute("style");
}

function hideSidebar() {
  document.getElementById("sidebar").classList.add("sidebar_hidden");
}
