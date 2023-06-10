<template>
  <button
    class="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
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
    <!--
      TODO: Bu kısma badge gelecek. Props'lar ile kontrol edilecek ve ona göre içine değer yazdırılacak.
     -->
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
    badgeClass: String,
  },
};
</script>
