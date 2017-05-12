var gulp = require('gulp');
var shell = require('gulp-shell');
var unCSS = require('gulp-uncss');
var cleanCSS = require('gulp-clean-css');

gulp.task('concat', function() {
    gulp.src(['src/assets/css/*.css'])
      .pipe(shell(['cat src/assets/css/*.css > src/assets/css/dev/main.min.css']));
});

gulp.task('css', function() {
    return gulp.src(['src/assets/css/dev/main.min.css'])
      .pipe(unCSS({html: ['*.html', 'contact/*.html', 'projects/*.html', 'projects/**/*.html']}))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(cleanCSS({level: '2'}))
      .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function() {
    gulp.watch('src/assets/css/*.css', ['concat']);
    gulp.watch('src/assets/css/dev/*', ['css']);
});