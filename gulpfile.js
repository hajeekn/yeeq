var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var workbox = require("workbox-build");
// babel
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

gulp.task('generate-service-worker', () => {
  return workbox.injectManifest({
    swSrc: './sw-template.js',
    swDest: './public/sw.js',
    globDirectory: './public',
    globPatterns: [
        "**/*.{html,css,js,json,woff2}"
    ],
    modifyURLPrefix: {
        "": "./"
    }
  });
});

// 执行 gulp 命令时执行的任务
gulp.task("default", gulp.series("generate-service-worker", gulp.parallel(
    'minify-images'
)));
