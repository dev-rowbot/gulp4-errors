var gulp = require('gulp')

require('../')({gulp: gulp})
var shell = require('../modules/common/shell.js')

function lsCommand () {
  var cmd = 'ls -l'
  return shell.command(cmd)
}

function whichCommand () {
  var cmd = 'which badFileName'
  return shell.command(cmd)
}

gulp.task('cmd-error-non-hub', gulp.series(lsCommand, whichCommand))
