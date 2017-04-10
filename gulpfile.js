var gulp = require('gulp');
var shell = require('gulp-shell');
var unCSS = require('gulp-uncss');
var cleanCSS = require('gulp-clean-css');

gulp.task('concat', function() {
    gulp.src(['assets/css/source/*.css'])
      .pipe(shell(['cat assets/css/source/*.css > assets/css/source/development/main.min.css']));
});

gulp.task('css', function() {
    return gulp.src(['assets/css/source/development/main.min.css'])
      .pipe(unCSS({html: ['*.html', 'contact/*.html', 'projects/*.html', 'projects/**/*.html']}))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(cleanCSS({level: '2'}))
      .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function() {
    gulp.watch('assets/css/source/*.css', ['concat']);
    gulp.watch('assets/css/source/development/*', ['css']);
});