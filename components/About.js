export default {
  props: ['inEnglish'],
  template: `

    <div class="lg:flex lg:space-x-2 lg:justify-around text-center px-4">

      <article class="lg:w-1/3 my-2 px-5 py-12 rounded-md dark:bg-opacity-30 shadow-md bg-white dark:bg-zinc-950 dark:shadow-zinc-950 text-lg text-left">
        <h3 class="text-neutral-600 dark:text-neutral-300 text-2xl font-bold mb-2 text-center">
          {{ inEnglish ? "My passion" : "Mi pasión" }}
        </h3>
        <div v-if="inEnglish">
          <p class="mt-4">
            I started as a self-taught, working in a different role. I discovered my passion during that eperience and
            <strong><a href="#mantra" class="text-black dark:text-white underline">built Mantra</a></strong>.
          </p>
          <p class="mt-2">
            I never stop learning. I currently study and get
            <a href="https://platzi.com/p/parucho.edgar/" target="_blank" class="text-black dark:text-white underline">certifications on Platzi</a>,
            previously on <a href="https://ed.team/u/edgarparucho/certificados" target="_blank" class="text-black dark:text-white underline">EDteam</a>,
            and eventually, <a href="https://vuemastery.com/" target="_blank" class="text-black dark:text-white underline">Vue Mastery</a>
            and <a href="https://vueschool.io/" target="_blank" class="text-black dark:text-white underline">Vue School</a>.
          </p>
        </div>
        
        <div v-else>
          <p class="mt-4">
            Comencé como autodidacta trabajando en un rol diferente. Descubrí mi pasión durante esa experiencia y
            <strong><a href="#mantra" class="text-black dark:text-white underline">construí Mantra</a></strong>.
          </p>
          <p class="mt-2">
            Nunca paro de aprender. Actualmente me capacito y obtengo
            <a href="https://platzi.com/p/parucho.edgar/" target="_blank" class="text-black dark:text-white underline">mis certificados en Platzi</a>,
            también estudié en <a href="https://ed.team/u/edgarparucho/certificados" target="_blank" class="text-black dark:text-white underline">EDteam</a>,
            y eventualmente, en <a href="https://vuemastery.com/" target="_blank" class="text-black dark:text-white underline">Vue Mastery</a>
            y <a href="https://vueschool.io/" target="_blank" class="text-black dark:text-white underline">Vue School</a>.
          </p>
        </div>

      </article>

      <article class="lg:w-1/3 my-2 px-5 py-12 rounded-md dark:bg-opacity-30 shadow-md bg-white dark:bg-zinc-950 dark:shadow-zinc-950 text-lg text-left">
        <h3 class="text-neutral-600 dark:text-neutral-300 text-2xl font-bold mb-2 text-center">
          {{ inEnglish ? "When I'm not coding" : "Cuando no programo" }}
        </h3>
        <div v-if="inEnglish">
          <p class="mt-4">
            I'm a father of a 7-year-old princess and a husband in love.
            Together, we like to share watching movies, going to parks, and the beach to rest from the routine.
          </p>
          <p class="mt-2">
            I also enjoy physical training, electronic music, reading or listening audiobooks, and recently, meditation.
          </p>
        </div>
        <div v-else>
          <p class="mt-4">
            Soy padre de una princesa de 7 años y un esposo enamorado.
            Juntos, compartimos viendo películas, saliendo a parques, y la playa para descansar de la rutina.
          </p>
          <p class="mt-2">
            También disfruto el ejercicio físico, la música electrónica, leer o escuchar audiolibros, y recientemente, meditar.
          </p>
        </div>
      </article>

    </div>
  `
}
