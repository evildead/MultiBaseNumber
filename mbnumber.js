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
     * @param {*} val must be a string
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

    checkValidValue(val) {
        switch(this.base) {
        case 2:
        {
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
            break;
        
        case 10:
        {
            if( (Number.isInteger(val)) ||
                ((typeof(val) === "string" || val instanceof String) && Number.isInteger(parseInt(val))) ) {
                
                this.base10Val = parseInt(val);
                this.base2Val = this.base10Val.toString(2);
            }
            else {
                throw new Error('value is not a valid integer number in base 10');
            }
        }
            break;
        
        default:
            break;
        }
    }

    toBase2() {
        return this.base2Val;
    }

    toBase10() {
        return this.base10Val;
    }
};

// export romanNumber
module.exports = MBNumber;
