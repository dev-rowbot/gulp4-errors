var gulp = require('gulp')
var shell = require('../common/shell.js')

function lsCommand () {
  var cmd = 'ls -l'
  return shell.command(cmd)
}

function whichCommand () {
  var cmd = 'which badFileName'
  return shell.command(cmd)
}

function timeoutError (done) {
  setTimeout(function () {
    done('Timeout Error')
  }, 1000)
}

gulp.task('cmd-error', gulp.series(lsCommand, whichCommand))

gulp.task('timeout-error', gulp.series(lsCommand, timeoutError, whichCommand))
