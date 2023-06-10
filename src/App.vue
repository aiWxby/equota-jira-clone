<template>
  <div id="app" class="h-screen">
    <div class="h-full">
      <TheSideBar />
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
