export default {
  props: {
    frontendStack: Array,
    backendStack: Array,
    complementStack: Array,
    inEnglish: Boolean
  },
  template: `
    <article class="w-4/6 mx-auto space-y-4 text-lg text-justify">
      <p v-if="inEnglish">
        As a Web Developer, I dedicate to creating and maintaining apps, websites, and similar tools running in the web browser.
        <br>
        <strong class="text-black dark:text-white">I consider my current profile stronger for front-end development</strong> since I've deepened my knowledge over
        its responsibilities like state management, scaffolding intuitive and visually appealing interfaces, elevating UX, etc.
        Consequently, my experience is higher using related technologies such as HTML, CSS, JavaScript, and especially,
        <span class="text-black dark:text-white">Vue JS and its ecosystem.</span>
      </p>

      <p v-else>
        Como Desarrollador Web, me dedico a la creación y mantenimiento de aplicaciones, sitios web, y productos similares que se ejecutan en el navegador.
        <br>
        <strong class="text-black dark:text-white">Considero mi perfil actual más fuerte para el desarrollo front-end</strong> ya que he profundizado mis conocimiento sobre
        sus responsabilidades como manejar el estado, maquetado de interfaces intuitivas y visualmente atractivas, elevar la experiencia de usuario, etc.
        En consecuencia, mi experiencia es mayor usando tecnologías como HTML, CSS, JavaScript, y especialmente,
        <span class="text-black dark:text-white">Vue JS y su ecosistema.</span>
      </p>

      <h2 class="my-2 text-neutral-500 dark:text-white font-bold text-lg">
        <span v-if="inEnglish">Development stack and other tools:</span>
        <span v-else>Stack de desarrollo y otras herramientas:</span>
      </h2>

      <ul class="lg:flex grid items-center gap-1">
        <li
        class="flex items-center gap-2 rounded-3xl shadow-md py-0.5 px-4 dark:text-white text-zinc-800 dark:bg-zinc-800 bg-white font-medium"
        v-for="item in frontendStack"
        >
        <div class="text-left mt-1" v-html="item.icon"></div>
        <span class="text-xl mx-auto">{{ item.name }}</span>
        </li>
      </ul>
      <ul class="lg:flex grid items-center gap-1">
        <li
        class="flex items-center gap-2 rounded-3xl shadow-md py-0.5 px-4 dark:text-white text-zinc-800 dark:bg-zinc-800 bg-white font-medium"
        v-for="item in backendStack"
        >
        <div class="text-left mt-1" v-html="item.icon"></div>
        <span class="text-xl mx-auto">{{ item.name }}</span>
        </li>
      </ul>
      <ul class="lg:flex grid items-center gap-1">
        <li
        class="flex items-center gap-2 rounded-3xl shadow-md py-0.5 px-4 dark:text-white text-zinc-800 dark:bg-zinc-800 bg-white font-medium"
        v-for="item in complementStack"
        >
        <div class="text-left mt-1" v-html="item.icon"></div>
        <span class="text-xl mx-auto">{{ item.name }}</span>
        </li>
      </ul>

    </article>
  `
}