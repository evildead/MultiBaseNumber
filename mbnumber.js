const MBNumber = class MBNumber {
    constructor(val, base) {
        if(!arguments.length) {
            throw new Error('value and base required');
        }
        else if(arguments.length < 2) {
            throw new Error('base required too');
        }
        else {
            this.validBaseNumbers = [2, 10];
            this.checkValidBase(base);
        }
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
            throw new Error('base in not a valid integer number');
        }
    }
};

// export romanNumber
module.exports = MBNumber;
