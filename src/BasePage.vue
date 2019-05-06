<template>
  <div class="base-page">
    <div class="base-page__content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BasePage",
}
</script>

<style lang="scss" scoped>
@import "./styles/components/BasePage.scss";
</style>
