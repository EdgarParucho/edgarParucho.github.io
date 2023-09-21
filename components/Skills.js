export default {
  props: {
    frontendStack: Array,
    backendStack: Array,
    complementStack: Array
  },
  template: `
    <article class="w-4/6 mx-auto space-y-4 text-lg text-justify">
      <p>
        <strong class="text-black dark:text-white">I consider my current profile stronger for front-end development</strong> since I've deepened my knowledge of
        its responsibilities, like state management, scaffolding intuitive and visually appealing interfaces, elevating UX, etc.
        Consequently, my experience is higher using related technologies such as HTML, CSS, JavaScript, and especially,
        Vue JS and its ecosystem.
      </p>

      <h2 class="my-2 text-neutral-500 dark:text-white font-bold text-lg">
        Development stack and other tools:
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