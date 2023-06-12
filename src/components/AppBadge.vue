<template>
  <div class="badge" :class="badgeClass">
    <p class="badge_content" :class="textClass">
      {{ content }}
    </p>
  </div>
</template>

<script>
export default {
  name: "AppBadge",
  props: {
    content: [String, Number],
    textClass: String,
    badgeClass: String,
  },
};
</script>
