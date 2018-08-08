let assert = require('assert');
let chai = require('chai');
let expect = chai.expect;
let jsdom = require('mocha-jsdom');
import Component from '../component.js';

describe('Component', () => {
    // jsdom();
    it('should be a class', function () {
        assert.equal(typeof Component, 'function');
    });
    describe('Constructor', () => {
        it('should throw an error if no arguments or other types are provided as arguments.', function () {
            expect(() => new Component()).to.throw();
            expect(() => new Component(1234)).to.throw();
            expect(() => new Component(true)).to.throw();
        });
        it('should return Component Obj if passed a string', function () {
            expect(new Component('boom')).to.have.all.keys({componentId: 'boom'});
        });
    })
});