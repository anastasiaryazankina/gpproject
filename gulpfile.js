var gulp = require("gulp");

// Подключаем плагины Gulp
var 
    cssnano = require("gulp-cssnano"), // Минимизация CSS
    autoprefixer = require('gulp-autoprefixer'), // Проставлет вендорные префиксы в CSS для поддержки старых браузеров
    imagemin = require('gulp-imagemin'), // Сжатие изображение
    concat = require("gulp-concat"), // Объединение файлов - конкатенация


/* --------------------------------------------------------
   ----------------- Таски ---------------------------
------------------------------------------------------------ */

// Копирование файлов HTML в папку dist
gulp.task("html", function() {
    return gulp.src("src/*.html")
    .pipe(gulp.dest("dist"));
});



// Сжимаем картинки
gulp.task('imgs', function() {
    return gulp.src("src/images/*.+(jpg|jpeg|png|gif)")
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true
        }))
        .pipe(gulp.dest("dist/images"))
});

// Задача слежения за измененными файлами
gulp.task("watch", function() {
    gulp.watch("src/*.html", ["html"]);
    gulp.watch("src/images/*.+(jpg|jpeg|png|gif)", ["imgs"]);
});

///// Таски ///////////////////////////////////////

// Запуск тасков по умолчанию
gulp.task("default", ["html", "imgs", "watch"]);