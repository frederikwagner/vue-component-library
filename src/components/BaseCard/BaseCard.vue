<template>
  <div class="base-card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseCard'
}
</script>

<style lang="scss">
@import './BaseCard.scss';
</style>
