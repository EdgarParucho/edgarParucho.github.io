export default {
  props: {
    stack: Array,
    inEnglish: Boolean
  },
  template: `
  <div class="px-2 mx-auto">

    <div class="grid mx-auto xl:w-2/3">
      <div>
        <div class="bg-gradient-to-b from-teal-600 to-zinc-800 p-2 rounded-xl mx-10">
          <img class="rounded-sm object-cover" src="./assets/projects/mantra-1-dark.png" alt="Mantra App in laptop">
        </div>
        <div class="bg-gradient-to-r from-teal-600 to-zinc-800 h-2 rounded-lg w-11/12 xl:w-full mx-auto"></div>
      </div>
      <div class="grid items-end justify-between">
        <div class="absolute w-2/3 xl:w-1/3 ml-8 mb-2 bg-gradient-to-b from-white to-zinc-500 p-1 rounded-md shadow-md mx-10">
          <img class="rounded-lg object-cover" src="./assets/projects/mantra-1.png" alt="Mantra App in tablet">
        </div>
        <div class="absolute w-20 sm:w-32 md:w-48 ml-4 mb-2 bg-gradient-to-t from-black to-zinc-600 p-0.5 md:p-1 rounded-xl shadow-md mx-10">
          <img class="mx-auto rounded-lg h-44 sm:h-64 md:h-96 object-cover" src="./assets/projects/mantra-mob-1-dark.png" alt=" in smartphone">
        </div>
      </div>
    </div>

    <div class="xl:w-3/4 px-8 mt-16 mx-auto">

      <div class="mb-4 mt-2 flex justify-between items-center">
        <h2 class="text-zinc-900 dark:text-zinc-100 text-4xl font-bold">
          Mantra
        </h2>
        <a href="https://testing-mantra.onrender.com" target="_blank" class="px-2 font-bold rounded-sm underline transition-colors text-teal-500 hover:bg-teal-100 dark:hover:bg-teal-900">
          Demo
        </a>
      </div>
  
      <div class="grid text-lg">
        <div>
          <strong class="text-black dark:text-white">
            <span v-if="inEnglish">A Help Desk web application.</span>
            <span v-else>Una aplicación web de Help Desk</span>
          </strong>
          <p v-if="inEnglish" class="px-2 py-0.5 bg-teal-600 text-teal-500 bg-opacity-20 rounded-sm">
            This project is currently owned by Microfilms Center from Venezuela.
          </p>
          <p v-else class="px-2 py-0.5 bg-teal-600 text-teal-500 bg-opacity-20 rounded-sm">
            Este proyecto pertenece actualmente a Microfilms Center de Venezuela.
          </p>
        </div>

        <div>
          <h3 v-if="inEnglish" class="text-zinc-900 dark:text-zinc-100 mt-12 text-left font-bold text-xl">The Objective</h3>
          <h3 v-else class="text-zinc-900 dark:text-zinc-100 mt-12 text-left font-bold text-xl">El objetivo</h3>

          <p v-if="inEnglish">
            Mantra's general goal was to improve the management system, facing several issues that impacted the company's bottom line.
            With its implementation, it exceeded expectations, which led to make it also part of the company's catalog, the first of its kind.
          </p>
          <p v-else>
            El objetivo general de Mantra era mejorar el sistema de gestión, enfrentando varios problemas que impactaban los resultados de la compañía.
            Con su implementación, superó las expectativas, lo que lo llevó a integrarlo al catálogo de la compañía, el primero de su tipo.
          </p>

        </div>

        <h3 v-if="inEnglish" class="text-zinc-900 dark:text-zinc-100 mt-12 text-left font-bold text-xl">Core Features</h3>
        <h3 v-else class="text-zinc-900 dark:text-zinc-100 mt-12 text-left font-bold text-xl">Funcionalidades centrales</h3>
        <dl class="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          <div class="dark:bg-opacity-30 shadow-md bg-white dark:bg-zinc-950 dark:shadow-zinc-950 p-4">
            <dt class="font-medium text-zinc-900 dark:text-zinc-50">
              <span v-if="inEnglish">Availability</span>
              <span v-else>Disponibilidad</span>
            </dt>
            <dd class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span v-if="inEnglish">
                A web browser with internet access is all you need to use it. Plus, as a PWA (Progressive Web Application), it can be installed as a native software.
              </span>
              <span v-else>
                Un navegador web con acceso a internet es todo lo que necesitas. Además, como PWA (Aplicación Web Progresiva), puede ser instalada como un software nativo.
              </span>
            </dd>
          </div>
          <div class="dark:bg-opacity-30 shadow-md bg-white dark:bg-zinc-950 dark:shadow-zinc-950 p-4">
            <dt class="font-medium text-zinc-900 dark:text-zinc-50">
              UI / UX
            </dt>
            <dd class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span v-if="inEnglish">
                Users can catch up on the service's status through cards, charts, and tables with the most relevant data according to their role.
              </span>
              <span v-else>
                Los usuarios se mantienen alineados al estado del servicio a través de tarjetas, gráficos, y tablas con los datos más relevantes de acuerdo a su rol.
              </span>
            </dd>
          </div>
          <div class="dark:bg-opacity-30 shadow-md bg-white dark:bg-zinc-950 dark:shadow-zinc-950 p-4">
            <dt class="font-medium text-zinc-900 dark:text-zinc-50">
              <span v-if="inEnglish">
                Automation
              </span>
              <span v-else>
                Automatización
              </span>
            </dt>
            <dd class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span v-if="inEnglish">
                Avoid breach of Service Level Agreements by customizing the parameters. Mantra monitor and let you know if something is jeopardizing the service.
              </span>
              <span v-else>
                Evita brechas en los Acuerdos de Nivel de Servicio personalizando los parámetros. Mantra monitorea e informa si algo amenaza al servicio.
              </span>
            </dd>
          </div>
          <div class="dark:bg-opacity-30 shadow-md bg-white dark:bg-zinc-950 dark:shadow-zinc-950 p-4">
            <dt class="font-medium text-zinc-900 dark:text-zinc-50">Control</dt>
            <dd class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span v-if="inEnglish">
                Users have the control. They don't need to contact Support or Development to manage the users, products, clients nor the rest, just the right privileges.
              </span>
              <span v-else>
                Los usuarios tienen el control. No necesitan contactar a Soporte o Desarrollo para gestionar clientes, usuarios o productos, solo los privilegios adecuados.
              </span>
            </dd>
          </div>
        </dl>

        <div class="min-w-max mt-10">
          <h3 v-if="inEnglish" class="text-zinc-900 dark:text-zinc-100 text-left font-bold text-xl">Built with</h3>
          <h3 v-else class="text-zinc-900 dark:text-zinc-100 text-left font-bold text-xl">Construido con</h3>
          <ul class="lg:flex grid items-center gap-1 mt-6">
            <li
            class="flex items-center gap-2 rounded-3xl shadow-md py-0.5 px-4 text-zinc-900 dark:text-zinc-100 dark:bg-zinc-800 bg-white font-medium"
            v-for="item in stack"
            >
              <div class="text-left mt-1" v-html="item.icon"></div>
              <span class="text-xl mx-auto">{{ item.name }}</span>
            </li>
          </ul>
        </div>

      </div>
  
    </div>
  </div>
`}