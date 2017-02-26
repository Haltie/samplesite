var gulp = require('gulp');
var pug = require('gulp-pug');
var riot = require('gulp-riot');
var concat = require('gulp-concat');

var target = ['./app/tags/*.pug', './app/tags/**/*.pug'];
var output = './public/scripts';

gulp.task('pug', function() {
  gulp
  .src('app/layout/index.pug')
  .pipe(pug())
  .pipe(gulp.dest('public/'));
});

gulp.task('riot', function() {
  gulp
    .src(target)
    .pipe(riot({template: 'pug'}))
    .pipe(concat('tags.js'))
    .pipe(gulp.dest(output))
    ;
});

gulp.task('watch', function(){
  gulp.watch(target, ['riot']);
});

gulp.task('default', ['riot', 'pug']);