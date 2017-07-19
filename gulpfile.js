var gulp = require('gulp');
var shell = require('gulp-shell');
var unCSS = require('gulp-uncss');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin'); 
var mozjpeg  = require('imagemin-mozjpeg');

gulp.task('concat', function() {
    gulp.src(['src/assets/css/*.css'])
      .pipe(shell(['cat src/assets/css/*.css > src/assets/css/dev/main.min.css']));
});

gulp.task('css', function() {
    return gulp.src(['src/assets/css/dev/main.min.css'])
      .pipe(unCSS({html: ['*.html', 'blog/*.html', 'projects/*.html', '_layouts/*.html', '_includes/*.html']}))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(cleanCSS({level: '2'}))
      .pipe(gulp.dest('assets/css'));
});

gulp.task('img', function() {
    gulp.src(['src/assets/images/*.jpg'])
        .pipe(imagemin([mozjpeg({progressive: true, quality: 80})]))
        .pipe(imagemin({progressive: true}))
        .pipe(gulp.dest('assets/images'));
});

gulp.task('watch', function() {
    gulp.watch('src/assets/css/*.css', ['concat']);
    gulp.watch('src/assets/css/dev/*', ['css']);
    gulp.watch('src/assets/images/*', ['img']);
});