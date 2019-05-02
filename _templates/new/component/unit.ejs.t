---
to: "src/<%= name %>.unit.js"
---
import <%= name %> from './<%= name %>';

test('exports a valid component', () => {
  expect(<%= name %>).toBeAComponent()
})
