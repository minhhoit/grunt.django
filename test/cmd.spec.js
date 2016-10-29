'use strict';
var expect = require('expect.js');
var cmd = require('../lib/cmd');

describe('cmd util', function(){

    it('should render outputs', function (done) {
        cmd('which', ['node']).done(function (stdout) {
            expect(stdout).to.be.an('array');
            done();
        });
    });
    
});