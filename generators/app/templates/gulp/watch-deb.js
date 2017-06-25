const exec = require('child_process').exec;
const gulp = require('gulp');

const cfg = require('./cfg');
const lib = require('./lib');

const taskName = 'watch-deb';

gulp.task(taskName, () => {
  gulp.watch([
    'deb.txt', 'deb.dev.txt'
  ], event => {
    if (event.type == 'added' || event.type == 'changed') {
      const cmd = `docker-compose exec ${cfg.serviceName} install-deb`;
      lib.exec(cmd, () => {
        lib.decho(`End ${taskName}`);
      });
    }
  });
});
