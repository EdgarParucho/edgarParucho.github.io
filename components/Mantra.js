export default {
  props: {
    stack: Array,
  },
  template: `
  <div class="xl:justify-between px-2">

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

    <div class="2xl:w-2/3 px-8 mt-16 mx-auto">

      <div class="mb-4 mt-2 flex justify-between items-center">
        <h2 class="text-zinc-900 dark:text-zinc-100 text-4xl font-bold">
          Mantra
        </h2>
        <a href="https://testing-mantra.onrender.com" target="_blank" class="px-2 font-bold rounded-sm underline transition-colors text-teal-500 hover:bg-teal-100 dark:hover:bg-teal-900">
          Live Demo
        </a>
      </div>
  
      <div class="grid space-y-12 text-lg">
        <div>
          <strong>
            A Help Desk web application.
          </strong>
          <p>
            The project is currently owned by Microfilms Center from Venezuela to manage the company's operations.
          </p>
        </div>

        <div>
          <h3 class="text-zinc-900 dark:text-zinc-100 mt-12 text-left font-bold text-xl">The Objective</h3>
          <p>
            Mantra's general goal was to improve the previous management system. That included several problems impacting the team's performance.
          </p>
          <p>
            At its implementation, not only solved more than initially was intended to, but elevated the team's management capability.
          </p>
          <br>
          <p>
            The following are some features from the core of Mantra to face those problems:
          </p>
        </div>

        <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          <div class="dark:bg-opacity-30 shadow-md bg-white dark:bg-zinc-950 dark:shadow-zinc-950 p-4">
            <dt class="font-medium text-zinc-900 dark:text-zinc-50">Availability</dt>
            <dd class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              A web browser and internet connection it's all you need to access.
              Plus, it's a PWA (Progressive Web Application). This allows to install the app as a native software.
            </dd>
          </div>
          <div class="dark:bg-opacity-30 shadow-md bg-white dark:bg-zinc-950 dark:shadow-zinc-950 p-4">
            <dt class="font-medium text-zinc-900 dark:text-zinc-50">UI / UX</dt>
            <dd class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Users can catch up the status through cards, charts and tables with the most relevant data according to their role.</dd>
          </div>
          <div class="dark:bg-opacity-30 shadow-md bg-white dark:bg-zinc-950 dark:shadow-zinc-950 p-4">
            <dt class="font-medium text-zinc-900 dark:text-zinc-50">Automation</dt>
            <dd class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Avoid breach of Service Level Agreements by customizing the parameters, Mantra will track and let you know if something is jeopardizing your service.</dd>
          </div>
          <div class="dark:bg-opacity-30 shadow-md bg-white dark:bg-zinc-950 dark:shadow-zinc-950 p-4">
            <dt class="font-medium text-zinc-900 dark:text-zinc-50">Control</dt>
            <dd class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Users gained control over the data. Clients, products, records, users, roles, you name it, Mantra provides the control needed for the business mutability.
            </dd>
          </div>
        </dl>

        <div class="min-w-max">
          <h3 class="text-zinc-900 dark:text-zinc-100 text-left font-bold text-xl">Development Stack</h3>
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