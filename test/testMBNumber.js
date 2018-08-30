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

        it('The constructor invoked with a non integer base should return an exception: base is not a valid integer number', () => {
            expect(() => new MBNumber(23, 'inv')).to.throw(Error, /^base is not a valid integer number$/);
        });

        it('The constructor invoked with an integer base but different from 2 and 10 should return an exception: invalid base', () => {
            expect(() => new MBNumber(5213, 7)).to.throw(Error, /^invalid base$/);
        });

        it('The constructor invoked with a single value "null" should return an exception: value is not a valid integer number in base 10', () => {
            expect(() => new MBNumber(null)).to.throw(Error, /^value is not a valid integer number in base 10$/);
        });

        it('The constructor invoked with an incorrect binary number should return an exception: value is not a valid integer number in base 2', () => {
            expect(() => new MBNumber('6a5', 2)).to.throw(Error, /^value is not a valid integer number in base 2$/);
        });
    });

    describe('Check values', () => {
        it('The binary number "0" should be equal to the decimal number 0', () => {
            let mbNumber = new MBNumber('0', 2);
            mbNumber.toBase2().should.equal('0');
            mbNumber.toBase10().should.equal(0);
        });

        it('The binary number "1" should be equal to the decimal number 1', () => {
            let mbNumber = new MBNumber('1', 2);
            mbNumber.toBase2().should.equal('1');
            mbNumber.toBase10().should.equal(1);
        });

        it('The binary number "11011" should be equal to the decimal number 27', () => {
            let mbNumber = new MBNumber('11011', 2);
            mbNumber.toBase2().should.equal('11011');
            mbNumber.toBase10().should.equal(27);
        });

        it('The binary number "10001101" should be equal to the decimal number 141', () => {
            let mbNumber = new MBNumber(10001101, 2);
            mbNumber.toBase2().should.equal('10001101');
            mbNumber.toBase10().should.equal(141);
        });

        it('The decimal number 7 should be equal to the binary number "111"', () => {
            let mbNumber = new MBNumber(7);
            mbNumber.toBase2().should.equal('111');
            mbNumber.toBase10().should.equal(7);
        });

        it('The decimal number 2018 should be equal to the binary number "11111100010"', () => {
            let mbNumber = new MBNumber('2018', 10);
            mbNumber.toBase2().should.equal('11111100010');
            mbNumber.toBase10().should.equal(2018);
        });
    });

    describe('Check operations', () => {
        it('The sum of binary numbers "11011" and "1000" should be "100011"', () => {
            let mbNumber = new MBNumber('11011', 2);
            mbNumber.sum(new MBNumber('1000', 2));
            mbNumber.toBase2().should.equal('100011');
            mbNumber.toBase10().should.equal(35);
        });

        it('The multiplication of binary numbers "10001101" and "111" should be "1111011011"', () => {
            let mbNumber = new MBNumber('10001101', 2);
            mbNumber.mul(new MBNumber('111', 2));
            mbNumber.toBase2().should.equal('1111011011');
            mbNumber.toBase10().should.equal(987);
        });
        
        it('The binary number "1110" divided by "101" should be "10"', () => {
            let mbNumber = new MBNumber('1110', 2);
            mbNumber.div(new MBNumber('101', 2));
            mbNumber.toBase2().should.equal('10');
            mbNumber.toBase10().should.equal(2);
        });

        it('The binary number "1110" less "101" should be "10"', () => {
            let mbNumber = new MBNumber('1110', 2);
            mbNumber.sub(new MBNumber('101', 2));
            mbNumber.toBase2().should.equal('1001');
            mbNumber.toBase10().should.equal(9);
        });
    });
});
