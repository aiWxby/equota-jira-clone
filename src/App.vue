<template>
  <div id="app">
    <div class="h-screen flex">
      <div class="h-full">
        <TheSideBar />
      </div>
      <div class="w-full p-20">
        <RouterView />
      </div>
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
