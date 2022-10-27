import gulp from "gulp";

//Config
import path from "../config/path.js";
import app from "../config/app.js";

//Plugins
import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);
import loadPlugins from "gulp-load-plugins";
const gp = loadPlugins();

// const plumber = require("gulp-plumber");
// const notify = require("gulp-notify");
// const autoprefixer = require("gulp-autoprefixer");
// const csso = require("gulp-csso");
// const rename = require("gulp-rename");
// const size = require("gulp-size");
// const shorthand = require("gulp-shorthand"); //для объединения css свойств
// const groupCssMediaQueries = require("gulp-group-css-media-queries");
// const sass = require("gulp-sass")(require("sass"));
// const sassGlob = require("gulp-sass-glob");
// const webpCss = require("gulp-webp-css");

export default () => {
    return gulp.src(path.scss.src, {sourcemaps: app.isDev})
        .pipe(gp.plumber({
            errorHandler: gp.notify.onError(error => ({
                title: "SCSS",
                message: error.message
            }))
        }))
        .pipe(gp.sassGlob())
        .pipe(sass())
        .pipe(gp.webpCss())
        .pipe(gp.autoprefixer())
        .pipe(gp.shorthand()) //для объединения css свойств
        .pipe(gp.groupCssMediaQueries())
        .pipe(gp.size({title: "main.css"}))
        .pipe(gulp.dest(path.scss.dest, {sourcemaps: app.isDev}))
        .pipe(gp.rename({suffix: ".min"}))
        .pipe(gp.csso())
        .pipe(gp.size({title: "main.min.css"}))
        .pipe(gulp.dest(path.scss.dest, {sourcemaps: app.isDev}))
}