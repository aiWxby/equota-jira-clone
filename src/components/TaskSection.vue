<template>
  <div class="w-80 flex flex-col space-y-8 flex-shrink-0" :class="wrapperClass">
    <h3 class="text-[15px] font-bold text-gray uppercase" :class="titleClass">
      {{ sectionTitle }}
    </h3>
    <div
      class="flex flex-col space-y-6 pb-6 overflow-y-auto"
      :class="taskListClass"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskSection",
  props: {
    sectionTitle: String,
    titleClass: String,
    wrapperClass: String,
    taskListClass: String,
  },
};
</script>

<style scoped>
* {
  scrollbar-width: none;
  scrollbar-color: #98a2b3;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  display: none;
}
</style>
