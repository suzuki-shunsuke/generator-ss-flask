const exec = require('child_process').exec;
const gulp = require('gulp');

const cfg = require('./cfg');
const lib = require('./lib');

const taskName = 'watch-pip';

gulp.task(taskName, () => {
  gulp.watch([
    'requirements.in', 'requirements.dev.in'
  ], event => {
    if (event.type == 'added' || event.type == 'changed') {
      const cmd = `docker-compose exec ${cfg.serviceName} install-pip`;
      lib.exec(cmd);
      lib.decho(`End ${taskName}`);
    }
  });
});
