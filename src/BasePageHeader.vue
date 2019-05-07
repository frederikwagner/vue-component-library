<template>
  <div class="base-page__header">
    <base-breadcrumb breadcrumbs="breadcrumbs" />
    <base-display-text
      class="base-page__header-title"
      element="h1"
      size="large"
    >
      <slot name="title" />{{ title }}
    </base-display-text>
  </div>
</template>

<script>
import BaseBreadcrumb from "./BaseBreadcrumb";
import BaseDisplayText from "./BaseDisplayText";

export default {
  name: "BasePageHeader",
  components: {
    "base-breadcrumb": BaseBreadcrumb,
    "base-display-text": BaseDisplayText,
  },
  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: "",
    },
  }
}
</script>

<style lang="scss" scoped>
@import "./styles/components/BasePageHeader.scss";
</style>
