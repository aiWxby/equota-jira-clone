<template>
  <button
    class="w-full flex items-center justify-between py-3 px-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
    :class="wrapperClass"
  >
    <div class="flex items-center space-x-3">
      <div class="text-gray-500" :class="iconClass">
        <slot name="icon"> </slot>
      </div>
      <p class="text-gray-500 font-bold text-base" :class="contentClass">
        {{ content }}
      </p>
    </div>
    <div class="text-gray-500" :class="slotClass">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "SideBarMenuListItem",
  props: {
    wrapperClass: String,
    iconClass: String,
    content: String,
    contentClass: String,
    slotClass: String,
  },
};
</script>
