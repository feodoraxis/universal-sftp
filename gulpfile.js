var gulp = require('gulp'),
    rsync = require('gulp-rsync');

gulp.task('deploy', function() {
	return gulp.src('app/**')
        .pipe(rsync({
            root: 'app/',
            hostname: 'user@host',
            destination: 'URL to work dir',
            // include: ['*.htaccess'], // Includes files to deploy
            exclude: ['**/Thumbs.db', '**/*.DS_Store'],
            recursive: true,
            archive: true,
            silent: false,
            compress: true
        }));
});

gulp.task('watch', function() {
    gulp.watch('app/**', gulp.series('deploy'));
});

gulp.task('default', gulp.series('watch'));
