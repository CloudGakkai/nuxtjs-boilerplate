<template>
  <div class="font-roboto">
    <div class="bg-white py-20 flex flex-col items-center justify-center">
      <h1
        class="text-slate-900 border-b-4 pb-2 border-primary-600 text-5xl font-semibold cursor-pointer hover:text-primary-600 hover:border-transparent transition-all duration-200"
      >
        NuxtJS Boilerplate
      </h1>
    </div>
    <main>
      <slot />
    </main>
    <footer
      class="bg-slate-800 text-slate-300 py-3 flex flex-col items-center justify-center"
    >
      <span
        >❮❯ NuxtJS Boilerplate by
        <a
          href="https://cloudgakkai.dev"
          class="border-b border-primary-500 hover:border-transparent hover:text-primary-500 transition-all duration-200"
          >CloudGakkai</a
        ></span
      >
    </footer>
  </div>
</template>
