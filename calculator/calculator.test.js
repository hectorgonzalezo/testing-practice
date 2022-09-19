import calculator from './calculator';

test('adds numbers', () => {
	expect(calculator.add(11, 21)).toBe(32);
});

test('adds floats', () => {
	expect(calculator.add(0.1,  0.222)).toBe(0.322);
});

test('subtracts numbers', () => {
	expect(calculator.subtract(10, 20)).toBe(-10);
});

test('subtracts floats', () => {
	expect(calculator.subtract(0.5,  0.22)).toBe(0.28);
});

test('divides numbers', () => {
	expect(calculator.divide(10, 2)).toBe(5);
});

test('divides floats', () => {
	expect(calculator.divide(2,  0.5)).toBe(4);
});

test('multiplies numbers', () => {
	expect(calculator.multiply(2, 8)).toBe(16);
});

test('multiplies floats', () => {
	expect(calculator.multiply(5,  0.5)).toBe(2.5);
});


