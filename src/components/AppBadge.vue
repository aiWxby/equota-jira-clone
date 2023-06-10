<template>
  <div
    class="badge"
    :class="wrapperClass"
  >
    <p class="badge_content" :class="textClass">
      {{ content }}
    </p>
  </div>
</template>

<script>
export default {
  name: "AppBadge",
  props: {
    content: String,
    textClass: String,
    wrapperClass: String,
  },
};
</script>
