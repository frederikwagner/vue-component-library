---
to: "src/<%= 'Base' + h.changeCase.pascal(name) %>.vue"
---
<template>
  <div />
</template>

<script>
export default {
  name: "<%= 'Base' + h.changeCase.pascal(name) %>",
}
</script>

<style lang="scss" scoped>

$c: ".<%= 'base-' + h.changeCase.snake(name).replace(/_/g, '-') %>";

// #{$c} {}
</style>

<meta>
{
  "description": "A component that..."
}
</meta>

<example>
  <!-- No props or content are necessary. -->
  <<%= 'base-' + h.changeCase.snake(name).replace(/_/g, '-') %>></<%= 'base-' + h.changeCase.snake(name).replace(/_/g, '-') %>>
</example>
