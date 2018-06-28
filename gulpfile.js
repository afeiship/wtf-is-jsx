var gulp = require('gulp');
var babel = require('gulp-babel');
var haml = require('gulp-haml');
var del = require('del');

var paths = {
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'build/js/'
  },
  haml: {
    src: 'src/**/*.haml',
    dest: 'build/'
  }
}

function clean() {
  return del([ 'build' ]);
}

function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(babel())
    .pipe(gulp.dest(paths.scripts.dest));
}

function pages() {
  return gulp.src(paths.haml.src)
    .pipe(haml())
    .pipe(gulp.dest(paths.haml.dest));
}

var build = gulp.series(clean, gulp.parallel(scripts, pages));

gulp.task('build', build);
gulp.task('default', build);
