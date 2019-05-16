<template>
  <!-- One column -->
  <div
    v-if="layout === 'one-column'"
    class="base-layout"
  >
    <base-layout-section>
      <slot />
    </base-layout-section>
  </div>

  <!-- Two columns 1:1 -->
  <div
    v-else-if="layout === 'two-columns-1-1'"
    class="base-layout"
  >
    <base-layout-section width="one-half">
      <slot name="section-one" />
    </base-layout-section>

    <base-layout-section width="one-half">
      <slot name="section-two" />
    </base-layout-section>
  </div>

  <!-- Two columns 2:1 -->
  <div
    v-else-if="layout === 'two-columns-2-1'"
    class="base-layout"
  >
    <base-layout-section>
      <slot name="section-one" />
    </base-layout-section>

    <base-layout-section width="secondary">
      <slot name="section-two" />
    </base-layout-section>
  </div>

  <!-- Two columns 2:1 sticky-->
  <div
    v-else-if="layout === 'two-columns-2-1-sticky'"
    class="base-layout"
  >
    <base-layout-section>
      <slot name="section-one" />
    </base-layout-section>

    <base-layout-section
      is-sticky
      width="secondary"
    >
      <slot name="section-two" />
    </base-layout-section>
  </div>

  <!-- Three columns -->
  <div
    v-else-if="layout === 'three-columns'"
    class="base-layout"
  >
    <base-layout-section width="one-third">
      <slot name="section-one" />
    </base-layout-section>

    <base-layout-section width="one-third">
      <slot name="section-two" />
    </base-layout-section>

    <base-layout-section width="one-third">
      <slot name="section-three" />
    </base-layout-section>
  </div>

  <!-- Default -->
  <div
    v-else
    class="base-layout"
  >
    <slot />
  </div>
</template>

<script>
import BaseLayoutSection from '../BaseLayoutSection/BaseLayoutSection'

export default {
  name: 'BaseLayout',
  components: {
    'base-layout-section': BaseLayoutSection
  },
  props: {
    layout: {
      type: String,
      default: '',
      validator: function(value) {
        return [
          '',
          'one-column',
          'two-columns-1-1',
          'two-columns-2-1',
          'two-columns-2-1-sticky',
          'three-columns',
          'annotated'
        ].includes(value)
      }
    }
  }
}
</script>

<style lang="scss">
@import './BaseLayout.scss';
</style>
