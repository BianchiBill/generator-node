# @rafaelbillbianchi/generator-node
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![MIT License][license-image]][license-url]
> Yeoman generator for Node projects.

## Installation

First, install [Yeoman](http://yeoman.io) and @rafaelbillbianchi/generator-node using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g @rafaelbillbianchi/generator-node
```

Then generate your new project:

```bash
yo @rafaelbillbianchi/node
```

### This generator provides the following features:

- ***Project Structure:***
  - `.vscode/extensions.json`: Configuration for Visual Studio Code extensions.
  - `src/index.js`: Entry point for your Node.js project.

- ***Configuration Files:***
  - `.editorconfig`: Editor configuration settings.
  - `.eslint.config.js`: ESLint configuration file.
  - `.gitignore`: Git ignore file to specify ignored files in Git.
  - `.npmrc`: Configuration file for npm settings.

- ***License and Metadata:***
  - `LICENSE`: MIT License for your project.
  - `package.json`: Project metadata including dependencies and scripts.
  - `README.md`: Project documentation and instructions.


## Project files

```javascript
//vanilla
|--- .vscode
|   |--- extensions.json
|--- src
|   |--- index.js
|   |---run.js
|   |--- .env
|   |--- config.js
|--- .editorconfig
|--- .eslint.config.js
|--- .gitignore
|--- .npmrc
|--- LICENSE
|--- package.json
|--- README.md
```

```javascript
//typescript
|--- .vscode
|   |--- extensions.json
|--- src
|   |--- index.ts
|   |---run.ts
|   |--- .env
|   |--- config.ts
|--- .editorconfig
|--- .eslint.config.js
|--- .gitignore
|--- .npmrc
|--- LICENSE
|--- package.json
|--- README.md
```

# Development
### Prerequisites
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/get-npm)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- [Yeoman CLI](http://yeoman.io/learning/)




## License

MIT © [Rafael Bianchi](https://bianchi-app.vercel.app/)


[npm-image]: https://badge.fury.io/js/%40rafaelbianchi%2Fgenerator-node.svg
[npm-url]: https://www.npmjs.com/package/@rafaelbillbianchi/generator-node
[travis-image]: https://travis-ci.com/rafaelbianchi/generator-node.svg?branch=master
[travis-url]: https://www.npmjs.com/package/@rafaelbillbianchi/generator-node
[license-image]: https://camo.githubusercontent.com/473c5a79aa94a76d78d103abb8db17a5d959e75bb9c539dafc5d5faf02a41c6e/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f726f626572746f61636861722f67656e657261746f722d6e6f64652e737667
[license-url]: https://github.com/BianchiBill/generator-node/blob/main/LICENSE
