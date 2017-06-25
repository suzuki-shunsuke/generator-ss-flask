const exec = require('child_process').exec;
const gulp = require('gulp');

const cfg = require('./cfg');
const lib = require('./lib');

const taskName = 'watch-container';

gulp.task(taskName, () => {
  gulp.watch([
    'docker-compose.yml', 'env_file/*'
  ], event => {
    if (event.type == 'added' || event.type == 'changed') {
      const cmd = `docker-compose up -d ${cfg.serviceName}`;
      lib.exec(cmd);
      lib.decho(`End ${taskName}`);
    }
  });
});
