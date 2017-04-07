var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('scss/main.scss')
    .pipe(sourcemaps.init()) // dodajemy sourcemaps
    .pipe(sass().on('error', sass.logError)) // taki zapis plus linia 8, dają nam to, że watch nie przestanie działać, kiedy wyskoczy błąd.
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
        }))
    .pipe(sass({
        outputStyle: "expanded" // wpisujemy metodę kompresjio
    })) // bez średników bo to jest w jednej linii, tyle, że lepiej widać.
    .pipe(sourcemaps.write()) // dodajemy funkcje z sourcemaps
    .pipe(gulp.dest('css'))
});

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['sass']);

})
