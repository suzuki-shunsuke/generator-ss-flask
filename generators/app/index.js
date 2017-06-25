'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'dockerImage',
      message: 'docker image',
      default: 'python:3.6.1',
      store: true,
    }, {
      type: 'input',
      name: 'hostPort',
      message: 'host port',
      default: '5000',
      store: true,
    }]).then(answers => {
      this.answers = answers;
    });
  }
  writing() {
    this.fs.extendJSON('package.json', {scripts: {gulp: 'gulp'}});
    [
        'app.py', 'deb.dev.txt', 'deb.txt',
        'gulpfile.js', 'main.py', 'requirements.dev.in',
        'requirements.dev.txt', 'requirements.in',
        'requirements.txt', '.envrc',
      ].forEach(key => {
      this.fs.copy(
        this.templatePath(key),
        this.destinationPath(key)
      );
    });
    this.fs.copyTpl(
      this.templatePath('docker-compose.yml'),
      this.destinationPath('docker-compose.yml'),
      {
        docker_image: this.answers.dockerImage,
        host_port: this.answers.hostPort}
    );
    [
      'env_file', 'gulp', 'bin/host', 'bin/both',
      'bin/container'].forEach(key => {
      this.fs.copy(
        this.templatePath(`${key}/*`),
        this.destinationPath(key)
      );
    });
  }

  install() {
    this.yarnInstall(['gulp', 'gulp-cli', 'require-dir'], { 'dev': true });
    this.spawnCommand('direnv', ['allow']);
  }
};
