import gulp from 'gulp';
import browserSync from 'browser-sync';
import sassPkg from 'sass';
import gulpSass from 'gulp-sass';
import gulpCssimport from 'gulp-cssimport';
import del from 'del';
import htmlmin from 'gulp-htmlmin';
import cleanCSS from 'gulp-clean-css';
import terser from 'gulp-terser';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import gulpImg from 'gulp-image';
import gulpWebp from 'gulp-webp';
import gulpAvif from 'gulp-avif';

const prepros = true;

const sass = gulpSass(sassPkg);

const allJS = [
  "src/libs/jquery-3.6.0.min.js",
  "src/js/index.js",
];

// Задачи

export const html = () => gulp
  .src('src/*.html')
  .pipe(htmlmin({
    removeComments: true,
    collapseWhitespace: true,
  }))
  
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.stream());

export const style = () => {
  if (prepros) {
    return gulp
      .src('src/scss/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(cleanCSS({
        2: {
          specialComments: 0,
        }
      }))
      .pipe(sourcemaps.write('../maps'))
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.stream())
  }

  return gulp
    .src('src/css/index.css')
    .pipe(gulpCssimport({
      extensions: ['css'],
    }))
    .pipe(cleanCSS({
      2: {
        specialComments: 0,
      }
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}

export const js = () => gulp
  .src([...allJS, 'src/js/**/*.js'])
  .pipe(sourcemaps.init())
  .pipe(terser())
  .pipe(concat("index.min.js"))
  .pipe(sourcemaps.write('../maps'))
  .pipe(gulp.dest('dist/js'))
  .pipe(browserSync.stream());

export const img = () => gulp
  .src('src/image/**/*.{jpg,jpeg,png,svg,gif}')
  .pipe(gulpImg({
    optipng: ['-i 1', '-strip all', '-fix', '-o7', '-force'],
    pngquant: ['--speed=1', '--force', 256],
    zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
    jpegRecompress: ['--strip', '--quality', 'medium', '--min', 40, '--max', 80],
    mozjpeg: ['-optimize', '-progressive'],
    gifsicle: ['--optimize'],
    svgo: true
  }))
  .pipe(gulp.dest('dist/image'))
  .pipe(browserSync.stream());

export const webp = () => gulp
  .src('src/image/**/*.{jpg,jpeg,png)')
  .pipe(gulpWebp({
    quality: 70
  }))
  .pipe(gulp.dest('dist/image'))
  .pipe(browserSync.stream());

export const avif = () => gulp
  .src('src/image/**/*.{jpg,jpeg,png)')
  .pipe(gulpAvif({
    quality: 60
  }))
  .pipe(gulp.dest('dist/image'))
  .pipe(browserSync.stream());

export const copy = () => gulp
  .src('src/fonts/**/*', {
    base: 'src'
  })
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.stream({
    once: true
}))


export const server = () => {
  browserSync.init({
    ui: false,
    notify: false,
    //tunnel: true,
    server: {
      baseDir: 'dist'
    }
  })

  gulp.watch('src/**/*.html', html);
  gulp.watch(prepros ? 'src/scss/**/*.scss' : 'src/css/**/*.css', style);
  gulp.watch('src/image/**/*.{jpg,jpeg,png,svg,gif}', img);
  gulp.watch('src/js/**/*.js', js);
  gulp.watch('src/fonts/**/*', copy);
  gulp.watch('src/image/**/*.{jpg,jpeg,png}', webp);
  gulp.watch('src/image/**/*.{jpg,jpeg,png}', avif);
}

export const clear = () => del('dist/**/*', {forse: true});

//Запуск

export const base = gulp.parallel(html, style, js, img, webp, avif, copy);

export const build = gulp.series(clear, base)

export default gulp.series(base, server);