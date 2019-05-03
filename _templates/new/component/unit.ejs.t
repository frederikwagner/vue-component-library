---
to: "src/<%= 'Base' + h.changeCase.pascal(name) %>.unit.js"
---
import <%= 'Base' + h.changeCase.pascal(name) %> from './<%= 'Base' + h.changeCase.pascal(name) %>';

test('exports a valid component', () => {
  expect(<%= 'Base' + h.changeCase.pascal(name) %>).toBeAComponent()
})
