var gulp = require("gulp");
var babel = require("gulp-babel");
var del = require("del");

var paths = {
  scripts: {
    src: "src/js/**/*.js",
    dest: "dist/js/",
  },
};

function clean() {
  return del(["dist"]);
}

function scripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(babel())
    .pipe(gulp.dest(paths.scripts.dest));
}

function pages() {
  return gulp.src("src/index.html").pipe(gulp.dest("dist"));
}

var build = gulp.series(clean, gulp.parallel(scripts, pages));

gulp.task("build", build);
gulp.task("default", build);
