---
to: "src/components/<%= h.components.toPascalCase(name) %>/<%= h.components.toPascalCase(name) %>.unit.js"
---
import <%= h.components.toPascalCase(name) %> from './<%= h.components.toPascalCase(name) %>';

test('exports a valid component', () => {
  expect(<%= h.components.toPascalCase(name) %>).toBeAComponent()
})
