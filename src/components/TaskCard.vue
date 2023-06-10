<template>
  <div class="p-5 flex flex-col bg-gray-25 rounded-lg shadow space-y-4">
    <div class="space-y-1.5">
      <h3 class="text-xl font-bold text-gray-800">Make a Kanban App</h3>
      <div class="flex items-center">
        <p class="text-sm font-bold text-gray-400">12th Jan</p>
        <div class="w-1 h-1 mx-2.5 rounded-full bg-[#C4C4C4]"></div>
        <p class="text-sm font-bold text-gray-400">
          Created by <span class="text-gray">Prahlad</span>
        </p>
      </div>
    </div>
    <p class="text-sm font-medium text-gray-400">
      Please use trello and designs in Dribble as refence and carry on...
    </p>
    <img
      src="https://picsum.photos/300"
      alt=""
      class="block w-full h-20 rounded-lg object-cover"
      loading="lazy"
    />
    <div class="flex items-center space-x-4">
      <div class="flex items-center space-x-1.5">
        <p
          class="text-sm font-medium text-gray-400 overflow-hidden max-w-[10ch]"
        >
          docs.google.com
        </p>
      </div>
      <div class="flex items-center space-x-1.5">
        <p
          class="text-sm font-medium text-gray-400 overflow-hidden max-w-[10ch]"
        >
          main.psd
        </p>
      </div>
    </div>
    <div class="flex items-center space-x-2">
      <AppBadge />
      <AppBadge />
    </div>
    <div class="flex items-center justify-between">
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
        <p class="text-sm font-medium text-gray-400">3</p>
      </div>
      <div class="flex items-center space-x-1">
        <img
          src="https://picsum.photos/200"
          alt=""
          class="block w-6 h-6 rounded-full object-cover"
          loading="lazy"
        />
        <img
          src="https://picsum.photos/200"
          alt=""
          class="block w-6 h-6 rounded-full object-cover"
          loading="lazy"
        />
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
};
</script>
