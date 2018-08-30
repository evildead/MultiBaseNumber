/**
 * class MBNumber
 * @param {Int} val (The value in the selected 'base')
 * @param {*} base (Can be 2 or 10)
 */
const MBNumber = class MBNumber {
    constructor(val, base) {
        if(!arguments.length) {
            throw new Error('value and base required');
        }
        else {
            this.validBaseNumbers = [2, 10];
            if(arguments.length < 2) {
                // default base is 10
                this.checkValidBase(10);
            }
            else {
                this.checkValidBase(base);
            }

            this.checkValidValue(val);
        }
    }

    /**
     * function fromBinaryValToBase10
     * @param {*} val must be a string in binary format
     */
    static fromBinaryValToBase10(val) {
        if(!(typeof(val) === "string" || val instanceof String)) {
            throw new Error('value is not a valid integer number in base 2');
        }

        if(!val.length) {
            throw new Error('value is not a valid integer number in base 2');
        }

        let base10Val = 0;
        let power = 0;

        for(let i = val.length - 1; i >= 0; i--) {
            let currChar = val.charAt(i);
            if(currChar == '1') {
                base10Val += Math.pow(2, power);
            }
            else if(currChar != '0') {
                throw new Error('value is not a valid integer number in base 2');
            }
            power++;
        }

        return base10Val;
    }

    /**
     * checkValidBase - check if val is a valid base (can be 2 or 10)
     * @param {Int} val 
     */
    checkValidBase(val) {
        if( (Number.isInteger(val)) ||
            ((typeof(val) === "string" || val instanceof String) && Number.isInteger(parseInt(val))) ) {
            
            let intVal = parseInt(val);
            if(this.validBaseNumbers.indexOf(intVal) < 0) {
                throw new Error('invalid base');
            }

            this.base = intVal;
        }
        else {
            throw new Error('base is not a valid integer number');
        }
    }

    /**
     * checkValidValue - check if val is valid in the current base and set the values for all the bases
     * @param {Int} val 
     */
    checkValidValue(val) {
        switch(this.base) {
        case 2:
            this.setBase2(val);
            break;
        
        case 10:
            this.setBase10(val);
            break;
        
        default:
            break;
        }
    }

    /**
     * setBase2
     * @param {Int} val (value in binary format)
     */
    setBase2(val) {
        if( (Number.isInteger(val)) ||
            ((typeof(val) === "string" || val instanceof String) && Number.isInteger(parseInt(val))) ) {
            
            let intVal = parseInt(val);
            this.base2Val = intVal.toString();
            this.base10Val = MBNumber.fromBinaryValToBase10(this.base2Val);
        }
        else {
            throw new Error('value is not a valid integer number in base 2');
        }
    }

    /**
     * setBase10
     * @param {Int} val (value in base 10 format)
     */
    setBase10(val) {
        if( (Number.isInteger(val)) ||
            ((typeof(val) === "string" || val instanceof String) && Number.isInteger(parseInt(val))) ) {
            
            this.base10Val = parseInt(val);
            this.base2Val = this.base10Val.toString(2);
        }
        else {
            throw new Error('value is not a valid integer number in base 10');
        }
    }

    /**
     * toBase2 - return the value in binary format
     */
    toBase2() {
        return this.base2Val;
    }

    /**
     * toBase10 - return the value in base 10 format
     */
    toBase10() {
        return this.base10Val;
    }

    
    /// OPERATIONS ///////////////////////////////

    /**
     * sum - sums mbNum to current value
     * @param {MBNumber} mbNum 
     */
    sum(mbNum) {
        if(!(mbNum instanceof MBNumber)) {
            throw new Error('mbNum is not an instance of MBNumber');
        }

        this.setBase10(this.toBase10() + mbNum.toBase10());
    }

    /**
     * sub - subtracts mbNum to current value
     * @param {MBNumber} mbNum 
     */
    sub(mbNum) {
        if(!(mbNum instanceof MBNumber)) {
            throw new Error('mbNum is not an instance of MBNumber');
        }

        this.setBase10(this.toBase10() - mbNum.toBase10());
    }

    /**
     * mul - multiplies mbNum to current value
     * @param {MBNumber} mbNum 
     */
    mul(mbNum) {
        if(!(mbNum instanceof MBNumber)) {
            throw new Error('mbNum is not an instance of MBNumber');
        }

        this.setBase10(this.toBase10() * mbNum.toBase10());
    }

    /**
     * div - divide current value by mbNum
     * @param {MBNumber} mbNum 
     */
    div(mbNum) {
        if(!(mbNum instanceof MBNumber)) {
            throw new Error('mbNum is not an instance of MBNumber');
        }

        this.setBase10(parseInt(this.toBase10() / mbNum.toBase10()));
    }
};

// export romanNumber
module.exports = MBNumber;
