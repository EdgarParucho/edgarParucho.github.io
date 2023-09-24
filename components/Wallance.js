export default {
  props: {
    stack: Array,
    inEnglish: Boolean
  },
  template: `
<div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
  <div>
    <div class="mb-4 mt-2 flex justify-between items-center">
      <h2 class="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Wallance</h2>
      <a href="https://wallance.vercel.app/" target="_blank" class="px-2 font-bold rounded-sm underline transition-colors text-teal-500 hover:bg-teal-100 dark:hover:bg-teal-900">
        Demo
      </a>
    </div>
    <strong class="text-black dark:text-white text-lg">
      {{ inEnglish ? "A financial records management application." : "Una aplicación para gestionar registros financieros." }}
    </strong>

    <h3 class="text-zinc-900 dark:text-zinc-100 mt-12 text-left font-bold text-xl">
      {{ inEnglish ? "The Objective" : "El objetivo" }}
    </h3>

    <ul class="mt-4">
      <li>
        {{ inEnglish ? "What are your top 5 expense causes?" : "¿Cuáles son tus 5 causas principales de gasto?" }}
      </li>
      <li>
        {{ inEnglish ? "How long will take you to save for X goal?" : "¿Cuánto te tomará ahorrar para X objetivo?" }}
      </li>
      <li>
        {{ inEnglish ? "How much you spend on non-mandatory causes?" : "¿Que tanto gastas en causas no obligatorias?" }}
      </li>
    </ul>

    <p class="mt-4 text-zinc-600 dark:text-zinc-400">
      {{ inEnglish ? "You may face those and other questions for planning, making changes in your lifestyle, or simply having control over this important matter, that's when Wallance will be useful for you."
      : "Puede que encuentres esas preguntas al planear, hacer cambios en tu estilo de vida, o simplemente tener el control sobre este importante asunto. Es entonces cuando Wallance te será de utilidad." }}
    </p>

    <h3 class="text-zinc-900 dark:text-zinc-100 my-6 text-left font-bold text-xl">{{
      inEnglish ? "Core Features"
      : "Funcionalidades centrales"
    }}</h3>

    <dl class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
      <div class="dark:bg-opacity-30 shadow-md bg-white dark:bg-zinc-950 dark:shadow-zinc-950 p-4">
        <dt class="font-medium text-zinc-900 dark:text-zinc-50">
          {{ inEnglish ? "Record is the essence"
          : "El registro es la esencia" }}
        </dt>
        <dd class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {{ inEnglish ? "Just feed the database to move the charts, stats, and tables."
          : "Solo alimenta la base de datos para contar con estadísticas, gráficas y tablas." }}
        </dd>
      </div>
      <div class="dark:bg-opacity-30 shadow-md bg-white dark:bg-zinc-950 dark:shadow-zinc-950 p-4">
        <dt class="font-medium text-zinc-900 dark:text-zinc-50">
          {{ inEnglish ? "Use funds to group" : "Usa fondos para agrupar" }}
        </dt>
        <dd class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {{ inEnglish ? "A fund allows you to group records and balances separately, dedicated to a specific purpose."
          : "Un fondo te permite agrupar registros y saldos por separado, dedicados a un fin específico." }}
        </dd>
      </div>
      <div class="dark:bg-opacity-30 shadow-md bg-white dark:bg-zinc-950 dark:shadow-zinc-950 p-4">
        <dt class="font-medium text-zinc-900 dark:text-zinc-50">
          {{ inEnglish ? "Tags for tracking" : "Etiquetas para seguimiento" }}
        </dt>
        <dd class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {{ inEnglish ? "Track and measure recurrent related records, like Bills or Car repairs."
          : "Rastrea y mide registros recurrentes relacionados, como Recibos o Vehículo." }}
        </dd>
      </div>
      <div class="dark:bg-opacity-30 shadow-md bg-white dark:bg-zinc-950 dark:shadow-zinc-950 p-4">
        <dt class="font-medium text-zinc-900 dark:text-zinc-50">
          {{ inEnglish ? "A friendly dashboard"
          : "Un dashboard amigable" }}
        </dt>
        <dd class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {{ inEnglish ? "At log in, know your status, stats, and indicators that will help in your decision making."
          : "Al acceder, conoce tu estado, estadísticas, e indicadores que ayudarán en tu toma de decisiones." }}
        </dd>
      </div>
    </dl>
  </div>
  <div class="grid grid-cols-1 grid-rows-2 gap-1">
    <div class="flex gap-2">
      <div class="w-1/2">
        <img src="./assets/img/wallance-09.png" alt="wallance, screenshot showing a card with balance." class="rounded-lg">
      </div>
      <div class="w-1/2">
        <img src="./assets/img/wallance-10.png" alt="wallance, screenshot showing a funds status." class="rounded-lg">
      </div>
    </div>
    <div>
      <img src="./assets/img/wallance-08.png" alt="wallance, screenshot showing two records charts." class="rounded-lg">
    </div>
  </div>
  <div class="min-w-max">
    <h3 class="text-zinc-900 dark:text-zinc-100 text-left font-bold text-xl">
      {{ inEnglish ? "Built with" : "Construido con" }}
    </h3>
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