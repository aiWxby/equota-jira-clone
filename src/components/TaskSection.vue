<template>
  <div class="w-80 flex flex-col space-y-8 flex-shrink-0" :class="wrapperClass">
    <h3 class="text-[15px] font-bold text-gray uppercase" :class="titleClass">
      {{ sectionTitle }}
    </h3>
    <div class="flex flex-col space-y-6" :class="taskListClass"></div>
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
