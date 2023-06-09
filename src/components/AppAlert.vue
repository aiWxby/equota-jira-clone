<template>
  <div class="p-4 rounded-md" :class="wrapperClass">
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
