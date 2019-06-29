// Dependencias
var    gulp = require('gulp'),
     concat = require('gulp-concat'),
     uglify = require('gulp-uglify'),
  minifycss = require('gulp-minify-css'),
  babel = require('gulp-babel')
  ;

// Tarea 1 llamada minify-js
gulp.task('minify-js', function () {
  gulp.src(['js/*/*.js','js/*.js'])
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(concat('app.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/'))
});

// Tarea 2 llamada minify-css
gulp.task('minify-css', function () {
  gulp.src('source/*.css')
  .pipe(concat('application.css'))
  .pipe(minifycss())
  .pipe(gulp.dest('build/'))
});