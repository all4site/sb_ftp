var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    tiny = require('gulp-tinypng'),
    wait = require('gulp-wait'),
    notify = require('gulp-notify'),
    newer = require('gulp-newer');

// BUILD
gulp.task('tiny', function () {
    gulp.src(['img/*.jpg', 'img/*.png'])
        .pipe(newer('dist/img'))
        .pipe(tiny('eKJf273ZwggolXsloo3tDizmOiER9tgr'))
        .pipe(gulp.dest('img'));
});

gulp.task('sass', function () {
    return gulp.src('sass/**/*.sass')
        .pipe(wait(500))
        .pipe(sass.sync())
        .on('error', notify.onError({
            message: "<%= error.message %>",
            title: "Sass Error!"
        }))
        .pipe(autoprefixer(['last 2 versions', '> 1%', 'ie 8'], {
            cascade: true
        }))
        .pipe(gulp.dest('css/'))
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
        	baseDir: './'
        },
        // proxy: 'superbookacademy.emmanuil.tv',
        notify: false
    });
});

gulp.task('watch', function () {
    gulp.watch('sass/*.sass', gulp.parallel('sass'));
    gulp.watch('js/**/*.js').on('change', browserSync.reload);
    gulp.watch('**/*.html').on('change', browserSync.reload);
    gulp.watch('css/*.css').on('change', browserSync.reload);
});
gulp.task('default', gulp.parallel('browser-sync', 'watch'));