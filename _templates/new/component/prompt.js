const componentsPrefix = require('../../../components.config.js').prefix

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Name:',
    validate(value) {
      if (!value.length) {
        return 'Components must have a name.'
      } else if (
        value.slice(0, componentsPrefix.length).toLowerCase() ===
        componentsPrefix
      ) {
        return `Duplicate prefix: '${componentsPrefix}'`
      }
      return true
    }
  }
]
