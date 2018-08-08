let assert = require('assert');
var jsdom = require('mocha-jsdom');
import Component from '../component.js';

describe('Component', () => {
    // jsdom();
    it('should be a class', function () {
        assert.equal(typeof Component, 'function');
    });






});