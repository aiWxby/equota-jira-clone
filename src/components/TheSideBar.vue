<template>
  <nav class="h-full w-80 bg-white p-6">
    <SideBarMenuList />
  </nav>
</template>

<script>
import SideBarMenuList from "./SideBarMenuList.vue";

export default {
  name: "TheSideBar",
  components: {
    SideBarMenuList,
  },
};
</script>
