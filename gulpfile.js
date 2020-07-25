const { src, dest, series, parallel } = require("gulp"),
  imagemin = require("gulp-imagemin"),
  imageminMozjpeg = require("imagemin-mozjpeg"),
  imageResize = require("gulp-image-resize"),
  rename = require("gulp-rename"),
  useref = require("gulp-useref"),
  terser = require("gulp-terser"),
  gulpIf = require("gulp-if"),
  cssnano = require("gulp-cssnano"),
  cache = require("gulp-cache");

const copy = () => {
  return src(["src/js/*.js"]).pipe(dest("dist/js"));
};
exports.copy = copy;
const images = () => {
  const sizes = [
    { width: 1536, quality: 30, suffix: "large" },
    { width: 768, quality: 30, suffix: "medium" },
    { width: 640, quality: 30, suffix: "small" },
  ];
  let stream;
  sizes.forEach((size) => {
    stream = src("./src/images/*.{jpeg,jpg,png}")
      .pipe(imageResize({ width: size.width }))
      .pipe(rename((path) => (path.basename += `-${size.suffix}`)))
      .pipe(
        cache(
          imagemin(
            [
              imageminMozjpeg({
                quality: size.quality,
              }),
            ],
            { verbose: true }
          )
        )
      )
      .pipe(dest("dist/images"));
  });
  return stream;
};

let minifier = () => {
  return (
    src("src/index.html")
      .pipe(useref())
      // Minifies only if it's a JavaScript file
      .pipe(gulpIf("*.js", terser()))
      // Minifies only if it's a CSS file
      .pipe(gulpIf("*.css", cssnano()))
      .pipe(dest("dist"))
  );
};

exports.minifier = minifier;
exports.images = images;

exports.default = parallel(images, minifier);
