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
  name: "BaseIcon",
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "medium",
      validator: function(value) {
        return ["small", "medium", "large"].includes(value)
      }
    }
  },
  computed: {
    iconClasses() {
      return {
        "base-icon--size-small": this.size === "small",
        "base-icon--size-medium": this.size === "medium",
        "base-icon--size-large": this.size === "large"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./styles/components/BaseIcon.scss";
</style>
