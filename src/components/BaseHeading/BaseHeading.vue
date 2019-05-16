<template>
  <component
    :is="element"
    v-bind="$attrs"
    class="base-heading"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseHeading',
  inheritAttrs: false,
  props: {
    element: {
      type: String,
      default: 'h2',
      validator: function(value) {
        return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'].includes(value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './BaseHeading.scss';
</style>
