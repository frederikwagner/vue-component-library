<template>
  <button class="base-button">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
}
</script>

<style lang="scss" scoped>
$c: ".base-button";

#{$c} {
  height: 32px;
  border: 1px solid black;
  border-radius: 4px;
}
</style>

<meta>
{
  "description": "A component that..."
}
</meta>

<example>
  <base-button></base-button>
</example>
