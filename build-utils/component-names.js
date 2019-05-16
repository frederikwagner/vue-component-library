const path = require('path')
const recursiveReaddirSync = require('./recursive-readdir-sync')

// Get all the .vue files in the src/components subdirectories
const componentFileNames = recursiveReaddirSync(
  path.resolve(__dirname, '../src/components')
)
  .filter(componentFileName => /\.vue$/.test(componentFileName))
  .map(componentFileName =>
    componentFileName
      // Remove extension from file name
      .replace(/\.\w+$/, '')
      // Remove path before file name
      .replace(/^.*(\\|\/|:)/, '')
  )

// Get the names of the components from the file names
module.exports = componentFileNames
