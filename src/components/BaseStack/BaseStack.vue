<template>
  <div
    class="base-stack"
    :class="stackClasses"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseStack',
  props: {
    noWrap: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: '',
      validator: function(value) {
        return ['', 'horizontal', 'vertical']
      }
    },
    spacing: {
      type: String,
      default: '',
      validator: function(value) {
        return [
          '',
          'none',
          'extra-tight',
          'tight',
          'loose',
          'extra-loose'
        ].includes(value)
      }
    },
    distribution: {
      type: String,
      default: '',
      validator: function(value) {
        return [
          '',
          'leading',
          'trailing',
          'center',
          'equal-spacing',
          'fill',
          'fill-evenly'
        ].includes(value)
      }
    },
    alignment: {
      type: String,
      default: '',
      validator: function(value) {
        return ['leading', 'trailing', 'center', 'fill', 'baseline']
      }
    }
  },
  computed: {
    stackClasses() {
      return {
        'base-stack--no-wrap': this.noWrap,
        'base-stack--direction-vertical': this.direction === 'vertical',
        'base-stack--spacing-none': this.spacing === 'none',
        'base-stack--spacing-extra-tight': this.spacing === 'extra-tight',
        'base-stack--spacing-tight': this.spacing === 'tight',
        'base-stack--spacing-loose': this.spacing === 'loose',
        'base-stack--spacing-extra-loose': this.spacing === 'extra-loose',
        'base-stack--distribution-leading': this.distribution === 'leading',
        'base-stack--distribution-trailing': this.distribution === 'trailing',
        'base-stack--distribution-center': this.distribution === 'center',
        'base-stack--distribution-equal-spacing':
          this.distribution === 'equal-spacing',
        'base-stack--distribution-fill': this.distribution === 'fill',
        'base-stack--distribution-fill-evenly':
          this.distribution === 'fill-evenly',
        'base-stack--alignment-leading': this.alignment === 'leading',
        'base-stack--alignment-trailing': this.alignment === 'trailing',
        'base-stack--alignment-center': this.alignment === 'center',
        'base-stack--alignment-fill': this.alignment === 'fill',
        'base-stack--alignment-baseline': this.alignment === 'baseline'
      }
    }
  }
}
</script>

<style lang="scss">
@import './BaseStack.scss';
</style>
