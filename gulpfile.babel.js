import gulp from 'gulp';
import plumber from 'gulp-plumber'
import webpack from 'webpack-stream';
import electronConnect from 'electron-connect';
import config from './webpack.config';

const electron = electronConnect.server.create();

{
  const src = './lib/**/*.js';
  const dest = './app';

  gulp.task('script:app', () => {
    return gulp.src(src)
      .pipe(plumber())
      .pipe(webpack(Object.assign({}, config, {
        output: {
          filename: 'app.js',
        }
      })))
      .pipe(gulp.dest(dest));
  });
}

{
  const src = ['./lib/**/*'];
  gulp.task('script:watch', ['script:app'], () => {
    electron.start();
    gulp.watch(src, ['script:app', electron.restart]);
  });
}

process.on('SIGINT', () => {
  electron.stop();
  process.exit(0);
});
process.on('SIGTERM', () => {
  electron.stop();
  process.exit(0);
});
