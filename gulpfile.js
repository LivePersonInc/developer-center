var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();
gulp.task('build', shell.task(['bundle exec jekyll build']));
// Task for serving blog with Browsersync
gulp.task('serve', function () {
    browserSync.init({server: {baseDir: '_site/'}});
    // Reloads page when some of the already built files changed:
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});
gulp.task('default', gulp.parallel('build', 'serve'));
