<template>
  <div
    class="base-stack__item"
    :class="stackItemClasses"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseStackItem',
  props: {
    fill: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    stackItemClasses() {
      return {
        'base-stack__item--fill': this.fill
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './BaseStackItem.scss';
</style>
