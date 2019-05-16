const fs = require('fs')
const p = require('path')

const recursiveReaddirSync = path => {
  let list = []
  let files = fs.readdirSync(path)

  files.forEach(file => {
    let stats = fs.lstatSync(p.join(path, file))

    if (stats.isDirectory()) {
      list = list.concat(recursiveReaddirSync(p.join(path, file)))
    } else {
      list.push(p.join(path, file))
    }
  })

  return list
}

module.exports = recursiveReaddirSync
