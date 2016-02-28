(function() {
    'use strict'
    
    var gulp = require('gulp')
    var minify = require('gulp-minify')
    var Server = require('karma').Server
    
    gulp.task('build', function(){
        return gulp.src('humanize.js')
        .pipe(gulp.dest('dist'))
        .pipe(minify(
         {
            ext: {
                min: '.min.js'
            }
         }))
        .pipe(gulp.dest('dist'))
    })
    
    gulp.task('test', function(done){
        new Server({
            configFile: __dirname + '/karma.conf.js',
            singleRun: true
        }, done).start();
    })
    
    gulp.task('default', ['build'])
    
})();