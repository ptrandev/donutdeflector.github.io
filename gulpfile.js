var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uncss = require('gulp-uncss');

gulp.task('css', function() {
    return gulp.src(['assets/css/*.css'])
      .pipe(uncss({html: ['*.html', 'contact/*.html', 'projects/*.html', 'projects/**/*.html']}))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(cleanCSS({level: '2'}))
      .pipe(gulp.dest('dist'));
});