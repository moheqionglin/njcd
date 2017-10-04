/**
 * Created by zhouwanli on 16/03/2017.
 */
'use strict'
const gulp = require('gulp');
const sass = require('gulp-sass');
const compressCss = require('gulp-minify-css');//compress css plugin
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const del = require('del');
/********************GULP FUNCTION***********************/
//清空
gulp.task('clear-all', function(){
    return del.sync(['./src/webapp/styes/**/*', './target/**'])
});
//编译 sass 压缩 css
gulp.task('compile-compress-sass', function(){
    return gulp.src('src/webapp/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/webapp/styes/dist'))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('src/webapp/styes/'))
        .pipe(rename('main.min.css'))
        .pipe(compressCss())
        .pipe(gulp.dest('src/webapp/styes/'));
});



gulp.task('default', ['clear-all', 'compile-compress-sass']);



