const del = require('del')
const gulp = require('gulp')
const path = require('path')
const less = require('gulp-less')
const sourcemaps = require('gulp-sourcemaps')
const webpack = require('webpack-stream')

const output = path.resolve(__dirname, 'www')

const clean = async () =>
{
	return del(output + '/**/*')
}

const content = async () =>
{
	return gulp.src('src/content/**/*', { since: gulp.lastRun(content) })
		.pipe(gulp.dest(output))
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
}

const watch = async () =>
{
	gulp.watch('src/content/**/*', content)
	gulp.watch('src/less/**/*', styles)
	gulp.watch('src/js/**/*', scripts)
}

const build = gulp.series(clean, gulp.parallel(content, styles, scripts))

exports.deploy = build
exports.default = gulp.series(build, watch)
