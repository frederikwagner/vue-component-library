<template>
  <div
    v-bind="$attrs"
    class="base-card__section"
    :class="cardSectionClasses"
    v-on="$listeners"
  >
    <div
      v-if="title"
      class="base-card__section-header"
    >
      <base-subheading
        :aria-label="title"
        element="h3"
      >
        {{ title }}
      </base-subheading>
    </div>

    <slot />
  </div>
</template>

<script>
import BaseSubheading from '../BaseSubheading/BaseSubheading'

export default {
  name: 'BaseCardSection',
  components: {
    'base-subheading': BaseSubheading
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    variation: {
      type: String,
      default: '',
      validator: function(value) {
        return ['', 'subdued'].includes(value)
      }
    }
  },
  computed: {
    cardSectionClasses() {
      return {
        'base-card__section--subdued': this.variation === 'subdued'
      }
    }
  }
}
</script>

<style lang="scss">
@import './BaseCardSection.scss';
</style>
