const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const gulpEsbuild = require('gulp-esbuild');

const taskSass = () => gulp
  .src("./styles/index.scss")
  .pipe(sass())
  .pipe(gulp.dest("./dist"))

const taskScripts = () => gulp
  .src('./scripts/**/*.js')
  .pipe(gulpEsbuild({
    outfile: 'index.js',
    bundle: true,
  }))
  .pipe(gulp.dest('./dist'))

const tasksWatch = () => {
  gulp.watch(["./styles/**/*.scss"], taskSass)
  gulp.watch('./scripts/**/*.js', taskScripts)
}

exports.default = gulp.series(taskSass, taskScripts, tasksWatch);