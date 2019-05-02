---
to: "src/<%= h.inflection.camelize(name) %>.vue"
---
<template>
  <div />
</template>

<script>
export default {
  name: "<%= h.inflection.camelize(name) %>",
}
</script>

<style lang="scss" scoped>
// Import global styles
// e.g. @import "@styles/...";
</style>

<meta>
{
  "description": "A component that..."
}
</meta>

<example>
</example>
