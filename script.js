const featuresByProject = {
  mantra: [
    {
      featureImgPath: "./assets/mantra/mantra_feature-1-min.jpg",
      featureAlt: {
        es: "Interfaz de Mantra en móvil: gráficas de barra y linea acerca del servicio.",
        en: "Mantra's UI bar and line charts about the service on smartphone.",
      },
      featureTitle: {
        es: "Eficacia + eficiencia",
        en: "Efficacy + efficiency",
      },
      featureDescription: {
        es: "Cada componente de interfaz esta diseñado para proveer información fácil de leer y relevante. Tienes todo lo que necesitas para la toma de decisiones a tu alcance.",
        en: "Every UI component is designed to provide easy-to-read, relevant information. You have everything you need for effective decision-making at your fingertips.",
      },
    },
    {
      featureImgPath: "./assets/mantra/mantra_feature-2-min.jpg",
      featureAlt: {
        es: "Interfaz de Mantra en móvil: tarjetas informativas acerca de los indicadores del servicio.",
        en: "Mantra's UI informative cards about service indicators on smartphone.",
      },
      featureTitle: {
        es: "Fácil de usar",
        en: "User-friendly",
      },
      featureDescription: {
        es: "Obtén el estado del servicio de un vistazo. Minimiza errores de registro con formularios intuitivos, de paso a paso. Encuentra información rápidamente con filtros potentes. Mantra apunta a impulsar tu trabajo sin agregar complicaciones.",
        en: "Grasp the service status at a glance. Minimize input errors through intuitive, step-by-step forms. Find information rapidly with powerful filters. Mantra aims to boost your work without adding complications.",
      },
    },
    {
      featureImgPath: "./assets/mantra/mantra_feature-3-min.jpg",
      featureAlt: {
        es: "Amplio menu de características de Mantra desde un teléfono inteligente.",
        en: "Mantra's large menu of features on smartphone.",
      },
      featureTitle: {
        es: "Control total",
        en: "Full control",
      },
      featureDescription: {
        es: "De clientes a productos, todo está bajo tu control. Decide quien puede manipularlos con un sistema basado en roles.",
        en: "From clients to products, the data is under your control. You decide who is able to manipulate with a role-based system.",
      },
    },
    {
      featureImgPath: "./assets/mantra/mantra_feature-4-min.jpg",
      featureAlt: {
        es: "Mantra corriendo en un teléfono y una computadora.",
        en: "Mantra app running on smartphone and desktop PC.",
      },
      featureTitle: {
        es: "Disponibilidad",
        en: "Availability",
      },
      featureDescription: {
        es: "No importa donde o el dispositivo uses, sólo necesitas internet y un navegador web para acceder a todas las características de Mantra.",
        en: "No matter where you are or what device you use, you only need an internet connection and a web browser to access Mantra's full set of features.",
      },
    },
  ],
  wallance: [
    {
      featureImgPath: "./assets/wallance/wallance_feature-1-min.jpg",
      featureAlt: {
        es: "Interfaz de Wallance en teléfono: tarjetas de fondos con estados independientes (presupuesto).",
        en: "Wallance's UI on smartphone: fund cards with their independent status (budget).",
      },
      featureTitle: {
        es: "Fondos",
        en: "Funds",
      },
      featureDescription: {
        es: "Probablemente separas tus fondos en ahorros, facturas, gastos opcionales, etc. Wallance te permite replicar esto manejando fondos independientes y adaptando tus propias estrategias.",
        en: "You probably separate your funds in savings, bills, optional expenses, etc. Wallance allows you to replicate this by managing independent funds and adapting your own strategies.",
      },
    },
    {
      featureImgPath: "./assets/wallance/wallance_feature-2-min.jpg",
      featureAlt: {
        es: "Grafica circular y linear para medir movimientos por etiquetas y mes.",
        en: "Wallance: pie and line charts to measure movements by tag and month.",
      },
      featureTitle: {
        es: "Tags",
        en: "Tags",
      },
      featureDescription: {
        es: "Etiqueta tus ingresos y egresos para que puedas visualizar, medir mejor y ser consciente del flujo de tus movimientos.",
        en: "Tag your incomes and expenses so you can better visualize, measure and be aware of your movements.",
      },
    },
    {
      featureImgPath: "./assets/wallance/wallance_feature-3-min.jpg",
      featureAlt: {
        es: "Interfaz de Wallance desde móvil: formulario de consultas con múltiples opciones.",
        en: "Wallance's UI on smartphone: query form with multiple options.",
      },
      featureTitle: {
        es: "Consulta fácilmente",
        en: "Easy querying",
      },
      featureDescription: {
        es: "Obtén cualquier registro filtrando por cualquiera de sus propiedades, desde la fecha hasta la nota que escribiste en el.",
        en: "Get any record filtering by any of its properties, from the date to note you wrote in it.",
      },
    },
    {
      featureImgPath: "./assets/wallance/wallance_feature-4-min.jpg",
      featureAlt: {
        es: "Wallance corriendo en tablet y teléfono.",
        en: "Wallance app running on tablet and smartphone.",
      },
      featureTitle: {
        es: "Beyond the features",
        en: "Más allá de las características",
      },
      featureDescription: {
        es: "Las características de Wallance proveen estado, organización, conocimiento y conciencia de tus movimientos, pero el propósito es ayudarte a encontrar la mejor manera de manejar tus finanzas por ti mismo, a través de tus propios movimientos",
        en: "Wallance's features provide status, organization, knowledge and awareness of your movements, but the purpose is to help you to find the best way to manage your finance by yourself, through your own movements.",
      },
    },
  ],
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
  setSidebarCards({ projectName, lang });
}

function setSidebarTitle(projectName) {
  const sidebarTitle = document.getElementById("sidebar-title");
  sidebarTitle.textContent = projectName.toUpperCase();
  sidebarTitle.scrollIntoView({ behavior: "smooth" });
}

function setSidebarCards({ projectName, lang }) {
  const cards = document.getElementById("sidebar").getElementsByClassName("card");
  for (let i in featuresByProject[projectName]) {
    const [featureImg] = cards[i].getElementsByTagName("img");
    const [featureTitle] = cards[i].getElementsByTagName("dt");
    const [featureDescription] = cards[i].getElementsByTagName("dd");
    featureImg.setAttribute("src", featuresByProject[projectName][i].featureImgPath);
    featureImg.setAttribute("alt", featuresByProject[projectName][i].featureAlt[lang]);
    featureTitle.textContent = featuresByProject[projectName][i].featureTitle[lang];
    featureDescription.textContent = featuresByProject[projectName][i].featureDescription[lang];
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
