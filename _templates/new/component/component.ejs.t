---
to: "src/components/<%= h.components.toPascalCase(name) %>/<%= h.components.toPascalCase(name) %>.vue"
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
@import "./<%= h.components.toPascalCase(name) %>.scss";
</style>
