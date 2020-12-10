const {src, dest, series} = require('gulp');
const imagemin = require('gulp-imagemin')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify-es').default

function htmlTask() {
  return src('src/*.html')
  .pipe(dest('dist'))
}

function stylesTask() {
  return src('src/*.css')
  .pipe(sourcemaps.init())
  .pipe(postcss([ autoprefixer(), cssnano()]))
  .pipe(sourcemaps.write())
  .pipe(concat('all.css'))
  .pipe(dest('dist/css'))
}

function scriptsTask() {
  return src('src/*.js')
  .pipe(uglify())
  .pipe(concat('all.js'))  
  .pipe(dest('dist'))
}

function imagesTask() {
  return src('src/images/*')
  .pipe(imagemin())
  .pipe(dest('dist/images'))
}

exports.default = series(htmlTask, stylesTask, scriptsTask, imagesTask)