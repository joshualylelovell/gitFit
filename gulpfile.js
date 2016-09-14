var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat-js");

gulp.task("build", function () {
    return gulp.src(["public/**/*.{js,json}"])
        .pipe(sourcemaps.init())
          .pipe(concat({
              "target": "app.min.js", // Name to concatenate to
              "entry": "./app.js" // Entrypoint for the application, main module
                                   // The `./` part is important! The path is relative to
                                   // whatever gulp decides is the base-path, in this
                                   // example that is `./lib`
          }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("public/dist"));
});
