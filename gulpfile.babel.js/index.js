import gulp from "gulp";
import browserSync from "browser-sync";

//Конфигурация
import path from "./config/path.js";
import app from "./config/app.js";

//Задачи
import clear from "./task/clear.js";
// import html from "./task/html.js";
import pug from "./task/pug.js";
import scss from "./task/scss.js";
import js from "./task/js.js";
import img from "./task/img.js";
import svg from "./task/svg.js";
import fonts from "./task/fonts.js";

//Сервер
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    });
}

//Наблюдение
const watcher = () => {
    // gulp.watch(path.html.watch, html).on("all", browserSync.reload);
    gulp.watch(path.pug.watch, pug).on("all", browserSync.reload);
    gulp.watch(path.scss.watch, scss).on("all", browserSync.reload);
    gulp.watch(path.js.watch, js).on("all", browserSync.reload);
    gulp.watch(path.img.watch, img).on("all", browserSync.reload);
    gulp.watch(path.svg.watch, svg).on("all", browserSync.reload);
    gulp.watch(path.fonts.watch, fonts).on("all", browserSync.reload);
}

const build = gulp.series(
    clear,
    // html,
    gulp.parallel(pug, scss, js, img, svg, fonts)
);

const dev = gulp.series(
    build,
    gulp.parallel(watcher, server)
);

//Публичные задачи
// export {html};
export {pug};
export {scss};
export {js};
export {img};
export {svg};
export {fonts};

//Сборка
export default app.isProd
    ? build
    : dev;

//для запуска разработки npm start
//для запуска разработки npm build