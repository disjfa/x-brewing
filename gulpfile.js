const gulp = require("gulp");
const favicons = require("favicons").stream;
const log = require("fancy-log");

gulp.task("favicon", function () {
  return gulp.src("site/img/logo-black.png").pipe(favicons({
    appName: "X-Brewing",
    appDescription: "X-Brewing",
    developerName: "disjfa",
    developerURL: "http://disjfa.nl/",
    background: "#fff",
    theme_color: "#fff",
    path: "/icon/",
    url: "http://x-brewing.com/",
    display: "standalone",
    orientation: "any",
    start_url: "/?homescreen=1",
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
    .on("error", log)
    .pipe(gulp.dest("./site/icon"));
});
