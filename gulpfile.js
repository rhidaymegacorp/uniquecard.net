 let gulp = require('gulp');
let imagemin = require('gulp-imagemin');

gulp.task('default', () =>

    gulp.src('themes/img/card_wedding-ori/*')
    .pipe(imagemin([
      imagemin.jpegtran({progressive: true}),
      imageminJpegquant({quality: '35-80'})
    ]))
    .pipe(gulp.dest('themes/img/card_wedding'))

);

// gulp.task('default', ['compressImg']);
