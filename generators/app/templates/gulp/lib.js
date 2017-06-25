const exec = require('child_process').exec;

exp = module.exports;

exp.exec = (cmd, callback) => {
  exp.decho(cmd);
  exec(cmd, (err, stdout, stderr) => {
    stdout && console.log(stdout);
    stderr && console.log(stderr);
    err && console.log(err);
    callback && callback();
  });
};

exp.decho = cmd => {
  const deco = new Array(cmd.length + 4).join('=');
  console.log(`+ ${cmd}`);
  console.log(deco);
};
