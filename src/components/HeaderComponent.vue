<template>
  <header class="text-gray-400 bg-gray-900 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <router-link to="/home" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Demo SPA Vue</span>
      </router-link>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <router-link to="/home" active-class="active" class="mr-5 hover:text-white">Home</router-link>
        <router-link to="/about" active-class="active" class="mr-5 hover:text-white">About</router-link>
        <router-link to="/contact" active-class="active" class="mr-5 hover:text-white">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
@reference 'tailwindcss';

.active {
  @apply text-white scale-x-110 underline underline-offset-4 decoration-2 transition;
}
</style>