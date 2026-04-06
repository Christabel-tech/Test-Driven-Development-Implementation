const calculator = require('./calculator');

describe('Calculator', () =>{
    
    //ADD
    describe('add', () => {
        test('adds two positive numbers', () => {
            expect(calculator.add(2, 3)).toBe(5);
        });
    });

    //SUBTRACT
     describe('subtract', () => {
        test('subtracts two positive numbers', () => {
            expect(calculator.subtract(10, 4)).toBe(6);
        });
    });

    //MULTIPLY
     describe('multiply', () => {
        test('multiplies two positive numbers', () => {
            expect(calculator.multiply(2, 3)).toBe(6);
        });
    });

    //DIVISION
     describe('divide', () => {
        test('divides two positive numbers', () => {
            expect(calculator.divide(10, 2)).toBe(5);
        });
        test('test throws error when dividing by zero', () => {
            expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
        });
    });
});