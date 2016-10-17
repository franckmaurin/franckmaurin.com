/* eslint-disable */
var Promise = require('bluebird')
var fs = Promise.promisifyAll(require('fs'))
var path = require('path')
var YAML = require('yamljs')
var dirContent = './src/content'
var build = []

getAllYML(dirContent)
  .each(concatIntoJSON)
  .then(ordernize)
  .then(save)
  .then(success)

function getAllYML(dirName) {
  return fs.readdirAsync(dirName)
    .map(getFile)
    .reduce(concatFiles, [])

  function getFile(fileName) {
    var filePath = path.join(dirName, fileName)

    return fs.statAsync(filePath)
      .then(checkIfYML)

    function checkIfYML(stat) {
      if (stat.isDirectory())
        return getAllYML(filePath)

      if (filePath.slice(-4) !== '.yml')
        return false

      return filePath
    }
  }

  function concatFiles(a, b) {
    if (!b)
      b = []

    return a.concat(b)
  }
}

function concatIntoJSON(fileName) {
  build.push(YAML.load(fileName))
}

function ordernize() {
  // order by priority
  // build = _.sortBy(build, function(obj) {
  //   return obj.priority
  // })
  // build.reverse()
  return build
}

function save(build) {
  return fs.writeFileAsync(dirContent + '/build.json', JSON.stringify(build))
}

function success() {
  console.log(dirContent + '/build.json saved')
}
