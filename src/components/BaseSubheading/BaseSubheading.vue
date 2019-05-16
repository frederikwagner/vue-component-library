<template>
  <component
    :is="element"
    v-bind="$attrs"
    class="base-subheading"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseSubheading',
  inheritAttrs: false,
  props: {
    element: {
      type: String,
      default: 'h3',
      validator: function(value) {
        return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'].includes(value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './BaseSubheading.scss';
</style>
