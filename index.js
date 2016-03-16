'use strict'

var toArray = require('to-array')

module.exports = function orPipe () {
  var fns = toArray(arguments)

  return function runEscapePipe () {
    var result
    for (var i = 0; i < fns.length; i++) {
      result = fns[i].apply(null, arguments)
      if (result !== null && result !== undefined) break
    }
    return result
  }
}
