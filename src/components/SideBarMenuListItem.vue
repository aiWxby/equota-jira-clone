<template>
  <button
    class="sidebar-menu-item"
    :class="wrapperClass"
  >
    <div class="sidebar-menu-item_content">
      <div class="sidebar-menu-item_icon" :class="iconClass">
        <slot name="icon"> </slot>
      </div>
      <p class="sidebar-menu-item_title" :class="contentClass">
        {{ content }}
      </p>
    </div>
    <div class="sidebar-menu-item_misc" :class="slotClass">
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
