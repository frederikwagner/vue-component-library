<template>
  <button
    :class="buttonClasses"
    v-bind="$attrs"
    :aria-label="accessibilityLabel"
    class="base-button"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    accessibilityLabel: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium',
      validator: function(value) {
        return ['extra-small', 'small', 'medium', 'large'].includes(value)
      }
    },
    shape: {
      type: String,
      default: 'rectangle',
      validator: function(value) {
        return ['rectangle', 'square', 'circle'].includes(value)
      }
    },
    type: {
      type: String,
      default: 'basic',
      validator: function(value) {
        return ['basic', 'primary', 'success', 'warning', 'danger', 'help']
      }
    },
    variation: {
      type: String,
      default: 'plain',
      validator: function(value) {
        return ['plain', 'subtle', 'inverted'].includes(value)
      }
    },
    cap: {
      type: [String, Array],
      default: '',
      validator: function(value) {
        const validTypes = [
          '',
          'top',
          'right',
          'bottom',
          'left',
          'top-left',
          'top-right',
          'bottom-right',
          'bottom-left'
        ]

        if (Array.isArray(value)) {
          return value.some(type => validTypes.includes(type))
        } else {
          return validTypes.includes(value)
        }
      }
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClasses() {
      return {
        'base-button--type-basic': this.type === 'basic' || this.type === '',
        'base-button--type-primary': this.type === 'primary',
        'base-button--type-success': this.type === 'success',
        'base-button--type-warning': this.type === 'warning',
        'base-button--type-danger': this.type === 'danger',
        'base-button--type-help': this.type === 'help',
        'base-button--size-extra-small': this.size === 'extra-small',
        'base-button--size-small': this.size === 'small',
        'base-button--size-medium': this.size === 'medium',
        'base-button--size-large': this.size === 'large',
        'base-button--shape-square': this.shape === 'square',
        'base-button--shape-circle': this.shape === 'circle'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './BaseButton.scss';
</style>
