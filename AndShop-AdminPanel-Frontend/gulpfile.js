var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
postcss = require("gulp-postcss");
autoprefixer = require("autoprefixer");
var sourcemaps = require('gulp-sourcemaps'); 
var browserSync = require('browser-sync').create(); 
cssbeautify = require('gulp-cssbeautify');
var beautify = require('gulp-beautify');



//_______ task for scss folder to css main style 
gulp.task('watch', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('./src/assets/scss/**/*.scss') 
		.pipe(sourcemaps.init())                       
		.pipe(sass())
		.pipe(sourcemaps.write(''))  
		.pipe(beautify.css({ indent_size: 4 })) 
		.pipe(gulp.dest('./src/assets/css'))
		.pipe(browserSync.reload({
		  stream: true
	}))
})

//_______ task for style-dark
gulp.task('dark', function(){
   return gulp.src('./src/assets/css/dark-style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src/assets/css/'));
		
});

//_______ task for style-transparent
gulp.task('transparent', function(){
	return gulp.src('./src/assets/css/transparent-style.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(beautify.css({ indent_size: 4 }))
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('./src/assets/css/'));
		 
 });

 
 //_______task for skin-modes
gulp.task('skins', function(){
	return gulp.src('./src/assets/css/skin-modes.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(beautify.css({ indent_size: 4 }))
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('./src/assets/css/'));
		 
 });
 
//_______task for Color
gulp.task('color', function(){
	return gulp.src('./src/assets/colors/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(beautify.css({ indent_size: 4 }))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./src/assets/colors'));
});




