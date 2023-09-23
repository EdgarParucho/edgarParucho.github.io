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
      <span v-if="inEnglish">A financial records management application.</span>
      <span v-else>Una aplicación para gestionar registros financieros</span>
    </strong>

    <h3 v-if="inEnglish" class="text-zinc-900 dark:text-zinc-100 mt-12 text-left font-bold text-xl">The Objective</h3>
    <h3 v-else class="text-zinc-900 dark:text-zinc-100 mt-12 text-left font-bold text-xl">El Objetivo</h3>
    <p class="mt-4 text-zinc-600 dark:text-zinc-400">
      <ul class="mt-4">
        <li>
          <span v-if="inEnglish">
            What are your top 5 expense causes?
          </span>
          <span v-else>
            ¿Cuáles son tus 5 causas principales de gasto?
          </span>
        </li>
        <li>
          <span v-if="inEnglish">
            How long will take you to save for X goal?
          </span>
          <span v-else>
            ¿Cuánto te tomará ahorrar para X objetivo?
          </span>
        </li>
        <li>
          <span v-if="inEnglish">
            How much you spend on non-mandatory causes?
          </span>
          <span v-else>
            ¿Que tanto gastas en causas no obligatorias?
          </span>
        </li>
      </ul>

      <p v-if="inEnglish" class="mt-4 text-zinc-600 dark:text-zinc-400">
        You may face those and other questions for planning, making changes in your lifestyle, or simply having control over this important matter.
        <br>
        That's when Wallance will be useful for you.
      </p>

      <p v-else class="mt-4 text-zinc-600 dark:text-zinc-400">
        Puede que encuentres esas preguntas al planear, hacer cambios en tu estilo de vida, o simplemente tener el control sobre este importante asunto.
        <br>
        Es entonces cuando Wallance te será de utilidad.
      </p>
    </p>
    <h3 v-if="inEnglish" class="text-zinc-900 dark:text-zinc-100 mt-12 text-left font-bold text-xl">Core Features</h3>
    <h3 v-else class="text-zinc-900 dark:text-zinc-100 mt-12 text-left font-bold text-xl">Funcionalidades centrales</h3>
    <dl class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
      <div class="border-t border-zinc-200 pt-4">
        <dt class="font-medium text-zinc-900 dark:text-zinc-50">
          <span v-if="inEnglish">Record is the essence</span>
          <span v-else>El registro es la esencia</span>
        </dt>
        <dd class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          <span v-if="inEnglish">Just &quot;feed&quot; the database to move the charts, stats, and tables.</span>
          <span v-else>Solo &quot;alimenta&quot; la base de datos para contar con estadísticas, gráficas y tablas.</span>
        </dd>
      </div>
      <div class="border-t border-zinc-200 pt-4">
        <dt class="font-medium text-zinc-900 dark:text-zinc-50">
          <span v-if="inEnglish">Use funds to group</span>
          <span v-else>Usa fondos para agrupar</span>
        </dt>
        <dd class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          <span v-if="inEnglish">A fund allows you to group records and balances separately, dedicated to a specific purpose.</span>
          <span v-else>Un fondo te permite agrupar registros y saldos por separado, dedicados a un fin específico.</span>
        </dd>
      </div>
      <div class="border-t border-zinc-200 pt-4">
        <dt class="font-medium text-zinc-900 dark:text-zinc-50">
          <span v-if="inEnglish">Tags for tracking</span>
          <span v-else>Etiquetas para seguimiento</span>
        </dt>
        <dd class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          <span v-if="inEnglish">Track and measure recurrent related records, like &quot;Bills&quot; or "Car repairs".</span>
          <span v-else>Rastrea y mide registros recurrentes relacionados, como &quot;Recibos&quot; o &quot;Vehículo&quot;.</span>
        </dd>
      </div>
      <div class="border-t border-zinc-200 pt-4">
        <dt class="font-medium text-zinc-900 dark:text-zinc-50">
          <span v-if="inEnglish">A friendly dashboard</span>
          <span v-else>Un dashboard amigable</span>
        </dt>
        <dd class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          <span v-if="inEnglish">At log in, know your status, stats, and indicators that will help in your decision making.</span>
          <span v-else>Al acceder, conoce tu estado, estadísticas, e indicadores que ayudarán en tu toma de decisiones.</span>
        </dd>
      </div>
    </dl>
  </div>
  <div class="grid grid-cols-1 grid-rows-2 gap-1">
    <div class="flex gap-2">
      <div class="w-1/2">
        <img src="./assets/projects/wallance-09.png" alt="wallance, screenshot showing a card with balance." class="rounded-lg">
      </div>
      <div class="w-1/2">
        <img src="./assets/projects/wallance-10.png" alt="wallance, screenshot showing a funds status." class="rounded-lg">
      </div>
    </div>
    <div>
      <img src="./assets/projects/wallance-08.png" alt="wallance, screenshot showing two records charts." class="rounded-lg">
    </div>
  </div>
  <div class="min-w-max">
    <h3 v-if="inEnglish" class="text-zinc-900 dark:text-zinc-100 text-left font-bold text-xl">Built with</h3>
    <h3 v-else class="text-zinc-900 dark:text-zinc-100 text-left font-bold text-xl">Construido con</h3>
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