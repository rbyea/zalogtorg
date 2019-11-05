var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var rigger = require('gulp-rigger');
var htmlbeautify = require('gulp-html-beautify');
var browserSync = require('browser-sync');
var csscomb = require('gulp-csscomb');
var cssbeautify = require('gulp-cssbeautify');
console.log('morj!');

 


 
/*gulp.task('concatjs', function() {
  return gulp.src('./concat/js/input/*.js')
    .pipe(concat('concat.js'))
    .pipe(gulp.dest('./concat/js/output/'));
});*/


var reload = browserSync.reload;
gulp.task('serve', ['sass','rigger'], function() {
    browserSync.init({
        server: "prod/"
    });
	gulp.watch("prod/css/*.css").on('change', reload);
	gulp.watch("prod/js/*.js").on('change', reload);
    gulp.watch("prod/*.html").on('change', reload);
})


var options = {
        "indent_size": 4,
    "indent_char": " ",
    "eol": "\n",
    "indent_level": 0,
    "indent_with_tabs": false,
    "preserve_newlines": true,
    "max_preserve_newlines": 10,
    "jslint_happy": false,
    "space_after_anon_function": false,
    "brace_style": "collapse",
    "keep_array_indentation": false,
    "keep_function_indentation": false,
    "space_before_conditional": true,
    "break_chained_methods": false,
    "eval_code": false,
    "unescape_strings": false,
    "wrap_line_length": 0,
    "wrap_attributes": "auto",
    "wrap_attributes_indent_size": 4,
    "end_with_newline": false
  };
gulp.task('htmlbeautify', function() {
  gulp.src('prod/*.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('prod/buety/'))
});

gulp.task('rigger', function () {
    gulp.src('dev/dist/*.html')
        .pipe(rigger())
		.pipe(htmlbeautify(options))
        .pipe(gulp.dest('prod/'));
});

/*
gulp.task('concatcss', function() {
  return gulp.src('./concat/css/input/*.css')
    .pipe(concat('concat.css'))
    .pipe(gulp.dest('./concat/css/output/'));
});*/
/*
gulp.task('compress', function() {
	gulp.src('./minify/js/input/*.js')
	.pipe(gulp.dest('./minify/js/output/'))
})
*/
/*
gulp.task( 'csscomb', function( ){
    return gulp.src( './forma-mob/dev/sass/style.scss' )
               .pipe( plumber( {errorHandler: notify.onError("<%= error.message %>")} ) )
               .pipe( csscombsass( ) )
               .pipe( gulp.dest( './forma-mob/prod/css/style.css' ) );
} );

*/



gulp.task('sass', function () {
  gulp.src('dev/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
	.pipe(csscomb())
	.pipe(cssbeautify())
    .pipe(gulp.dest('prod/css'))
	
	
});


gulp.task('watch', function () {
  gulp.watch('dev/dist/**/*.html', ['rigger']);
  gulp.watch('dev/sass/*.scss', ['sass']);
});
gulp.task('default', ['watch','serve'],function(){ });
module.exports = gulp

/*

gulp.task('concatcss', function() {
  return gulp.src('./concat/css/input/*.css')
    .pipe(concat('concat.css'))
    .pipe(gulp.dest('./concat/css/output/'));
});

gulp.task('compress', function() {
	gulp.src('./minify/js/input/*.js')
	.pipe(gulp.dest('./minify/js/output/'))
})


gulp.task( 'csscomb', function( ){
    return gulp.src( './forma-mob/dev/sass/style.scss' )
               .pipe( plumber( {errorHandler: notify.onError("<%= error.message %>")} ) )
               .pipe( csscombsass( ) )
               .pipe( gulp.dest( './forma-mob/prod/css/style.css' ) );
} );





gulp.task('sass', function () {
  gulp.src('./legal-ship-var/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('C:/Webserver/home/jurist.ru/www/css'))
	.pipe(livereload());
	
});

 

 
gulp.task('imgmin', () =>
    gulp.src('imgmin/input/*')
        .pipe(imagemin())
        .pipe(gulp.dest('imgmin/output/'))
);
gulp.task('watch', function () {
  //livereload.listen();
  gulp.watch('./saturn/dev/dist/*.html', ['rigger']);
  gulp.watch('./legal-ship-var/*.scss', ['sass']);
  //return gulp.watch('*.jade', ['jade']);
});
gulp.task('default', ['watch'],function(){ });
module.exports = gulp
*/