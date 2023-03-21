const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// função converter index.scss em index.css na pasta styles
function buildStyles() {
  return src("styles/index.scss").pipe(sass()).pipe(dest("styles"));
}

// vai assistir todas as pastas e arquivos que estão dentro de styles e executar novamente a função buildStyles
function watchTask() {
  watch(["styles/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
