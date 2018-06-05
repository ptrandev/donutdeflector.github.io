var gulp = require('gulp');
var concat = require('gulp-concat');
var unCSS = require('gulp-uncss');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var mozjpeg  = require('imagemin-mozjpeg');
var pngquant  = require('imagemin-pngquant');
var gm = require('gulp-gm');
var rename = require('gulp-rename');
var changed = require('gulp-changed');
var gulpif = require('gulp-if');

var source = null;
var dest = null;
var rootFolder = null;

gulp.task('css', function() {
  gulp.src(['src/assets/css/*.css'])
    .pipe(concat('main.min.css'))
    .pipe(unCSS({html: ['*.html', 'about/*.html', 'blog/*.html', 'blog/categories/*.html', 'projects/*.html', '_layouts/*.html', '_includes/*.html'], ignore: ['.progressive img.reveal', '.entry img', 'blockquote', 'figure', 'figcaption', '#markdown-toc']}))
    .pipe(cleanCSS({level: '2'}))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('js', function() {
  gulp.src(['src/assets/js/*.js'])
    .pipe(concat('main.min.js'))
    .pipe(uglify(''))
    .pipe(gulp.dest('assets/js'));
});

gulp.task('img', function() {
  gulpif(rootFolder, gulp.start('img-2160'));
  gulpif(rootFolder, gulp.start('img-1440'));
  gulp.start('img-1080');
  gulp.start('img-720');
  gulp.start('img-480');
  gulp.start('img-360');
  gulp.start('img-thumbnail');
});

gulp.task('img-2160', function() {
  gulp.src(source)
    .pipe(rename(function (path) { path.basename += "-2160"; }))
    .pipe(changed(dest))
    .pipe(gm(function (gmfile) {return gmfile.resize(null, 1080).quality(100);}))
    .pipe(imagemin([mozjpeg({progressive: true, quality: 90})]))
    .pipe(imagemin([pngquant({quality: 0-90})]))
    .pipe(gulp.dest(dest));
});

gulp.task('img-1440', function() {
  gulp.src(source)
    .pipe(rename(function (path) { path.basename += "-1440"; }))
    .pipe(changed(dest))
    .pipe(gm(function (gmfile) {return gmfile.resize(null, 1080).quality(100);}))
    .pipe(imagemin([mozjpeg({progressive: true, quality: 90})]))
    .pipe(imagemin([pngquant({quality: 0-90})]))
    .pipe(gulp.dest(dest));
});

gulp.task('img-1080', function() {
  gulp.src(source)
    .pipe(rename(function (path) { path.basename += "-1080"; }))
    .pipe(changed(dest))
    .pipe(gm(function (gmfile) {return gmfile.resize(null, 1080).quality(100);}))
    .pipe(imagemin([mozjpeg({progressive: true, quality: 90})]))
    .pipe(imagemin([pngquant({quality: 0-90})]))
    .pipe(gulp.dest(dest));
});

gulp.task('img-720', function() {
  gulp.src(source)
    .pipe(rename(function (path) { path.basename += "-720"; }))
    .pipe(changed(dest))
    .pipe(gm(function (gmfile) {return gmfile.resize(null, 720).quality(100);}))
    .pipe(imagemin([mozjpeg({progressive: true, quality: 90})]))
    .pipe(imagemin([pngquant({quality: 0-90})]))
    .pipe(gulp.dest(dest));
});

gulp.task('img-480', function() {
  gulp.src(source)
    .pipe(rename(function (path) { path.basename += "-480"; }))
    .pipe(changed(dest))
    .pipe(gm(function (gmfile) {return gmfile.resize(null, 480).quality(100);}))
    .pipe(imagemin([mozjpeg({progressive: true, quality: 90})]))
    .pipe(imagemin([pngquant({quality: 0-90})]))
    .pipe(gulp.dest(dest));
});

gulp.task('img-360', function() {
  gulp.src(source)
    .pipe(rename(function (path) { path.basename += "-360"; }))
    .pipe(changed(dest))
    .pipe(gm(function (gmfile) {return gmfile.resize(null, 360).quality(100);}))
    .pipe(imagemin([mozjpeg({progressive: true, quality: 90})]))
    .pipe(imagemin([pngquant({quality: 0-90})]))
    .pipe(gulp.dest(dest));
});

gulp.task('img-thumbnail', function() {
  gulp.src(source)
    .pipe(rename(function (path) { path.basename += "-thumbnail"; }))
    .pipe(changed(dest))
    .pipe(gm(function (gmfile) {return gmfile.resize(16, null).quality(100);}))
    .pipe(imagemin([mozjpeg({progressive: true, quality: 90})]))
    .pipe(imagemin([pngquant({quality: 0-90})]))
    .pipe(gulp.dest(dest));
});

gulp.task('watch', function() {
  gulp.watch('src/assets/css/*.css', ['css']);
  gulp.watch('src/assets/js/*.js', ['js']);
  gulp.watch('src/assets/images/*', function() {
    source = 'src/assets/images/*.{jpg,png}'
    dest = 'assets/images/'
    rootFolder = true;
    gulp.start('img');
  });
  gulp.watch('src/assets/images/posts/*', function() {
    source = 'src/assets/images/posts/*.{jpg,png}'
    dest = 'assets/images/posts'
    gulp.start('img');
  });
  gulp.watch('src/assets/images/projects/*', function() {
    source = 'src/assets/images/projects/*.{jpg,png}'
    dest = 'assets/images/projects'
    gulp.start('img');
  });
});