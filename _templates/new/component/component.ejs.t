---
to: "src/<%= h.inflection.capitalize(h.components.prefix.toLowerCase()) + h.changeCase.pascal(name) %>.vue"
---
<template>
  <div class="<%= h.components.prefix.toLowerCase() + '-' + h.changeCase.snake(name).replace(/_/g, '-') %>" />
</template>

<script>
export default {
  name: "<%= h.inflection.capitalize(h.components.prefix.toLowerCase()) + h.changeCase.pascal(name) %>",
}
</script>

<style lang="scss" scoped>

$c: ".<%= h.components.prefix.toLowerCase() + '-' + h.changeCase.snake(name).replace(/_/g, '-') %>";

// #{$c} {}
</style>

<meta>
{
  "description": "A component that..."
}
</meta>

<example>
  <!-- No props or content are necessary. -->
  <<%= h.components.prefix.toLowerCase() + '-' + h.changeCase.snake(name).replace(/_/g, '-') %>></<%= h.components.prefix.toLowerCase() + '-' + h.changeCase.snake(name).replace(/_/g, '-') %>>
</example>
