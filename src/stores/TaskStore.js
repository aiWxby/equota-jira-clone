import { defineStore } from "pinia";
import { taskData } from "@/data/taskData";

export const useTaskStore = defineStore("TaskStore", {
  state: () => {
    return {
      taskData,
    };
  },
  getters: {
    getTaskData: (state) => state.taskData,
  },
});
