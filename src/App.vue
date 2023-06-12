<template>
  <div id="app">
    <div class="h-screen flex">
      <header class="h-full">
        <TheSideBar />
      </header>
      <main class="w-full p-20 overflow-x-hidden">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script>
import TheSideBar from "./components/TheSideBar.vue";

export default {
  name: "App",
  components: { TheSideBar },
};
</script>

<style>
@font-face {
  font-family: "Karla";
  src: url(./assets/fonts/Karla.ttf) format("truetype");
}
#app {
  font-family: "Karla";
}
</style>
