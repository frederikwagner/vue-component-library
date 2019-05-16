<template>
  <div class="base-card__header">
    <base-heading>{{ title }}</base-heading>
  </div>
</template>

<script>
import BaseHeading from '../BaseHeading/BaseHeading'

export default {
  name: 'BaseCardHeader',
  components: {
    'base-heading': BaseHeading
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import './BaseCardHeader.scss';
</style>
