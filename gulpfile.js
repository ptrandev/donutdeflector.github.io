const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const uncss = require('uncss');
const postcss_uncss = require('postcss-uncss');
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const rename = require('gulp-rename');
const gm = require('gulp-gm');
const changed = require('gulp-changed');
const gulpif = require('gulp-if');

let source = null;
let dest = null;
let rootFolder = null;

gulp.task('css', done => {
  const html = [
    '*.html',
    'about/*.html',
    'blog/*.html',
    'blog/categories/*.html',
    'projects/*.html',
    '_layouts/*.html',
    '_includes/*.html'
  ]

  const ignore = [
    '.progressive img.reveal',
    '.entry img',
    'blockquote',
    'figure',
    'figcaption',
    '#markdown-toc',
    'p',
    'html.is-animating .transition-fade'
  ]

  const plugins = [
    postcss_uncss({
      html: html,
      ignore: ignore
    }),
    autoprefixer(),
    cssnano()
  ]

  gulp.src('src/assets/css/*.css')
    .pipe(concat('main.min.css'))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('assets/css'))
    
  done();
})

gulp.task('js', done => {
  gulp.src('src/assets/js/*.js')
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('assets/js'))
  done();
})

gulp.task('img', done => {
  gulpif(rootFolder, gulp.start('img-2160'));
  gulpif(rootFolder, gulp.start('img-1440'));
  gulp.start('img-1080');
  gulp.start('img-720');
  gulp.start('img-480');
  gulp.start('img-360');
  gulp.start('img-thumbnail');
  done();
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
    source = 'src/assets/images/*.{jpg,png}';
    dest = 'assets/images/';
    gulp.start('img');
  });
});
