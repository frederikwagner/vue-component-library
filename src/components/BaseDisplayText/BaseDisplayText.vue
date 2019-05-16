<template>
  <component
    :is="element"
    :class="displayTextClasses"
    v-bind="$attrs"
    class="base-display-text"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseDisplayText',
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: function(value) {
        return ['small', 'medium', 'large', 'x-large'].includes(value)
      }
    },
    element: {
      type: String,
      default: 'p',
      validator: function(value) {
        return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'].includes(value)
      }
    }
  },
  computed: {
    // Dynamic classes
    displayTextClasses() {
      return {
        'base-display-text--size-small': this.size === 'small',
        'base-display-text--size-medium': this.size === 'medium',
        'base-display-text--size-large': this.size === 'large',
        'base-display-text--size-x-large': this.size === 'x-large'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './BaseDisplayText.scss';
</style>
