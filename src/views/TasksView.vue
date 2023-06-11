<template>
  <div class="h-full w-full flex overflow-x-auto overflow-y-hidden space-x-9">
    <template v-for="(item, index) in taskData">
      <task-section :sectionTitle="item.sectionTitle" :key="index">
        <template v-for="(task, index) in taskData[index].tasks">
          <TaskCard :task="task" :key="index" />
        </template>
      </task-section>
    </template>
    <task-section sectionTitle="test">
      <template v-for="(task, index) in tasksOfSection">
        <TaskCard :task="task" :key="index" />
      </template>
    </task-section>
  </div>
</template>

<script>
import { useTaskStore } from "@/stores/TaskStore";
import { mapState } from "pinia";

import TaskSection from "@/components/TaskSection.vue";
import TaskCard from "@/components/TaskCard.vue";

export default {
  name: "TasksView",
  components: { TaskSection, TaskCard },
  computed: {
    ...mapState(useTaskStore, { taskData: "getTaskData" }),
  },
};
</script>
