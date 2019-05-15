<template>
  <div
    v-click-outside="closeOnBlur ? closePopover : () => {}"
    class="base-popover"
  >
    <slot
      :openPopover="openPopover"
      :closePopover="closePopover"
      :togglePopover="togglePopover"
      name="trigger"
    />

    <div
      :class="popoverControlClasses"
      class="base-popover__control"
    >
      <transition name="scale">
        <base-card
          v-if="popoverIsVisible"
          :style="{ 'max-height': maxHeight }"
          :class="popoverCardClasses"
          class="base-popover__card"
        >
          <slot
            :closePopover="closePopover"
            name="popover"
          />
        </base-card>
      </transition>
    </div>
  </div>
</template>

<script>
import BaseCard from "./BaseCard";

export default {
  name: "BasePopover",
  components: {
    "base-card": BaseCard
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    closeOnBlur: {
      type: Boolean,
      default: true
    },
    alignment: {
      type: String,
      default: "bottom left",
      validator: function(value) {
        return [
          "",
          "top left",
          "top center",
          "top right",
          "right top",
          "right center",
          "right bottom",
          "bottom right",
          "bottom center",
          "bottom left",
          "left bottom",
          "left center",
          "left top",
          "custom",
          "auto"
        ].includes(value);
      }
    },
    maxHeight: {
      type: String,
      default: "320px"
    },
    padding: {
      type: String,
      default: "none",
      validator: function(value) {
        return [
          "",
          "none",
          "extra-tight",
          "tight",
          "base-tight",
          "base",
          "loose",
          "extra-loose"
        ].includes(value);
      }
    }
  },
  data() {
    return {
      popoverIsVisible: this.isVisible
    };
  },
  computed: {
    popoverControlClasses() {
      return {
        "base-popover__control--align-top-left": this.alignment === "top left",
        "base-popover__control--align-top-center": this.alignment === "top center",
        "base-popover__control--align-top-right": this.alignment === "top right",
        "base-popover__control--align-right-top": this.alignment === "right top",
        "base-popover__control--align-right-center":
          this.alignment === "right center",
        "base-popover__control--align-right-bottom":
          this.alignment === "right bottom",
        "base-popover__control--align-bottom-left":
          this.alignment === "bottom left" || !this.alignment,
        "base-popover__control--align-bottom-center":
          this.alignment === "bottom center",
        "base-popover__control--align-bottom-right":
          this.alignment === "bottom right",
        "base-popover__control--align-left-top": this.alignment === "left top",
        "base-popover__control--align-left-center":
          this.alignment === "left center",
        "base-popover__control--align-left-bottom":
          this.alignment === "left bottom",
      };
    },
    popoverCardClasses() {
      return {
        "base-popover__container--padding-none": this.padding === "none" || !this.padding,
        "base-popover__container--padding-extra-tight": this.padding === "extra-tight",
        "base-popover__container--padding-tight": this.padding === "tight",
        "base-popover__container--padding-base-tight": this.padding === "base-tight",
        "base-popover__container--padding-base": this.padding === "base",
        "base-popover__container--padding-loose": this.padding === "loose",
        "base-popover__container--padding-extra-loose": this.padding === "extra-loose"
      }
    }
  },
  methods: {
    openPopover() {
      this.popoverIsVisible = true;
    },
    closePopover() {
      this.popoverIsVisible = false;
    },
    togglePopover() {
      this.popoverIsVisible = !this.popoverIsVisible;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./styles/components/BasePopover.scss";
</style>
