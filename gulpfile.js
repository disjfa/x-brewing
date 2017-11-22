const gulp = require("gulp");
const favicons = require("gulp-favicons");
const gutil = require("gulp-util");

gulp.task("favicon", function () {
  return gulp.src("img/logo.png").pipe(favicons({
    appName: "X-Brewing",
    appDescription: "X-Brewing",
    developerName: "disjfa",
    developerURL: "http://disjfa.nl/",
    background: "#020307",
    path: "/x-brewing/icon/",
    url: "http://x-brewing.com/",
    display: "standalone",
    orientation: "portrait",
    start_url: "/x-brewing/?homescreen=1",
    version: 1.0,
    logging: false,
    online: false,
    html: "index.html",
    pipeHTML: true,
    replace: true,
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: true,
      coast: { offset: 25 },
      favicons: true,
      firefox: true,
      windows: true,
      yandex: true
    },
  }))
    .on("error", gutil.log)
    .pipe(gulp.dest("./icon"));
});
