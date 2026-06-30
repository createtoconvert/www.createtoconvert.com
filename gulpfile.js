/* global Buffer */

var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

function minifyCss() {
  return gulp.src(['css/stylesheet.css'])
    .pipe(cleanCss())
    .pipe(concat('stylesheet.min.css'))
    .pipe(gulp.dest('css'));
}

function minifyJavaScript() {
  return gulp.src(['javascript/javascript.js'])
    .pipe(concat('javascript.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('javascript'));
}

gulp.task('default', gulp.series(
  minifyCss,
  minifyJavaScript
));
