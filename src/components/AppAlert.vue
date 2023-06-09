<template>
  <div class="p-4 rounded-md flex items-center space-x-2" :class="wrapperClass">
    <slot name="icon"></slot>
    <p :class="textClass">
      {{ alertMessage }}
    </p>
  </div>
</template>

<script>
export default {
  name: "AppAlert",
  props: {
    alertMessage: String,
    wrapperClass: String,
    textClass: String,
  },
};
</script>
