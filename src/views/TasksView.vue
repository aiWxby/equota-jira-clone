<template>
  <div class="h-full w-full flex overflow-x-auto overflow-y-hidden space-x-9">
    <template v-for="(item, index) in taskData">
      <task-section :sectionTitle="item.sectionTitle" :key="index">
        <template v-for="(task, index) in taskData[index].tasks">
          <TaskCard :task="task" :key="index" />
        </template>
      </task-section>
    </template>
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
