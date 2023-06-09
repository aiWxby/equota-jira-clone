<template>
  <div class="p-4 rounded-t-md bg-primary-100 border-b-4 border-primary-500 text-left">
    <p class="text-primary-600">
      {{ alertMessage }}
    </p>
  </div>
</template>

<script>
export default {
  name: "AppAlert",
  props: {
    alertMessage: String
  }
};
</script>