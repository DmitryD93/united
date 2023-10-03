const { src, dest, watch, parallel, series } = require("gulp");
const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const del = require("del");
const browserSync = require("browser-sync").create();
const svgSprite = require("gulp-svg-sprite");
const htmlmin = require("gulp-htmlmin");
const strip = require("gulp-strip-comments");
const cheerio = require("gulp-cheerio");
const replace = require("gulp-replace");
const fileinclude = require("gulp-file-include");
// const imagemin = require('gulp-imagemin');

function browsersync() {
  browserSync.init({
    server: { baseDir: "app/" },
    notify: false,
  });
}

function styles() {
  return src([
    "node_modules/swiper/swiper-bundle.min.css",
    "src/scss/style.scss",
  ])
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(concat("style.min.css"))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 5 versions"],
        grid: true,
      })
    )
    .pipe(dest("app/css"))
    .pipe(browserSync.stream());
}

function scripts() {
  return src(["node_modules/swiper/swiper-bundle.min.js", "src/js/main.js"])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("app/js"))
    .pipe(browserSync.stream());
}

function html() {
  return (
    src(["src/*.html"])
      .pipe(fileinclude())
      .pipe(replace("../", ""))
      .pipe(strip())
      // .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(dest("app"))
      .pipe(browserSync.stream())
  );
}

function font() {
  return src(["src/fonts/*.*"])
    .pipe(dest("app/fonts"))
    .pipe(browserSync.stream());
}

function images() {
  return src("src/img/**/*.*").pipe(dest("app/img")).pipe(browserSync.stream());
}

function svgSprites() {
  return src("src/img/icons/*.svg")
    .pipe(
      cheerio({
        run: ($) => {
          $("[fill]").removeAttr("fill");
          $("[stroke]").removeAttr("stroke");
          $("[style]").removeAttr("style");
        },
        parserOptions: { xmlMode: true },
      })
    )
    .pipe(replace("&gt;", ">"))
    .pipe(svgSprite({ mode: { stack: { sprite: "../sprite-frontend.svg" } } }))
    .pipe(dest("src/img"));
}

function build() {
  return src(
    [
      "src/**/*.html",
      "src/css/style.min.css",
      "src/js/main.min.js",
      "src/img/**/*.*",
    ],
    {
      base: "src",
    }
  ).pipe(dest("app"));
}

function cleanapp() {
  return del("app");
}

function watching() {
  watch(["src/**/*.scss"], styles);
  watch(["src/modules/**/*.scss"], styles);
  watch(["src/**/*.html"], html);
  watch([
    "src/img/**/**/**/*.jpg",
    "src/img/**/**/**/*.jpeg",
    "src/img/**/**/**/*.png",
  ]);
  watch(["src/img/**/**/**/*.*"], images);
  watch(["src/js/**/*.js", "!src/js/main.min.js"], scripts);
  watch(["src/img/sprites/*.svg"], svgSprites);
}

exports.styles = styles;
exports.html = html;
exports.svgSprites = svgSprites;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.font = font;
exports.cleanapp = cleanapp;
exports.build = series(cleanapp, images, build, font);

exports.default = parallel(
  html,
  font,
  images,
  svgSprites,
  styles,
  scripts,
  browsersync,
  watching
);
