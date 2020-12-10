const {src, dest, series} = require('gulp');
const imagemin = require('gulp-imagemin')

function htmlTask() {
  return src('src/*.html')
  .pipe(dest('dist'))
}

function stylesTask() {
  return src('src/*.css')
  .pipe(dest('dist'))
}

function scriptsTask() {
  return src('src/*.js')
  .pipe(dest('dist'))
}

function imagesTask() {
  return src('src/images/*')
  .pipe(imagemin())
  .pipe(dest('dist/images'))
}

exports.default = series(htmlTask, stylesTask, scriptsTask, imagesTask)