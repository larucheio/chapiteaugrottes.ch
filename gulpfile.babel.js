import gulp from 'gulp'
import browsersync from 'browser-sync'
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'

const browserSync = browsersync.create()

gulp.task('serve', ['sass'], () => {
  browserSync.init({
    server: {
      baseDir: './build',
    },
  })

  gulp.watch('app/scss/*.scss', ['sass'])
  gulp.watch('build/*.html').on('change', browserSync.reload)
})

gulp.task('sass', () =>
  gulp.src('app/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream())
)


gulp.task('default', ['serve'])
