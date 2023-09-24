export default {
  props: ['inEnglish'],
  emit: ['toggleDarkMode', 'toggleLanguage'],
  template: `
  <nav class="bg-zinc-100 dark:bg-zinc-900 shadow-sm flex justify-around items-center py-2 sticky top-0 z-10">
    <h1 class="sign text-xl">
      Edgar Parucho
    </h1>
    <div class="flex items-center gap-2 font-bold">
      <label class="switch">
        <input type="checkbox" @click="$emit('toggleDarkMode')">
        <span class="theme slider round"></span>
      </label>
    </div>
    <div class="flex items-center gap-2">
      <button
      @click="$emit('toggleLanguage')"
      type="button"
      class="text-xs shadow-sm text-black dark:text-white bg-white dark:bg-zinc-800 px-2 py-0.5 active:scale-95 transition-all"
      >
        <span :class="{ 'font-bold': inEnglish }"> EN </span>|
        <span :class="{ 'font-bold': !inEnglish }"> ES </span>
      </button>
    </div>
    <a
    href="https://linkedin.com/in/edgarparucho"
    target="_blank"
    class="text-white bg-teal-600 hover:scale-110 transition-all font-bold rounded-sm px-2 py-0.5 flex gap-2 items-center w-28"
    >
      <i class="devicon-linkedin-plain text-lg"></i>
      <span>{{ inEnglish ? "Connect" : "Conectar" }}</span>
    </a>
  </nav>`
}