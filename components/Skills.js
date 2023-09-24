export default {
  props: {
    frontendStack: Array,
    backendStack: Array,
    complementStack: Array,
    inEnglish: Boolean
  },
  template: `
    <article class="w-4/6 mx-auto space-y-4 text-lg text-justify">
      <p>{{
        inEnglish ? 'As a Web Developer, I dedicate to creating and maintaining apps, websites, and similar tools running in the web browser.'
        : 'Como Desarrollador Web, me dedico a la creación y mantenimiento de aplicaciones, sitios web, y productos similares del navegador.'
      }}</p>

      <p>
        <strong class="text-black dark:text-white">{{
          inEnglish ? "I specialize in front-end development with Vue JS and its ecosystem."
          : 'Me especializo en el desarrollo front-end con Vue JS y su ecosistema.'
        }}</strong>
        {{
          inEnglish ? "I've deepened my knowledge over responsibilities like: state management, scaffolding intuitive and visually appealing interfaces, elevating UX, etc. Consequently, my experience is higher using related technologies such as HTML, CSS, and JavaScript."
          : "He profundizado mis conocimiento sobre sus responsabilidades como: manejar el estado, maquetado de interfaces intuitivas y visualmente atractivas, elevar la experiencia de usuario, etc. En consecuencia, mi experiencia es mayor usando tecnologías como HTML, CSS, y JavaScript."
        }}
      </p>

      <h2 class="text-neutral-500 dark:text-white font-bold text-lg">
        {{ inEnglish ? "Development stack and other tools:" : "Stack de desarrollo y otras herramientas:" }}
      </h2>

      <ul class="xl:flex grid items-center gap-1">
        <li
        class="flex items-center gap-2 rounded-3xl shadow-md py-0.5 px-4 dark:text-white text-zinc-800 dark:bg-zinc-800 bg-white font-medium"
        v-for="item in frontendStack"
        >
        <div class="text-left mt-1" v-html="item.icon"></div>
        <span class="text-xl mx-auto">{{ item.name }}</span>
        </li>
      </ul>
      <ul class="xl:flex grid items-center gap-1">
        <li
        class="flex items-center gap-2 rounded-3xl shadow-md py-0.5 px-4 dark:text-white text-zinc-800 dark:bg-zinc-800 bg-white font-medium"
        v-for="item in backendStack"
        >
        <div class="text-left mt-1" v-html="item.icon"></div>
        <span class="text-xl mx-auto">{{ item.name }}</span>
        </li>
      </ul>
      <ul class="xl:flex grid items-center gap-1">
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