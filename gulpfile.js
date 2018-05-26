var gulp = require('gulp');
var concat = require('gulp-concat');
var unCSS = require('gulp-uncss');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var mozjpeg  = require('imagemin-mozjpeg');
var pngquant  = require('imagemin-pngquant');
var gm = require('gulp-gm');
var changed = require('gulp-changed');
var rename = require('gulp-rename');

gulp.task('css', function() {
  gulp.src(['src/assets/css/*.css'])
    .pipe(concat('main.min.css'))
    .pipe(unCSS({html: ['*.html', 'about/*.html', 'blog/*.html', 'blog/categories/*.html', 'projects/*.html', '_layouts/*.html', '_includes/*.html'], ignore: ['.progressive img.reveal']}))
    .pipe(cleanCSS({level: '2'}))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('js', function() {
  gulp.src(['src/assets/js/*.js'])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'));
});

gulp.task('img', function() {
  /* Anomolous */
  gulp.src('src/assets/images/*.{jpg,png}')
    .pipe(changed('assets/images'))
    .pipe(gm(function (gmfile) {return gmfile.resize(null, 2160).quality(100);}))
    .pipe(imagemin([mozjpeg({progressive: true, quality: 90})]))
    .pipe(imagemin([pngquant({quality: 0-90})]))
    .pipe(rename(function (path) { path.basename += "-2160"; }))
    .pipe(gulp.dest('assets/images'));

  gulp.src('src/assets/images/*.{jpg,png}')
    .pipe(changed('assets/images'))
    .pipe(gm(function (gmfile) {return gmfile.resize(null, 1440).quality(100);}))
    .pipe(imagemin([mozjpeg({progressive: true, quality: 90})]))
    .pipe(imagemin([pngquant({quality: 0-90})]))
    .pipe(rename(function (path) { path.basename += "-1440"; }))
    .pipe(gulp.dest('assets/images'));

  gulp.src('src/assets/images/*.{jpg,png}')
    .pipe(changed('assets/images'))
    .pipe(gm(function (gmfile) {return gmfile.resize(null, 1080).quality(100);}))
    .pipe(imagemin([mozjpeg({progressive: true, quality: 90})]))
    .pipe(imagemin([pngquant({quality: 0-90})]))
    .pipe(rename(function (path) { path.basename += "-1080"; }))
    .pipe(gulp.dest('assets/images'));

  gulp.src('src/assets/images/*.{jpg,png}')
    .pipe(changed('assets/images'))
    .pipe(gm(function (gmfile) {return gmfile.resize(null, 720).quality(100);}))
    .pipe(imagemin([mozjpeg({progressive: true, quality: 90})]))
    .pipe(imagemin([pngquant({quality: 0-90})]))
    .pipe(rename(function (path) { path.basename += "-720"; }))
    .pipe(gulp.dest('assets/images'));

  gulp.src('src/assets/images/*.{jpg,png}')
    .pipe(changed('assets/images'))
    .pipe(gm(function (gmfile) {return gmfile.resize(null, 480).quality(100);}))
    .pipe(imagemin([mozjpeg({progressive: true, quality: 90})]))
    .pipe(imagemin([pngquant({quality: 0-90})]))
    .pipe(rename(function (path) { path.basename += "-480"; }))
    .pipe(gulp.dest('assets/images'));

 gulp.src('src/assets/images/*.{jpg,png}')
    .pipe(changed('assets/images'))
    .pipe(gm(function (gmfile) {return gmfile.resize(16, null).quality(100);}))
    .pipe(imagemin([mozjpeg({progressive: true, quality: 90})]))
    .pipe(imagemin([pngquant({quality: 0-90})]))
    .pipe(rename(function (path) { path.basename += "-thumbnail"; }))
    .pipe(gulp.dest('assets/images'));

  /* Projects */
  gulp.src('src/assets/images/projects/*.{jpg,png}')
    .pipe(changed('assets/images/projects'))
    .pipe(gm(function (gmfile) {return gmfile.resize(null, 1080).quality(100);}))
    .pipe(imagemin([mozjpeg({progressive: true, quality: 90})]))
    .pipe(imagemin([pngquant({quality: 0-90})]))
    .pipe(rename(function (path) { path.basename += "-1080"; }))
    .pipe(gulp.dest('assets/images/projects'));

  gulp.src('src/assets/images/projects/*.{jpg,png}')
    .pipe(changed('assets/images/projects'))
    .pipe(gm(function (gmfile) {return gmfile.resize(null, 720).quality(100);}))
    .pipe(imagemin([mozjpeg({progressive: true, quality: 90})]))
    .pipe(imagemin([pngquant({quality: 0-90})]))
    .pipe(rename(function (path) { path.basename += "-720"; }))
    .pipe(gulp.dest('assets/images/projects'));

  gulp.src('src/assets/images/projects/*.{jpg,png}')
    .pipe(changed('assets/images/projects'))
    .pipe(gm(function (gmfile) {return gmfile.resize(null, 480).quality(100);}))
    .pipe(imagemin([mozjpeg({progressive: true, quality: 90})]))
    .pipe(imagemin([pngquant({quality: 0-90})]))
    .pipe(rename(function (path) { path.basename += "-480"; }))
    .pipe(gulp.dest('assets/images/projects'));

  gulp.src('src/assets/images/projects/*.{jpg,png}')
    .pipe(changed('assets/images/projects'))
    .pipe(gm(function (gmfile) {return gmfile.resize(null, 360).quality(100);}))
    .pipe(imagemin([mozjpeg({progressive: true, quality: 90})]))
    .pipe(imagemin([pngquant({quality: 0-90})]))
    .pipe(rename(function (path) { path.basename += "-360"; }))
    .pipe(gulp.dest('assets/images/projects'));

  gulp.src('src/assets/images/projects/*.{jpg,png}')
    .pipe(changed('assets/images/projects'))
    .pipe(gm(function (gmfile) {return gmfile.resize(16, null).quality(100);}))
    .pipe(imagemin([mozjpeg({progressive: true, quality: 90})]))
    .pipe(imagemin([pngquant({quality: 0-90})]))
    .pipe(rename(function (path) { path.basename += "-thumbnail"; }))
    .pipe(gulp.dest('assets/images/projects'));

  /* Posts*/
  gulp.src('src/assets/images/posts/*.{jpg,png}')
    .pipe(changed('assets/images/posts'))
    .pipe(gm(function (gmfile) {return gmfile.resize(null, 1080).quality(100);}))
    .pipe(imagemin([mozjpeg({progressive: true, quality: 90})]))
    .pipe(imagemin([pngquant({quality: 0-90})]))
    .pipe(rename(function (path) { path.basename += "-1080"; }))
    .pipe(gulp.dest('assets/images/posts'));

  gulp.src('src/assets/images/posts/*.{jpg,png}')
    .pipe(changed('assets/images/posts'))
    .pipe(gm(function (gmfile) {return gmfile.resize(null, 720).quality(100);}))
    .pipe(imagemin([mozjpeg({progressive: true, quality: 90})]))
    .pipe(imagemin([pngquant({quality: 0-90})]))
    .pipe(rename(function (path) { path.basename += "-720"; }))
    .pipe(gulp.dest('assets/images/posts'));

  gulp.src('src/assets/images/posts/*.{jpg,png}')
    .pipe(changed('assets/images/posts'))
    .pipe(gm(function (gmfile) {return gmfile.resize(null, 480).quality(100);}))
    .pipe(imagemin([mozjpeg({progressive: true, quality: 90})]))
    .pipe(imagemin([pngquant({quality: 0-90})]))
    .pipe(rename(function (path) { path.basename += "-480"; }))
    .pipe(gulp.dest('assets/images/posts'));

  gulp.src('src/assets/images/posts/*.{jpg,png}')
    .pipe(changed('assets/images/posts'))
    .pipe(gm(function (gmfile) {return gmfile.resize(null, 360).quality(100);}))
    .pipe(imagemin([mozjpeg({progressive: true, quality: 90})]))
    .pipe(imagemin([pngquant({quality: 0-90})]))
    .pipe(rename(function (path) { path.basename += "-360"; }))
    .pipe(gulp.dest('assets/images/posts'));

  gulp.src('src/assets/images/posts/*.{jpg,png}')
    .pipe(changed('assets/images/posts'))
    .pipe(gm(function (gmfile) {return gmfile.resize(16, null).quality(100);}))
    .pipe(imagemin([mozjpeg({progressive: true, quality: 90})]))
    .pipe(imagemin([pngquant({quality: 0-90})]))
    .pipe(rename(function (path) { path.basename += "-thumbnail"; }))
    .pipe(gulp.dest('assets/images/posts'));
});

gulp.task('watch', function() {
  gulp.watch('src/assets/css/*.css', ['css']);
  gulp.watch('src/assets/js/*.js', ['js']);
  gulp.watch('src/assets/images/*', ['img']);
  gulp.watch('src/assets/images/posts/*', ['img']);
  gulp.watch('src/assets/images/projects/*', ['img']);
});