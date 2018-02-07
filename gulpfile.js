var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	server = require('gulp-server-livereload');

//server
gulp.task('server', function() {
	gulp.src('./')
		.pipe(server({
			livereload: true,
			open: true
		}));
});

gulp.task('scss', function () {
	return gulp.src(['sass/**/*.sass', 'scss/**/*.scss'])
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) //pipe - вызов плагина(функции), обработка
	.pipe(autoprefixer('last 16 version'))
	.pipe(gulp.dest('css/')) //путь выгрузки обработаного кода
});

gulp.task('watch', function () {
	gulp.watch(['sass/**/*.sass', 'scss/**/*.scss'], ['scss']);
});

gulp.task('default', ['server', 'watch']);