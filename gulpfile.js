const del = require('del')
const gulp = require('gulp')
const path = require('path')
const less = require('gulp-less')
const livereload = require('gulp-livereload')
const sourcemaps = require('gulp-sourcemaps')
const webpack = require('webpack-stream')

let output = path.resolve(__dirname, 'www')

const clean = async () =>
{
	return del(output + '/**/*')
}

const content = async () =>
{
	return gulp.src('src/content/**/*', { since: gulp.lastRun(content) })
		.pipe(gulp.dest(output))
		.pipe(livereload())
}

const styles = async () =>
{
	return gulp.src('src/less/app.less')
		.pipe(sourcemaps.init())
		.pipe(less(
		{
			strictMath: true
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(output))
		.pipe(livereload())
}

const scripts = async () =>
{
	return gulp.src('src/js/app.js')
		.pipe(webpack(
		{
			mode: process.env.NODE_ENV || 'development',
			output:
			{
				filename: 'app.js',
			},
			context: output
		}))
		.pipe(gulp.dest(output))
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
