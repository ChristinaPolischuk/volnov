import gulp from "gulp";

//Config
import path from "../config/path.js";
import app from "../config/app.js";

//Plugins
import loadPlugins from "gulp-load-plugins";

const gp = loadPlugins();

export default () => {
    return gulp.src(path.svg.src)
        .pipe(gp.plumber({
            errorHandler: gp.notify.onError(error => ({
                title: "SVG",
                message: error.message
            }))
        }))
        .pipe(gp.svgmin(app.svg.svgmin))
        .pipe(gp.cheerio(app.svg.cheerio))
        .pipe(gp.replace("&gt;",">"))
        .pipe(gp.svgSprite(app.svg.svgSprite))
        .pipe(gulp.dest(path.svg.dest));
}