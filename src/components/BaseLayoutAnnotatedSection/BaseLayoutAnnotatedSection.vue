<template>
  <div class="base-layout__annotated-section">
    <div class="base-layout__annotation-wrapper">
      <div class="base-layout__annotation">
        <base-text-container>
          <base-heading>{{ title }}</base-heading>

          <div class="base-layout__annotation-description">
            <slot name="description" />
          </div>
        </base-text-container>
      </div>

      <div class="base-layout__annotation-content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeading from '../BaseHeading/BaseHeading'
import BaseTextContainer from '../BaseTextContainer/BaseTextContainer'

export default {
  name: 'BaseLayoutAnnotatedSection',
  components: {
    'base-heading': BaseHeading,
    'base-text-container': BaseTextContainer
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import './BaseLayoutAnnotatedSection.scss';
</style>
