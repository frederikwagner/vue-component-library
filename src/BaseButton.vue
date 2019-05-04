<template>
  <button class="base-button">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
}
</script>

<style lang="scss" scoped>
@import "./styles/components/BaseButton.scss";
</style>
