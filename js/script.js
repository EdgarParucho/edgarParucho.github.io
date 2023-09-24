import { createApp, ref } from '../lib/vue.js'
import NavBar from '../components/NavBar.js'
import Hero from '../components/Hero.js'
import About from '../components/About.js'
import Mantra from '../components/Mantra.js'
import Skills from '../components/Skills.js'
import Wallance from '../components/Wallance.js'
import Contact from '../components/Contact.js'

tailwind.config = { darkMode: 'class' }

createApp({
  components: { NavBar, Hero, About, Mantra, Skills, Wallance, Contact },
  setup() {
    document.documentElement.classList.add('dark')

    const emailCopied = ref(false);
    const inEnglish = ref(false);
    const links = [
      { URL: 'https://www.linkedin.com/in/edgarparucho/', title: "Linkedin", icon: "https://img.icons8.com/ios-filled/50/linkedin-circled--v1.png" },
      { URL: 'mailto:parucho.edgar@outlook.es', title: "Email", icon: "https://img.icons8.com/ios-filled/50/circled-envelope.png" },
      { URL: 'https://www.github.com/EdgarParucho', title: "GitHub", icon: "https://img.icons8.com/ios-filled/50/github--v1.png",  }
    ];

    const frontendStack = [
      { name: 'HTML', icon: `<i class="devicon-html5-plain colored"></i>` },
      { name: 'CSS', icon: `<i class="devicon-css3-plain colored"></i>` },
      { name: 'JavaScript', icon: `<i class="bg-black devicon-javascript-plain colored"></i>` },
      { name: 'Vue JS', icon: `<img src="./assets/img/vue.svg" alt="Vue JS" class="w-5">` },
      { name: 'Vuetify', icon: `<i class="devicon-vuetify-line colored"></i>` },
      { name: 'Tailwind CSS', icon: `<i class="devicon-tailwindcss-plain colored"></i>` },
    ];

    const backendStack = [
      { name: 'Node JS', icon: `<i class="devicon-nodejs-plain colored"></i>` },
      { name: 'Express', icon: `<i class="text-xl devicon-express-original"></i>` },
      { name: 'Mongo DB', icon: `<i class="devicon-mongodb-plain colored"></i>` },
      { name: 'Postgre SQL', icon: `<i class="devicon-postgresql-plain colored"></i>` },
      { name: 'Sequelize', icon: `<i class="devicon-sequelize-plain colored"></i>` },
    ];

    const complementStack = [
      { name: 'Git', icon: `<i class="devicon-git-plain colored"></i>` },
      { name: 'GitHub', icon: `<i class="devicon-github-plain"></i>` },
      { name: 'Trello', icon: `<i class="devicon-trello-plain colored"></i>` },
      { name: 'Jira', icon: `<i class="devicon-jira-plain colored"></i>` },
    ];

    const wallanceStack = [
      { name: 'Node JS', icon: `<i class="devicon-nodejs-plain colored"></i>` },
      { name: 'Express', icon: `<i class="text-xl devicon-express-original"></i>` },
      { name: 'Postgre SQL', icon: `<i class="devicon-postgresql-plain colored"></i>` },
      { name: 'Sequelize', icon: `<i class="devicon-sequelize-plain colored"></i>` },
      { name: 'Vue JS', icon: `<img src="./assets/img/vue.svg" alt="Vue JS" class="w-5">` },
      { name: 'Pinia', icon: `<img src="https://begoniaxifu.com/wp-content/uploads/2021/11/logo-2-1-1.png" alt="Pinia" class="w-3.5">` },
      { name: 'Vue Router', icon: `<img src="https://logodix.com/logo/853240.png" alt="Vue Router" class="w-7">` },
      { name: 'Tailwind CSS', icon: `<i class="devicon-tailwindcss-plain colored"></i>` },
    ];

    const mantraStack = [
      { name: 'Node JS', icon: `<i class="devicon-nodejs-plain colored"></i>` },
      { name: 'Express', icon: `<i class="text-xl devicon-express-original"></i>` },
      { name: 'Mongo DB', icon: `<i class="devicon-mongodb-plain colored"></i>` },
      { name: 'Vue JS', icon: `<img src="./assets/img/vue.svg" alt="Vue JS" class="w-5">` },
      { name: 'Vuetify', icon: `<i class="devicon-vuetify-line colored"></i>` },
      { name: 'Vuex', icon: `<img src="https://yamoo9.github.io/vuex/images/vuex.png" alt="Vuex" class="w-5">` },
      { name: 'Vue Router', icon: `<img src="https://logodix.com/logo/853240.png" alt="Vue Router" class="w-7">` },
    ];

    function copyEmail() {
      navigator.clipboard.writeText('parucho.edgar@outlook.es')
      emailCopied.value = true;
    };

    function toggleDarkMode() {
      const themeIsDark = document.documentElement.classList.contains("dark");
      if (themeIsDark) document.documentElement.classList.remove('dark');
      else document.documentElement.classList.add('dark');
    }

    function toggleLanguage() {
      if (inEnglish.value) {
        document.documentElement.lang = 'es';
        inEnglish.value = false;
      } else {
        document.documentElement.lang = 'en';
        inEnglish.value = true;
      }
    }

    return {
      toggleDarkMode,
      toggleLanguage,
      copyEmail,
      inEnglish,
      emailCopied,
      links,
      frontendStack,
      backendStack,
      complementStack,
      mantraStack,
      wallanceStack,
    }
  }
}).mount('#app')