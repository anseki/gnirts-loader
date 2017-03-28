# gnirts-loader

[![npm](https://img.shields.io/npm/v/gnirts-loader.svg)](https://www.npmjs.com/package/gnirts-loader) [![GitHub issues](https://img.shields.io/github/issues/anseki/gnirts-loader.svg)](https://github.com/anseki/gnirts-loader/issues) [![dependencies](https://img.shields.io/badge/dependencies-No%20dependency-brightgreen.svg)](package.json) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE-MIT)

[gnirts](https://github.com/anseki/gnirts) loader module for [webpack](https://webpack.js.org/).

* [Grunt](http://gruntjs.com/) plugin: [grunt-gnirts](https://github.com/anseki/grunt-gnirts)
* [gulp](http://gulpjs.com/) plugin: [gulp-gnirts](https://github.com/anseki/gulp-gnirts)

Obfuscate string literals in JavaScript code.  
See [gnirts](https://github.com/anseki/gnirts) for more information about gnirts.

## Installation

```
npm install --save-dev gnirts-loader gnirts
```

## Usage

[Documentation: Loaders](https://webpack.js.org/concepts/loaders/)

For example:

```js
// webpack.config.js
module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'gnirts-loader'
    }]
  }
};
```
