<template>
  <div
    class="inline-block rounded-md px-3 py-1.5 bg-gray-100"
    :class="wrapperClass"
  >
    <p class="font-bold text-sm text-gray-600" :class="textClass">
      Development
    </p>
  </div>
</template>

<script>
export default {
  name: "AppBadge",
  props: {
    textClass: String,
    wrapperClass: String,
  },
};
</script>
