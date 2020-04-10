/*
 * @author ChenKuo
 * @date 2020-04-10 09:39:45
 * */
'use strict';

const gulp = require('gulp');

function html() {
	return gulp
		.src('./index.html')
		.pipe(gulp.dest('./dist/'))
}

exports.default = gulp.series(html);
