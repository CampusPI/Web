'use strict';

var gulp = require('gulp');

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('styles', function () {
  return gulp.src('app/css/main.scss')
    .pipe($.sass({
      style: 'nested'
    }))
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest('.tmp/css'))
    .pipe($.size());
});

gulp.task('scripts', function () {
  return gulp.src('app/js/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter(require('jshint-stylish')))
    .pipe($.size());
});

gulp.task('fonts', function () {
  return gulp.src('app/fonts/*')
    .pipe(gulp.dest('dist/fonts'))
    .pipe($.size());
});

gulp.task('templates', function () {
  return gulp.src('app/templates/*.html')
    .pipe(gulp.dest('dist/templates'))
    .pipe($.size());
});

gulp.task('html', ['styles', 'scripts', 'fonts', 'templates'], function () {
  var jsFilter = $.filter('**/*.js');
  var cssFilter = $.filter('**/*.css');

  return gulp.src('app/*.html')
    .pipe($.useref.assets({searchPath: '{.tmp,app}'}))
    .pipe(jsFilter)
    .pipe($.uglify({
      mangle: false
    }))
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe($.csso())
    .pipe(cssFilter.restore())
    .pipe($.useref.restore())
    .pipe($.useref())
    .pipe($.replace('http://localhost:8080', 'http://server.pi.campinhos.pt'))
    .pipe(gulp.dest('dist'))
    .pipe($.size());
});

gulp.task('clean', function () {
  return gulp.src(['.tmp', 'dist'], { read: false }).pipe($.clean());
});

gulp.task('build', ['html']);

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});

gulp.task('connect', function () {
  var connect = require('connect');
  var app = connect()
    .use(require('connect-livereload')({ port: 35729 }))
    .use(connect.static('app'))
    .use(connect.static('.tmp'))
    .use(connect.directory('app'));

  require('http').createServer(app)
    .listen(9068)
    .on('listening', function () {
        console.log('Started connect web server on http://localhost:9068');
      });
});

gulp.task('serve', ['connect'], function () {
  require('opn')('http://localhost:9068');
});

gulp.task('watch', ['connect', 'serve'], function () {
  var server = $.livereload();

  gulp.watch([
    'app/**/*.html',
    '.tmp/css/**/*.css',
    'app/js/**/*.js',
  ]).on('change', function (file) {
    server.changed(file.path);
  });

  gulp.watch('app/css/**/*.scss', ['styles']);
  gulp.watch('app/js/**/*.js', ['scripts']);
});
