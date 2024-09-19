const featuresByProject = {
  mantra: [
    {
      featureImgPath: "./assets/mantra/mantra_feature-1-min.jpg",
      featureAlt: "Mantra's UI bar and line charts about the service on smartphone.",
      featureTitle: "Efficacy + efficiency",
      featureDescription: "Every UI component is designed to provide easy-to-read, relevant information. You have everything you need for effective decision-making at your fingertips.",
    },
    {
      featureImgPath: "./assets/mantra/mantra_feature-2-min.jpg",
      featureAlt: "Mantra's UI informative cards about service indicators on smartphone.",
      featureTitle: "User-friendly",
      featureDescription: "Grasp the service status at a glance. Minimize input errors through intuitive, step-by-step forms. Find information rapidly with powerful filters. Mantra aims to boost your work without adding complications.",
    },
    {
      featureImgPath: "./assets/mantra/mantra_feature-3-min.jpg",
      featureAlt: "Mantra's large menu of features on smartphone.",
      featureTitle: "Full control",
      featureDescription: "From clients, to products, users, etc. You decide who is able to manipulate sensitive information.",
    },
    {
      featureImgPath: "./assets/mantra/mantra_feature-4-min.jpg",
      featureAlt: "Mantra app running on smartphone and desktop PC.",
      featureTitle: "Availability",
      featureDescription: "No matter where you are or what device you use, you only need an internet connection and a web browser to access Mantra's full set of features.",
    },
  ],
  wallance: [
    {
      featureImgPath: "./assets/wallance/wallance_feature-1-min.jpg",
      featureAlt: "Wallance's UI on smartphone: fund cards with their independent status (budget).",
      featureTitle: "Funds",
      featureDescription: "In real life, you probably separate your savings from your bills and optional expenses. Wallance allows you to create Funds so you can implement your own strategies.",
    },
    {
      featureImgPath: "./assets/wallance/wallance_feature-2-min.jpg",
      featureAlt: "Wallance's UI on desktop PC: pie and line charts to measure movements by tag and month.",
      featureTitle: "Tags",
      featureDescription: "Tag your incomes and expenses so you can visually measure and be aware of where and how everything comes and goes.",
    },
    {
      featureImgPath: "./assets/wallance/wallance_feature-3-min.jpg",
      featureAlt: "Wallance's UI on smartphone: query form with multiple options.",
      featureTitle: "Easy querying",
      featureDescription: "Get any data fast and easily filtering by any property of the record through an intuitive form.",
    },
    {
      featureImgPath: "./assets/wallance/wallance_feature-4-min.jpg",
      featureAlt: "Wallance app running on tablet and smartphone.",
      featureTitle: "Beyond the features",
      featureDescription: "Wallance's features provide status, organization, knowledge and awareness of your movements, but the purpose is to help you to find the best way to manage your finance by yourself, through your own movements.",
    },
  ],
};


function showFeatures(projectName) {
  showSidebar();
  hideBodyScrollbar();
  setSidebarContent(projectName);
  setTimeout(() => showSidebarContent(), .1);
}

function showSidebar() {
  document.getElementById("sidebar").classList.remove("sidebar_hidden");
}

function hideBodyScrollbar() {
  document.getElementsByTagName("body")[0].setAttribute("style", "overflow: hidden;");
}

function setSidebarContent(projectName) {
  setSidebarTitle(projectName);
  setSidebarCards(projectName);
}

function setSidebarTitle(projectName) {
  const sidebarTitle = document.getElementById("sidebar-title");
  sidebarTitle.textContent = projectName.toUpperCase();
  sidebarTitle.scrollIntoView({ behavior: "smooth" });
}

function setSidebarCards(projectName) {
  const cards = document.getElementById("sidebar").getElementsByClassName("card");
  for (let i in featuresByProject[projectName]) {
    const [featureImg] = cards[i].getElementsByTagName("img");
    const [featureTitle] = cards[i].getElementsByTagName("dt");
    const [featureDescription] = cards[i].getElementsByTagName("dd");
    featureImg.setAttribute("src", featuresByProject[projectName][i].featureImgPath);
    featureImg.setAttribute("alt", featuresByProject[projectName][i].featureAlt);
    featureTitle.textContent = featuresByProject[projectName][i].featureTitle;
    featureDescription.textContent = featuresByProject[projectName][i].featureDescription;
  }
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
