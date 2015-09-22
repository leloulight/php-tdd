var gulp =require('gulp');

var phpspec = require('gulp-phpspec');

var run = require('gulp-run');

var notify = require('gulp-notify');

gulp.task('test', function(){
    gulp.src('spec/**/*.php')
        //.pipe(run('clear'))
        .pipe(phpspec('vendor/phpspec/phpspec/bin/phpspec run', {notify:true}))
        .on('error', notify.onError({
            title : 'Crap!',
            message : 'Your Test Failed, Alan :(',
            icon : __dirname+'/yao.png'
        }))
        .pipe(notify({
            title :'Bien bien',
            message : 'Todas las pruebas bien verdes ;)'
        }));
});

gulp.task('watch', function(){
   gulp.watch(['spec/**/*.php','src/!**/!*.php'],['test']);
});

gulp.task('default', ['test','watch']);
