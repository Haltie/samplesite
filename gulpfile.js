var gulp = require('gulp');
var pug = require('gulp-pug');
var riot = require('gulp-riot');
var concat = require('gulp-concat');

var layoutTarget = ['app/layout/index.pug'];
var tagtarget = ['./app/tags/*.pug', './app/tags/**/*.pug'];
var output = './public/scripts';

gulp.task('pug', function() {
  gulp
    .src(layoutTarget)
    .pipe(pug())
    .pipe(gulp.dest('public/'));
});

gulp.task('riot', function() {
  gulp
    .src(tagtarget)
    .pipe(riot({template: 'pug'}))
    .pipe(concat('tags.js'))
    .pipe(gulp.dest(output));
});

gulp.task('watch', function(){
  gulp.watch(tagtarget, ['riot']);
  gulp.watch(layoutTarget, ['pug']);
});

gulp.task('default', ['riot', 'pug', 'watch']);