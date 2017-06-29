var HubRegistry = require('gulp-hub')

var DEFAULT_OPTIONS = {
  gulp: null
}

function gulpBuildScripts (options) {
  options = Object.assign({}, DEFAULT_OPTIONS, options)

  if (options.gulp === null) {
    throw (new Error('gulp required'))
  }
  const gulp = options.gulp

  /* load some gulpfiles into the registry */
  var hub = new HubRegistry(['./modules/gulp/*.js'])

  /* tell gulp to use the tasks just loaded */
  gulp.registry(hub)
}

module.exports = gulpBuildScripts
