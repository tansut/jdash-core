var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('gulp-merge');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourceStream = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
const tsConfig = require('./tsconfig.json');
var del = require('del');

function compile(op) {
    var browserify = require('browserify'),
        bundler = new browserify({ debug: op.debug || false, transform: [] });
    bundler.add(op.main);
    bundler.plugin('tsify', tsConfig.compilerOptions);
    return new Promise((res, rej) => {
        var action = bundler.bundle();
        action = action.pipe(sourceStream(op.out))
        action = action.pipe(buffer())
        op.min && (action = (uglif = action.pipe(uglify())));
        var dest = gulp.dest('./')
        dest.on('end', () => { res(); })
        action.pipe(dest);
    })

}

gulp.task('deploy', ['deploy:clean', 'tsc-def'], function () {
    var browserify = require('browserify'),
        bundler = new browserify({ debug: false });
    bundler.add('src/index.ts');
    bundler.plugin('tsify', tsConfig.compilerOptions);
    return bundler.bundle()
        .pipe(sourceStream('./lib/index.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./'))
})


gulp.task('tsc-def', ['deploy:clean'], function () {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = tsProject.src()
        .pipe(tsProject());
    return merge([tsResult.dts.pipe(gulp.dest('lib/definitions'))]);
});

gulp.task('tsc', ['deploy:clean'], function () {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = tsProject.src()
        .pipe(tsProject());
    return merge([tsResult.js.pipe(gulp.dest('./lib'))]);
});


gulp.task('deploy:clean', function (done) {
    del([
        './lib'
    ], {
            force: true
        }).then(() => done()).catch(err => done(err))
})

gulp.task('dev', ['tsc'], function () {
    gulp.watch('./src/**/*.ts', ['tsc']);
})