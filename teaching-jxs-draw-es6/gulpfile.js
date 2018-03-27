const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const server = require('gulp-server-livereload');
var gnf = require('gulp-npm-files');

var paths = {
    srcAll : ['src/**/*.js', 'src/**/*.html', 'src/**/*.css'],
    srcJs : 'src/**/*.js',
    srcOther : ['src/**/*.html', 'src/**/*.css'],
    distDir : 'dist'
};

gulp.task('npm-dependencies', function() {
    gulp
        .src(gnf(null, './package.json'), {base:'./'})
        .pipe(gulp.dest(paths.distDir));
});


gulp.task('build', ['npm-dependencies'], () => {
        gulp.src(paths.srcJs)
            .pipe(sourcemaps.init())
            .pipe(babel({
                presets: ['es2015']
            }))
            // .pipe(concat('all.js'))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(paths.distDir));
        gulp.src(paths.srcOther)
            .pipe(gulp.dest(paths.distDir))
    }
);

gulp.task('watch', ['build'], () => {
    gulp.watch(paths.srcAll, ['build'])
});

gulp.task('webserver', ['watch'], () =>
    gulp.src(paths.distDir)
        .pipe(server({
            livereload: true,
            directoryListing: false,
            open: true
        }))
);


gulp.task('default', ['webserver']);
