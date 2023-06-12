<template>
  <section class="h-full w-full flex">
    <TaskGenerator />
    <div class="h-full flex overflow-y-hidden overflow-x-auto pb-4">
      <draggable class="flex" group="sections" tag="div">
        <template v-for="(item, index) in taskSections">
          <task-section
            class="cursor-move ml-9"
            :sectionTitle="item.sectionTitle"
            :sectionIndex="index"
            :key="index"
          >
            <draggable
              group="tasks"
              class="flex flex-col space-y-6 p-0.5 overflow-y-scroll"
            >
              <template v-for="(task, index) in taskList">
                <TaskCard
                  class="cursor-default"
                  v-if="task.belongsTo === item.id"
                  :task="task"
                  :key="index"
                />
              </template>
            </draggable>
          </task-section>
        </template>
      </draggable>
    </div>
  </section>
</template>

<script>
import draggable from "vuedraggable";

import { useTaskStore } from "@/stores/TaskStore";
import { mapState, mapActions } from "pinia";

import TaskSection from "@/components/TaskSection.vue";
import TaskCard from "@/components/TaskCard.vue";
import TaskGenerator from "@/components/TaskGenerator.vue";

export default {
  name: "TasksView",
  components: { TaskSection, TaskCard, TaskGenerator, draggable },
  computed: {
    ...mapState(useTaskStore, { taskSections: "getTaskSections" }),
    ...mapState(useTaskStore, { taskList: "getTaskList" }),
  },
  methods: {
    ...mapActions(useTaskStore, ["addTaskSection"]),
  },
};
</script>
