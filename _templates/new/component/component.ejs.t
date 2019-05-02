---
to: "src/<%= name %>.vue"
---
<template>
  <div />
</template>

<script>
export default {
  name: "<%= name %>",
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
  <!-- No props or content are necessary. -->
  <<%= name %>></<%= name %>>
</example>
