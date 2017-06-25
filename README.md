# generator-ss-flask

> yeoman generator to develop flask applications

## Requirements

* Node.js
* npm
* yarn
* yo
* Docker Engine
* Docker Compose
* direnv

## Install

```bash
$ git clone https://github.com/suzuki-shunsuke/generator-ss-flask
$ cd generator-ss-flask
$ npm link
```

Then generate your new project:

```bash
yo ss-flask
```

## How to develop the flask application

Run the flask application.

```
$ start
```

In the other terminal, run watch.

```
$ watch
```

Run test.

```
$ tst
```

## Command

* start: run flask application
* tst: run test
* watch: run gulp watch

## Watch Mode

watched file | action
--- | ---
requirements.in, requirements.dev.in | install python packages
deb.txt, deb.dev.txt | install debian packages
docker-compose.yml, env_file | docker-compose up -d

## License

MIT © [Suzuki Shunsuke](https://github.com/suzuki-shunsuke)
