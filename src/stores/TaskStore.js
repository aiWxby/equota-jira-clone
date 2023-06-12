import { defineStore } from "pinia";
import { taskSections, taskList } from "@/data/taskData";

export const useTaskStore = defineStore("TaskStore", {
  state: () => {
    return {
      taskSections,
      taskList,
    };
  },
  getters: {
    getTaskSections: (state) => state.taskSections,
    getTaskSectionsIDs: (state) =>
      state.taskSections.map((section) => section.id),
    getTaskList: (state) => state.taskList,
    getTaskCount: (state) => state.taskList.length,
  },
  actions: {
    updateTaskSectionName(index, title, id) {
      this.taskSections[index].sectionTitle = title.toUpperCase();
      this.taskSections[index].id = id;
    },
    addTaskSection() {
      this.taskSections.unshift({
        id: "random",
        sectionTitle: "RANDOM",
      });
    },
    addTask(whereTo) {
      this.taskList.push({
        belongsTo: whereTo,
        title: "Tebrikler! Rastgele bir task ürettiniz",
        description:
          "Gönül daha detaylı bir işlem yapmak isterdi fakat kaygılar çok başkaydı...",
        date: "Zamansız",
        author: "Ertuğrul",
        image: "",
        files: [],
        tags: [
          {
            palette: "gray",
            content: "Test",
          },
        ],
        comments: {
          count: 0,
          avatars: [],
        },
      });
    },
  },
});
