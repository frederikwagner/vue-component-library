---
to: "src/<%= h.components.toPascalCase(name) %>.vue"
---
<template>
  <div class="<%= h.components.toKebabCase(name) %>" />
</template>

<script>
export default {
  name: "<%= h.components.toPascalCase(name) %>",
}
</script>

<style lang="scss" scoped>

$c: ".<%= h.components.toKebabCase(name) %>";

// #{$c} {}
</style>
