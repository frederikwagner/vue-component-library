<template>
  <p
    :class="textStyleClasses"
    class="base-text-style"
  >
    <slot />
  </p>
</template>

<script>
export default {
  name: 'BaseTextStyle',
  props: {
    variation: {
      type: String,
      default: '',
      validator: function(value) {
        return ['positive', 'negative', 'strong', 'subdued', 'code'].includes(
          value
        )
      }
    }
  },
  computed: {
    // Dynamic classes
    textStyleClasses() {
      return {
        'base-text-style--variation-positive': this.variation === 'positive',
        'base-text-style--variation-negative': this.variation === 'negative',
        'base-text-style--variation-strong': this.variation === 'strong',
        'base-text-style--variation-subdued': this.variation === 'subdued',
        'base-text-style--variation-code': this.variation === 'code'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './BaseTextStyle.scss';
</style>
