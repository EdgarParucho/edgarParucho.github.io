export default {
  emit: ['toggleDarkMode'],
  template: `
  <nav class="bg-zinc-100 dark:bg-zinc-900 shadow-sm flex justify-around items-center py-2 sticky top-0 z-10">
    <h1 class="sign text-xl">
      Edgar Parucho
    </h1>
    <div class="flex items-center gap-2 font-bold">
      <label class="switch">
        <input type="checkbox" @click="$emit('toggleDarkMode')">
        <span class="slider round"></span>
      </label>
    </div>
    <a
    href="https://linkedin.com/in/edgarparucho"
    target="_blank"
    class="text-white bg-teal-600 hover:scale-110 transition-all font-bold rounded-sm px-2 py-0.5 flex gap-2 items-center"
    >
      <i class="devicon-linkedin-plain text-lg"></i>
      Connect
    </a>
  </nav>`
}