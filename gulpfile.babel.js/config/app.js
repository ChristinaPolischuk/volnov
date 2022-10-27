import news from "../data/news.json";

const isProd = process.argv.includes("--production");
const isDev = !isProd;

export default {
    isProd: isProd,
    isDev: isDev,
    htmlmin: {
        collapseWhitespace: isProd
    },
    pug: {
        pretty: isDev,
        //export JSON
        data: {
            news: news
        }
    },
    webpack: {
        mode: isProd ? "production" : "development"
    },
    imagemin: {
        verbose: true //увидеть размер до и после
    },
    svg: {
        svgmin: {
            js2svg: {
                pretty: true
            }
        },
        cheerio: {
            run: function ($) {
                $("[fill]").removeAttr("fill");
                $("[stroke]").removeAttr("stroke");
                $("[style]").removeAttr("style");
            },
            parseOptions: {xmlMode: true}
        },
        svgSprite: {
            mode: {
                symbol: {
                    sprite: "sprite.svg"
                }
            }
        }
    },
    fonter: {
        formats: ["ttf", "woff", "eot", "svg"]
    }
}