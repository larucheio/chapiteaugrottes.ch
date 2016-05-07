var gulp        = require('gulp')
var browserSync = require('browser-sync').create()
var sass = require('gulp-sass')

// Static server
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    })

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("build/*.html").on('change', browserSync.reload);
})

gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("build/css"))
        .pipe(browserSync.stream())
})


gulp.task('default', ['serve'])
