<template>
  <div class="base-page__header">
    <base-breadcrumb breadcrumbs="breadcrumbs" />

    <base-stack
      class="base-page__header-title"
      distribution="equal-spacing"
      alignment="center"
    >
      <base-stack-item>
        <base-display-text
          element="h1"
          size="large"
        >
          <slot name="title">
            {{ title }}
          </slot>
        </base-display-text>
      </base-stack-item>

      <base-stack-item>
        <slot name="actions" />
      </base-stack-item>
    </base-stack>
  </div>
</template>

<script>
import BaseBreadcrumb from '../BaseBreadcrumb/BaseBreadcrumb'
import BaseDisplayText from '../BaseDisplayText/BaseDisplayText'
import BaseStack from '../BaseStack/BaseStack'
import BaseStackItem from '../BaseStackItem/BaseStackItem'

export default {
  name: 'BasePageHeader',
  components: {
    'base-breadcrumb': BaseBreadcrumb,
    'base-display-text': BaseDisplayText,
    'base-stack': BaseStack,
    'base-stack-item': BaseStackItem
  },
  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import './BasePageHeader.scss';
</style>
