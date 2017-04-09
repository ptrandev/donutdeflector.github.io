var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

gulp.task('css', function() {
  return gulp.src('assets/css/main.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(cleanCSS({level: '2'}))
    .pipe(gulp.dest('dist'));
});