"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var main_1 = require("./main");
describe('Test hello world function', function () {
    it('Should return "Hello World"', function () {
        chai_1.expect(main_1.helloWorld()).to.equal("Hello World");
    });
});
