import gulp from 'gulp'
import browsersync from 'browser-sync'
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import babel from 'gulp-babel'

const browserSync = browsersync.create()

gulp.task('serve', ['sass', 'js'], () => {
  browserSync.init({
    server: {
      baseDir: './build',
    },
  })

  gulp.watch('app/scss/*.scss', ['sass'])
  gulp.watch('app/js/*.js', ['js'])
  gulp.watch('build/*.html').on('change', browserSync.reload)
  gulp.watch('build/js/*.js').on('change', browserSync.reload)
})

gulp.task('sass', () =>
  gulp.src('app/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream())
)

gulp.task('js', () =>
  gulp.src('app/js/app.js')
    .pipe(sourcemaps.init())
		.pipe(babel())
    .pipe(sourcemaps.write())
		.pipe(gulp.dest('build/js'))
)

gulp.task('default', ['serve'])
