---
to: "src/<%= h.inflection.capitalize(h.components.prefix.toLowerCase()) + h.changeCase.pascal(name) %>.unit.js"
---
import <%= h.inflection.capitalize(h.components.prefix.toLowerCase()) + h.changeCase.pascal(name) %> from './<%= h.inflection.capitalize(h.components.prefix.toLowerCase()) + h.changeCase.pascal(name) %>';

test('exports a valid component', () => {
  expect(<%= h.inflection.capitalize(h.components.prefix.toLowerCase()) + h.changeCase.pascal(name) %>).toBeAComponent()
})
