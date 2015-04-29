# [Turris.js](https://github.com/turrisjs) test environment helpers

Provides a simple way to create an environment for testing React.js components writter with ES6 without browser.  

### Includes things

- [jsdom](https://github.com/tmpvar/jsdom) with [localStorage](https://github.com/lmaccherone/node-localstorage) polyfill for all your DOM needs
- [React](https://facebook.github.io/react/) and TestUtils (exposed via mocha context)
- Container for rendering your component that is create before each test and disposed afterwards (exposed via mocha context)
- [Should.js](https://github.com/shouldjs/should.js) for your assertions (exposed as default module export)

### Installation

Package can be installed using NPM:  
`npm install turris-test-helpers`

### Usage

It is recommended to import this file in the beginning of your test, e.g.:  
`import should from 'turris-test-helpers'`

### License

[MIT](http://opensource.org/licenses/MIT)
