/* global before, beforeEach, afterEach */
import localStorage from 'localStorage';
import {jsdom} from 'jsdom';
import should from 'should';

// say we're not in webpack environment
// this is required to skip including styles
global.__WEBPACK__ = false; // eslint-disable-line no-underscore-dangle

// init jsdom
global.document = jsdom();
global.window = global.document.defaultView;
global.navigator = global.window.navigator;

// local storage polyfill
global.window.localStorage = localStorage;
global.localStorage = localStorage;

// import react after dom
const React = require('react/addons');

before(function() {
    // expose react and testutils
    this.React = React;
    this.TestUtils = React.addons.TestUtils;
});

beforeEach(function() {
    // create container
    this.container = global.window.document.createElement('div');
});

afterEach(function(done) {
    // clean jsdom
    this.React.unmountComponentAtNode(this.container);
    // timeout
    setTimeout(done);
});

export default should;
