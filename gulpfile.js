const del = require('del')
const gulp = require('gulp')
const path = require('path')
const less = require('gulp-less')
const livereload = require('gulp-livereload')
const plumber = require('gulp-plumber')

let output = path.resolve(__dirname, 'www')
const sourcemaps = true

const clean = async () =>
{
	return del(output + '/**/*')
}

const content = async () =>
{
	return gulp.src('src/content/**/*', { since: gulp.lastRun(content) })
		.pipe(plumber())
		.pipe(gulp.dest(output))
		.pipe(livereload())
}

const styles = async () =>
{
	return gulp.src('src/less/app.less', { sourcemaps })
		.pipe(plumber())
		.pipe(less(
		{
			strictMath: true
		}))
		.pipe(gulp.dest(output, { sourcemaps: '.' }))
		.pipe(livereload())
}

const scripts = async () =>
{
	return gulp.src('src/js/**/*.js', { sourcemaps, since: gulp.lastRun(scripts) })
		.pipe(plumber())
		.pipe(gulp.dest(output, { sourcemaps: '.' }))
		.pipe(livereload())
}

const watch = async () =>
{
	/** @todo Remove this hack and find a better way to sync folders & live-reload it */
	output = path.join(__dirname, 'platforms/browser/www')

	livereload.listen()

	gulp.watch('src/content/**/*', content)
	gulp.watch('src/less/**/*', styles)
	gulp.watch('src/js/**/*', scripts)
}

const build = gulp.series(clean, gulp.parallel(content, styles, scripts))

exports.deploy = build
exports.default = gulp.series(build, watch)
