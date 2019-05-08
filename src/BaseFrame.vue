<template>
  <div
    class="base-frame"
    :class="frameClasses"
  >
    <div class="base-frame__top-bar">
      <div class="base-frame__top-bar-left">
        <slot name="top-bar-left" />
      </div>

      <div class="base-frame__top-bar-right">
        <slot name="top-bar-right" />
      </div>
    </div>

    <aside class="base-frame__drawer">
      <slot name="drawer" />
    </aside>

    <main class="base-frame__page-wrapper">
      <slot name="page" />
    </main>
  </div>
</template>

<script>
export default {
  name: "BaseFrame",
  props: {
    hasTopBar: {
      type: Boolean,
      default: true,
    },
    hasDrawer: {
      type: Boolean,
      default: true,
    }
  },
  computed: {
    frameClasses() {
      return {
        "base-frame--has-top-bar": this.hasTopBar,
        "base-frame--has-drawer": this.drawer,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./styles/components/BaseFrame.scss";
</style>
