<template>
  <div
    v-bind="$attrs"
    class="base-card__section"
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
import BaseSubheading from "./BaseSubheading";

export default {
  name: "BaseCardSection",
  components: {
    "base-subheading": BaseSubheading,
  },
  props: {
    title: {
      type: String,
      default: "",
    }
  }
}
</script>

<style lang="scss">
@import "./styles/components/BaseCardSection.scss";
</style>
