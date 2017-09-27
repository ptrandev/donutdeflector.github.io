var gulp = require('gulp');
var shell = require('gulp-shell');
var stripCSSComments = require('gulp-strip-css-comments');
var unCSS = require('gulp-uncss');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var mozjpeg  = require('imagemin-mozjpeg');
var pngquant  = require('imagemin-pngquant');

gulp.task('concat', function() {
  gulp.src(['src/assets/css/*.css'])
    .pipe(shell(['cat src/assets/css/*.css > src/assets/css/dev/main.min.css']));
});

gulp.task('comments', function () {
  return gulp.src('src/assets/css/dev/*.css')
    .pipe(stripCSSComments({preserve: false}))
    .pipe(gulp.dest('src/assets/css/dev/comments'));
});

gulp.task('css', function() {
  gulp.src(['src/assets/css/dev/comments/main.min.css'])
    .pipe(unCSS({html: ['*.html', 'blog/*.html', 'projects/*.html', '_layouts/*.html', '_includes/*.html']}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(cleanCSS({level: '2'}))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('img', function() {
  gulp.src(['src/assets/images/*.png'])
    .pipe(imagemin([pngquant({quality: 0-72})]))
    .pipe(gulp.dest('assets/images'));

  gulp.src(['src/assets/images/*.jpg'])
    .pipe(imagemin([mozjpeg({progressive: true, quality: 80})]))
    .pipe(imagemin({progressive: true}))
    .pipe(gulp.dest('assets/images'));
});

gulp.task('watch', function() {
  gulp.watch('src/assets/css/*.css', ['concat']);
  gulp.watch('src/assets/css/dev/*', ['comments']);
  gulp.watch('src/assets/css/dev/comments/*', ['css']);
  gulp.watch('src/assets/images/*', ['img']);
});
