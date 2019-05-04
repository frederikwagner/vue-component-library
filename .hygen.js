const changeCase = require("change-case");
const componentsConfig = require("./components.config.js");

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const componentPrefix = componentsConfig.prefix.toLowerCase();

module.exports = {
  helpers: {
    components: {
      prefix: componentPrefix,
      toKebabCase: name => componentPrefix + "-" + changeCase.snake(name).replace(/_/g, '-'),
      toPascalCase: name =>
        capitalize(componentPrefix) + changeCase.pascal(name),
    },
  }
}
