var exec = require('child_process').exec
var _ = require('lodash')
var Q = require('q')

exports.command = function (cmd, allowedErrors) {
  console.log('[SHELL] ' + cmd)

  if (_.isUndefined(allowedErrors)) {
    allowedErrors = []
  }
  allowedErrors = _.concat(allowedErrors, 0)

  return Q.Promise(function (resolve, reject, notify) {
    var child = exec(cmd, {
      maxBuffer: 10 * 10 * 1024
    }, function (error, stdout, stderr) {
      if (error) {
        if (_.includes(allowedErrors, error.code)) {
          resolve(error.code)
        } else {
          reject(error)
        }
      } else {
        resolve(stdout)
      }
    })
    child.stdout.on('data', function (data) {
      console.log(data)
    })
    child.stderr.on('data', function (data) {
      console.log(data)
    })
    child.on('close', function (code) {
      console.log('[SHELL] result = ' + code)
    })
  })
}
