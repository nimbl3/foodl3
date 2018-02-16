const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');
const sassGlob = require('gulp-sass-glob');
const combiner = require('stream-combiner2');
const sourceMap = require('gulp-sourcemaps');
const autoPreFixer = require('gulp-autoprefixer');

gulp.task('reload', () => {
  return gulp.src(['index.html', 'pages/**/*.html'])
    .pipe(connect.reload());
});

gulp.task('sass', () => {
  return combiner.obj([
    gulp.src('src/sass/**/*.scss'),
    sourceMap.init(),
    sassGlob(),
    sass({outputStyle: 'expanded'}),
    autoPreFixer(),
    sourceMap.write('.'),
    gulp.dest('assets/stylesheets')
  ]).on('error', console.error.bind(console));
});

gulp.task('watch:reload', () => {
  return gulp.watch([
    'index.html',
    'pages/**/*.html',
    'assets/stylesheets/application.css'
  ], ['reload']);
});

gulp.task('watch:sass', () => {
  return gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('watch', [
  'watch:reload',
  'watch:sass'
]);

gulp.task('serve', ['watch'], () => {
  return connect.server({
    root: __dirname,
    livereload: true
  });
});

gulp.task('default', ['serve']);
