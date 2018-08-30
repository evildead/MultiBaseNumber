//Require the dev-dependencies
let chai = require('chai');
let should = chai.should();
let expect = chai.expect;
let assert = chai.assert;

const MBNumber = require('../mbnumber');

describe('MBNumber', () => {

    describe('Check exceptions', () => {
        it('The constructor should return an object', () => {
            let mbNumber = new MBNumber(100, 2);
            assert.isObject(mbNumber);
        });

        it('The constructor invoked with no element should return an exception: value and base required', () => {
            expect(() => new MBNumber()).to.throw(Error, /^value and base required$/);
        });

        it('The constructor invoked with only one element should return an exception: base required too', () => {
            expect(() => new MBNumber(54)).to.throw(Error, /^base required too$/);
        });

        it('The constructor invoked with a non integer base should return an exception: base in not a valid integer number', () => {
            expect(() => new MBNumber(23, 'inv')).to.throw(Error, /^base in not a valid integer number$/);
        });

        it('The constructor invoked with an integer base but different from 2 and 10 should return an exception: invalid base', () => {
            expect(() => new MBNumber(23, 7)).to.throw(Error, /^invalid base$/);
        });
    });

    /*
    describe('Check values', () => {
        it('The arabic number 1 should be equal to the Roman number "I"', () => {
            let romannum = RomanNumber(1);
            romannum.toString().should.equal('I');
            romannum.toInt().should.equal(1);
        });

        it('The Roman number "MMMCMXCIX" should be equal to the arabic number 3999', () => {
            let romannum = RomanNumber('MMMCMXCIX');
            romannum.toString().should.equal('MMMCMXCIX');
            romannum.toInt().should.equal(3999);
        });
    });
    */
});
