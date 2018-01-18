const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const connect = require('gulp-connect');

gulp.task('reload', function() {
  return gulp.src('./**/*.html')
    .pipe(connect.reload());
});

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./assets/stylesheet'));
});

gulp.task('watch:html', function() {
  return gulp.watch('./**/*.html', ['reload']);
});

gulp.task('watch:sass', function() {
  return gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('watch:css', function() {
  return gulp.watch('./assets/stylesheet/**/*.css', ['reload']);
});

gulp.task('watch', [
  'watch:html',
  'watch:sass',
  'watch:css'
]);

gulp.task('serve', ['watch'], function() {
  connect.server({
    root: __dirname,
    livereload: true
  });
});

gulp.task('default', ['serve']);
