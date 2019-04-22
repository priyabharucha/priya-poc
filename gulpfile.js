/********** Compile steps **********/
// 1. Compile-less
// 2. Compile-ts

/********** Build **********/
//1. Compile-less
//2. Compile-ts
//3. Cleanup-before
//4. Set-build-mode
//5. Uglify-css
//6. Uglify-js
//7. Zip
//8. Index-file
//9. Login-file
//10. Inject-source (refer to minified files)
//11. cleanup-after-zip (removed minified files)

const gulp = require('gulp');
//const less = require('gulp-less');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const purgeSourcemaps = require('gulp-purge-sourcemaps');
const zip = require('gulp-zip');
const replace = require('gulp-replace');
const rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifyCSS = require('gulp-minify-css');
var del = require('del');
var inject = require('gulp-inject');
var argv = require('yargs').argv;
var browserSync = require('browser-sync').create();
var merge2 = require('merge2');
var fs = require("fs");

var compile_for; //debug (no minification) or release (minification)


gulp.task('default', ['compile']);

// local, dev are limited to configSettings and compiling less and ts
gulp.task('compile', ['compile-ts', 'watch']);

// Compile *.ts into *.js
const tsProject = ts.createProject('tsconfig.json');
gulp.task('compile-ts', function () {
    return gulp.src('./src/**/*.ts', {base: '.'})
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('.'));
});

// Compile *.less files into *.css
gulp.task('compile-less', function () {
    return gulp.src(['./src/**/library.less', './e2e/src/bp.less'])//bp.less uses @imports and causes 'assets/less/bp/**/*.less' to compile
        .pipe(less())
        .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function () {
    browserSync.init({
        codeSync: false,
        server: "./src",
        port: 4200
    });

    gulp.watch(['./src/*.html', './src/**/*.js']).on('change', browserSync.reload);
});

