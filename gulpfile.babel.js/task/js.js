import gulp from "gulp";

//Config
import path from "../config/path.js";
import app from "../config/app.js";

//Plugins
import webpack from "webpack-stream";
import loadPlugins from "gulp-load-plugins";
const gp = loadPlugins();

const js = () => {
    return gulp.src(path.js.src, {sourcemaps: app.isDev})
        .pipe(gp.plumber({
            errorHandler: gp.notify.onError(error => ({
                title: "JS",
                message: error.message
            }))
        }))
        .pipe(gp.babel())
        .pipe(webpack(app.webpack))
        .pipe(gulp.dest(path.js.dest, {sourcemaps: app.isDev}))
}

module.exports = js;