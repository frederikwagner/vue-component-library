<template>
  <div
    class="base-layout__section"
    :class="layoutSectionClasses"
    :style="[isSticky && stickyOffset ? stickyStyles : {}]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseLayoutSection',
  props: {
    width: {
      section: String,
      default: '',
      validator: function(value) {
        return [
          '',
          'secondary',
          'full-width',
          'one-half',
          'one-third'
        ].includes(value)
      }
    },
    isSticky: {
      type: Boolean,
      default: false
    },
    stickyOffset: {
      type: [String, Number, null],
      default: null
    }
  },
  computed: {
    layoutSectionClasses() {
      return {
        'base-layout__section--secondary': this.width === 'secondary',
        'base-layout__section--full-width': this.width === 'full-width',
        'base-layout__section--one-half': this.width === 'one-half',
        'base-layout__section--one-third': this.width === 'one-third',
        'base-layout__section--is-sticky': this.isSticky
      }
    },
    stickyStyles() {
      return {
        top: `${this.stickyOffset.replace('px', '')}px`
      }
    }
  }
}
</script>

<style lang="scss">
@import './BaseLayoutSection.scss';
</style>
