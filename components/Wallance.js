export default {
  props: {
    stack: Array,
  },
  template: `
<div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
  <div>
    <div class="mb-4 mt-2 flex justify-between items-center">
      <h2 class="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Wallance</h2>
      <a href="https://wallance.vercel.app/" target="_blank" class="px-2 font-bold rounded-sm underline transition-colors text-teal-500 hover:bg-teal-100 dark:hover:bg-teal-900">
        Live Demo
      </a>
    </div>
    <strong class="mt-4 text-zinc-600 dark:text-zinc-400">
      A financial records management application.
    </strong>

    <ul class="mt-4 text-zinc-900 dark:text-zinc-100">
      <li>
        What are your top 5 expense causes?
      </li>
      <li>
        How long will take you save for that goal?
      </li>
      <li>
        How much you spend in non-mandatory causes?
      </li>
    </ul>
    <p class="mt-4 text-zinc-600 dark:text-zinc-400">
      You may face those and other questions for planning, make changes in your lifestyle, or simply have control on this important matter.
      <br>
      That's when Wallance will make your life easier.
    </p>

    <h3 class="text-zinc-900 dark:text-zinc-100 mt-12 text-left font-bold text-xl">The Objective</h3>
    <p class="mt-4 text-zinc-600 dark:text-zinc-400">
      Wallance was built to fight a problem that could be defining more in your life than you know, finances management.
      <br>
      The app offers you flexibility to organize your records as you wish for later analysis, tracking, and querying.
      Let's see how it does that.
    </p>
    <dl class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
      <div class="border-t border-zinc-200 pt-4">
        <dt class="font-medium text-zinc-900 dark:text-zinc-50">Record is the essence</dt>
        <dd class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Just &quot;feed&quot; the database to move the charts, numbers, and tables.
        </dd>
      </div>
      <div class="border-t border-zinc-200 pt-4">
        <dt class="font-medium text-zinc-900 dark:text-zinc-50">Group using funds</dt>
        <dd class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          A fund allows you to group records and manage a dedicated balance for it.
        </dd>
      </div>
      <div class="border-t border-zinc-200 pt-4">
        <dt class="font-medium text-zinc-900 dark:text-zinc-50">Tags for tracking</dt>
        <dd class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Track and measure recurrent related records, like "Bills" or "Car repairs".
        </dd>
      </div>
      <div class="border-t border-zinc-200 pt-4">
        <dt class="font-medium text-zinc-900 dark:text-zinc-50">Gain control to never loose it</dt>
        <dd class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Just log in for a full status, including a space for custom queries.
        </dd>
      </div>
    </dl>
  </div>
  <div class="grid grid-cols-1 grid-rows-2 gap-1">
    <div class="flex gap-2">
      <div class="w-1/2">
        <img src="./assets/projects/wallance-01.png" alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg">
      </div>
      <div class="w-1/2">
        <img src="./assets/projects/wallance-02.png" alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg">
      </div>
    </div>
    <div>
      <img src="./assets/projects/wallance-08.png" alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg">
    </div>
  </div>
  <div class="min-w-max">
    <h3 class="text-zinc-900 dark:text-zinc-100 text-left font-bold text-xl">Development Stack</h3>
    <ul class="lg:flex grid items-center gap-1 mt-6">
      <li
      class="flex items-center gap-2 rounded-3xl shadow-md py-0.5 px-4 dark:text-white text-zinc-800 dark:bg-zinc-800 bg-white font-medium"
      v-for="item in stack"
      >
        <div class="text-left" v-html="item.icon"></div>
        <span class="text-xl mx-auto">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</div>
`
}