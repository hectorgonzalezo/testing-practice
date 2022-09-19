import reverseString from './reverseString';

test('Reverses single words', () => {
	expect(reverseString('code')).toBe('edoc');
});

test('Reverses multiple words', () => {
	expect(reverseString('It actually works!')).toBe('!skrow yllautca tI');
});

test('Reverses numbers', () => {
	expect(reverseString('12345')).toBe('54321');
});

test('Reverses numbers', () => {
	expect(reverseString('12345')).toBe('54321');
});

test('Throws error with input', () => {
	expect(() => reverseString()).toThrow();
});
