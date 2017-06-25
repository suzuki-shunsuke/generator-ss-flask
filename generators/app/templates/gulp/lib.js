const exec = require('child_process').exec;

module.exports = {};

module.exports.exec = cmd => {
  const deco = new Array(cmd.length + 4).join('=');
  console.log(`+ ${cmd}`);
  console.log(deco);
  exec(cmd, (err, stdout, stderr) => {
    stdout && console.log(stdout);
    stderr && console.log(stderr);
    err && console.log(err);
  });
};

module.exports.decho = cmd => {
  const deco = new Array(cmd.length + 4).join('=');
  console.log(`+ ${cmd}`);
  console.log(deco);
};
