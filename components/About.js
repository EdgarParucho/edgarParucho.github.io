export default {
  props: ['inEnglish'],
  template: `

    <div class="lg:flex lg:space-x-2 lg:justify-around text-center px-4">

      <article class="lg:w-1/3 my-2 px-5 py-12 rounded-md dark:bg-opacity-30 shadow-md bg-white dark:bg-zinc-950 dark:shadow-zinc-950 text-lg text-left">
        <h3 class="text-neutral-600 dark:text-neutral-300 text-2xl font-bold mb-2 text-center">
          <span v-if="inEnglish">My work</span>
          <span v-else>Mi trabajo</span>
        </h3>
        <p class="my-2">
          <span v-if="inEnglish">
            I started as a self-taught when I was working as a Help Desk Supervisor, <strong><a href="#mantra" class="text-black dark:text-white underline">I built Mantra</a></strong> as a result.
          </span>
          <span v-else>
            Comencé como autodidacta cuando trabajaba como Supervisor de Help Desk, <strong><a href="#mantra" class="text-black dark:text-white underline">construí Mantra</a></strong> como resultado.
          </span>
        </p>
        <p class="my-2">
          <span v-if="inEnglish">
            I never stop learning. I currently study and get <a href="https://platzi.com/p/parucho.edgar/" target="_blank" class="text-black dark:text-white underline">certifications on Platzi</a>, previously on <a href="https://ed.team/u/edgarparucho/certificados" target="_blank" class="text-black dark:text-white underline">EDteam</a>, and eventually,<a href="https://vuemastery.com/" target="_blank" class="text-black dark:text-white underline"> Vue Mastery</a> and <a href="https://vueschool.io/" target="_blank" class="text-black dark:text-white underline">Vue School</a>.
          </span>
          <span v-else>
            Nunca paro de aprender. Actualmente me capacito y obtengo <a href="https://platzi.com/p/parucho.edgar/" target="_blank" class="text-black dark:text-white underline">mis certificados en Platzi</a>, también estudié en <a href="https://ed.team/u/edgarparucho/certificados" target="_blank" class="text-black dark:text-white underline">EDteam</a>, y eventualmente, en <a href="https://vuemastery.com/" target="_blank" class="text-black dark:text-white underline">Vue Mastery</a> y <a href="https://vueschool.io/" target="_blank" class="text-black dark:text-white underline">Vue School</a>.
          </span>
        </p>
      </article>

      <article class="lg:w-1/3 my-2 px-5 py-12 rounded-md dark:bg-opacity-30 shadow-md bg-white dark:bg-zinc-950 dark:shadow-zinc-950 text-lg text-left">
        <h3 class="text-neutral-600 dark:text-neutral-300 text-2xl font-bold mb-2 text-center">
          <span v-if="inEnglish">
            When I'm not coding
          </span>
          <span v-else>
            Cuando no programo
          </span>
        </h3>
        <p class="my-2">
          <span v-if="inEnglish">
            I'm a father of a 7-year-old princess and a husband in love.
            Together, we like to share watching movies, going to parks, and the beach to rest from the routine.
          </span>
          <span v-else>
            Soy padre de una princesa de 7 años y un esposo enamorado.
            Juntos, compartimos viendo películas, saliendo a parques, y la playa para descansar de la rutina.
          </span>
        </p>
        <p class="my-2">
          <span v-if="inEnglish">
            I also enjoy physical training, electronic music, reading or listening audiobooks, and recently, meditation.
          </span>
          <span v-else>
            También disfruto el ejercicio físico, la música electrónica, leer o escuchar audiolibros, y recientemente, meditar.
          </span>
        </p>
      </article>

    </div>
  `
}
