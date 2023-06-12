<template>
  <div
    class="p-5 flex flex-col bg-gray-25 rounded-lg shadow-task-card space-y-4"
  >
    <div class="space-y-1.5">
      <h3 class="text-xl font-bold text-gray-800 cursor-pointer">
        {{ task.title }}
      </h3>
      <div class="flex items-center">
        <p class="text-sm font-bold text-gray-400">{{ task.date }}</p>
        <div class="w-1 h-1 mx-2.5 rounded-full bg-[#C4C4C4]"></div>
        <p class="text-sm font-bold text-gray-400">
          Created by <span class="text-gray">{{ task.author }}</span>
        </p>
      </div>
    </div>
    <p v-if="task.description" class="text-[15px] font-medium text-gray-400">
      {{ task.description }}
    </p>
    <img
      v-if="task.image"
      :src="task.image"
      alt=""
      class="block w-full h-20 rounded-lg object-cover"
      loading="lazy"
    />
    <div v-if="task.files.length > 0" class="flex items-center space-x-4">
      <template v-for="file in task.files">
        <div
          :key="file.content"
          class="flex items-center space-x-1.5 cursor-pointer"
        >
          <svg
            v-if="file.type === 'url'"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-[18px] h-[18px] text-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
          <svg
            v-else-if="file.type === 'attachment'"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-[18px] h-[18px] text-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
            />
          </svg>
          <p
            class="text-[15px] font-medium text-gray-400 overflow-hidden max-w-[10ch]"
          >
            {{ file.content }}
          </p>
        </div>
      </template>
    </div>
    <div v-if="task.tags.length > 0" class="flex items-center space-x-2">
      <template v-for="tag in task.tags">
        <AppBadge
          :content="tag.content"
          :badgeClass="`bg-${tag.palette}-100`"
          :textClass="`text-${tag.palette}-600`"
          :key="tag.content"
        />
      </template>
    </div>
    <div
      v-if="task.comments.count > 0"
      class="flex items-center justify-between"
    >
      <div class="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-gray-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
          />
        </svg>
        <p class="text-[15px] font-medium text-gray-400">
          {{ task.comments.count }}
        </p>
      </div>
      <div class="flex items-center space-x-1">
        <template v-for="(avatar, index) in task.comments.avatars">
          <img
            :key="index"
            src="https://picsum.photos/200"
            alt=""
            class="block w-6 h-6 rounded-full object-cover"
            loading="lazy"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import AppBadge from "./AppBadge.vue";
export default {
  name: "TaskCard",
  components: {
    AppBadge,
  },
  props: {
    task: Object,
  },
};
</script>
