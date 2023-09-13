export default {
  props: ['emailCopied'],
  emits: ['copy'],
  template: `
  <div class="xl:flex xl:justify-around mt-10">
    <div class="bg-white dark:bg-zinc-800 shadow-md rounded-lg h-40 w-96 p-8 mx-auto my-4 ring-1 ring-white">
      <div class="flex items-center justify-center space-x-2 -mt-12">
        <a
        href="https://linkedin.com/in/edgarparucho"
        target="_blank"
        class="rounded-full border border-transparent shadow-sm shadow-zinc-900 bg-white hover:scale-110 transition-all"
        >
          <img width="36" height="36" src="https://img.icons8.com/ios-filled/50/linkedin-circled--v1.png" alt="LinkedIn logo">
        </a>
      </div>
      <span class="text-teal-600 dark:text-teal-500 text-xl font-bold">
        Let's connect
      </span>
      <p class="mt-2">Add me to your network.</p>
      <div class="justify-end flex mt-6">
        <a
        href="https://linkedin.com/in/edgarparucho"
        target="_blank"
        class="font-bold shadow-md text-white bg-teal-700 hover:scale-105 transition-all rounded-sm px-2 italic">
          linkedin.com/in/edgarparucho
        </a>
      </div>
    </div>

    <div class="bg-white dark:bg-zinc-800 shadow-md rounded-lg h-40 w-96 p-8 mx-auto my-4 ring-1 ring-white">
      <div class="flex items-center justify-center space-x-2 -mt-12">
        <a
        href="mailto:parucho.edgar@outlook.es"
        target="_blank"
        class="rounded-full border border-transparent shadow-sm shadow-zinc-900 bg-white hover:scale-110 transition-all"
        >
          <img width="36" height="36" src="https://img.icons8.com/ios-filled/50/circled-envelope.png" alt="Email logo">
        </a>
      </div>
      <span class="text-teal-600 dark:text-teal-500 text-xl font-bold">
        Write me
      </span>
      <p class="mt-2">For feedback or collaborations.</p>
      <div class="justify-end space-x-2 flex mt-6">
        <a
        href="mailto:parucho.edgar@outlook.es"
        target="_blank"
        class="font-bold shadow-md text-white bg-teal-700 hover:scale-105 transition-all rounded-sm px-2 italic"
        >
          parucho.edgar@outlook.es
        </a>
        <button
        class="shadow-md text-zinc-800 dark:text-white bg-zinc-100 dark:bg-zinc-700 hover:scale-110 transition-all rounded-sm px-2 italic"
        @click="$emit('copy')"
        >
          <small v-if="emailCopied" class="text-xs">Copied!</small>
          <small v-else class="text-xs">Copy</small>
        </button>
      </div>
    </div>

    <div class="bg-white dark:bg-zinc-800 shadow-md rounded-lg h-40 w-96 p-8 mx-auto my-4 ring-1 ring-white">
      <div class="flex items-center justify-center space-x-2 -mt-12">
        <a
        href="https://www.github.com/EdgarParucho"
        target="_blank"
        class="rounded-full border border-transparent shadow-sm shadow-zinc-900 bg-white hover:scale-110 transition-all"
        >
          <img width="36" height="36" src="https://img.icons8.com/ios-filled/50/github--v1.png" alt="gitHub logo">
        </a>
      </div>
      <span class="text-teal-600 dark:text-teal-500 text-xl font-bold">
        On Github
      </span>
      <p class="mt-2">Check my repos.</p>
      <div class="justify-end flex mt-6">
        <a
        href="https://www.github.com/EdgarParucho"
        target="_blank"
        class="font-bold shadow-md text-white bg-teal-700 hover:scale-105 transition-all rounded-sm px-2 italic"
        >
          github.com/EdgarParucho
        </a>
      </div>
    </div>

  </div>`
}