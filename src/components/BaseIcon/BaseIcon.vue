<template>
  <i
    :class="iconClasses"
    class="base-icon"
    v-on="$listeners"
  >
    {{ icon }}
  </i>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'medium',
      validator: function(value) {
        return ['small', 'medium', 'large'].includes(value)
      }
    },
    variation: {
      type: String,
      default: 'rounded',
      validator: function(value) {
        return ['filled', 'outlined', 'rounded', 'sharp'].includes(value)
      }
    }
  },
  computed: {
    iconClasses() {
      return {
        'base-icon--size-small': this.size === 'small',
        'base-icon--size-medium': this.size === 'medium',
        'base-icon--size-large': this.size === 'large',
        'base-icon--variation-outlined': this.variation === 'outlined',
        'base-icon--variation-rounded': this.variation === 'rounded',
        'base-icon--variation-sharp': this.variation === 'sharp'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './BaseIcon.scss';
</style>
