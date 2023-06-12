<template>
  <div class="flex flex-col space-y-2 mr-2">
    <button
      @click="addTaskSection"
      class="h-full flex flex-col justify-center items-center cursor-pointer transition-color duration-300 text-gray hover:bg-gray-300 p-4 border-2 border-gray-300 border-dashed"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
        />
      </svg>
      <p>Add</p>
    </button>
    <button
      @click="addTask(getRandomTaskSectionID(taskSectionsIDs))"
      class="h-full flex flex-col justify-center items-center cursor-pointer transition-color duration-300 text-gray hover:bg-gray-300 p-4 border-2 border-gray-300 border-dashed"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
      <p>Add</p>
    </button>
  </div>
</template>

<script>
import { useTaskStore } from "@/stores/TaskStore";
import { mapState, mapActions } from "pinia";

export default {
  name: "TaskGenerator",

  computed: {
    ...mapState(useTaskStore, { taskSectionsIDs: "getTaskSectionsIDs" }),
  },
  methods: {
    getRandomTaskSectionID: function (taskSectionsIDs) {
      let randomNumber = Math.floor(Math.random() * taskSectionsIDs.length);
      return taskSectionsIDs[randomNumber];
    },
    ...mapActions(useTaskStore, ["addTaskSection"]),
    ...mapActions(useTaskStore, ["addTask"]),
  },
};
</script>
