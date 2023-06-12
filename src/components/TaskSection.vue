<template>
  <div
    class="w-80 flex flex-col space-y-8 flex-shrink-0 overflow-y-scroll"
    :class="wrapperClass"
  >
    <input
      :value="sectionTitle"
      @keyup.enter="
        updateTaskSectionName(
          sectionIndex,
          $event.target.value,
          optimiseString($event.target.value)
        )
      "
      type="text"
      class="text-[15px] font-bold text-gray uppercase px-0.5 bg-transparent border-none outline-none"
      :class="titleClass"
    />
    <slot></slot>
  </div>
</template>

<script>
import { useTaskStore } from "@/stores/TaskStore";
import { mapActions } from "pinia";

import {
  makeStringKebabCase,
  optimiseStringToEnglishAlphabet,
} from "@/helpers/stringOptimisers";

export default {
  name: "TaskSection",
  props: {
    sectionTitle: String,
    sectionIndex: [String, Number],
    titleClass: String,
    wrapperClass: String,
    taskListClass: String,
    tasks: Array,
  },
  methods: {
    optimiseString: function (string) {
      return optimiseStringToEnglishAlphabet(makeStringKebabCase(string));
    },
    ...mapActions(useTaskStore, ["updateTaskSectionName"]),
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
