# gulp_scss-swiper_js
```bash
# npm install gulp -g
# npm init
# npm install gulp --save-dev
# npm install gulp-sass --save-dev 
```
# gulp.js
```bash
var gulp = require('gulp');
// 引入依赖包
var sass = require('gulp-sass');
gulp.task('sass', function(){
    //sass()方法用于转换sass到css
  return gulp.src('/app/scss/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
});

//Watching Sass files for changes
gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  // Other watchers
})
```

# commond...
* gulp watch
