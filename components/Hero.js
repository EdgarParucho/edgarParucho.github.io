export default {
  emits: ['copy'],
  props: {
    links: Array,
    emailCopied: Boolean,
    inEnglish: Boolean,
  },
  template: `
  <section class="my-20 px-10 w-full mx-auto">
    <div class="p-8 lg:w-7/12 mx-auto dark:bg-opacity-30 shadow-md bg-white dark:bg-zinc-950 dark:shadow-zinc-950">

    <div class="mx-auto w-2/3 sm:w-1/3 border-white bg-zinc-100 dark:bg-zinc-800 p-2 border-2 rounded-full">
      <img src="./assets/avatar.jpg" alt="The author: Edgar Parucho" class="rounded-full">
    </div>

    <div class="grid gap-4 space-y-10 text-center rounded-xl">

        <div class="text-zinc-600 dark:text-zinc-400">

          <h1 class="text-5xl tracking-tight my-2">
            <span v-if="inEnglish">Hi, I'm</span>
            <span v-else>Hola, soy</span>
            <strong class="text-zinc-900 dark:text-zinc-100"> Edgar Parucho </strong>
          </h1>

          <strong v-if="inEnglish" class="text-xl text-zinc-900 dark:text-zinc-100">Web Developer</strong>
          <strong v-else class="text-xl text-zinc-900 dark:text-zinc-100">Desarrollador Web</strong>

          <p v-if="inEnglish" class="text-lg my-4 xl:w-3/4 text-justify mx-auto">
            This site is for sharing part of my identity.
            If you sympathize with anything here, I believe we'll be gaining <span class=" text-zinc-900 dark:text-zinc-100">engagement </span>in our network
            if we <a href="https://linkedin.com/in/edgarparucho" target="_blank" class="underline  text-zinc-900 dark:text-zinc-100">connect on LinkedIn.</a>
          </p>
          <p v-else class="text-lg my-4 xl:w-3/4 text-justify mx-auto">
            Este sitio es para compartir parte de mi identidad.
            Si simpatizas con algo por acá, creo que ganaremos <span class=" text-zinc-900 dark:text-zinc-100">afinidad </span>en nuestra red
            al <a href="https://linkedin.com/in/edgarparucho" target="_blank" class="underline  text-zinc-900 dark:text-zinc-100">conectar en LinkedIn.</a>
          </p>

        </div>
  
      </div>

      <div class="flex items-center justify-center space-x-2 mt-10">
        <a
        v-for="link, k in links" :key="k"
        :href="link.URL"
        target="_blank"
        :title="link.title"
        class="rounded-full border border-transparent shadow-sm shadow-zinc-900 bg-white hover:scale-110 transition-all"
        >
          <img width="32" height="32" :src="link.icon" :alt="link.title">
        </a>
      </div>
    
    </div>
  </section>
`
}