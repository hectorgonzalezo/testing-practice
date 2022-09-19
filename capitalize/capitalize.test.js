import capitalize from './capitalize';

test('Capitalize lowercase words', () =>{
	expect(capitalize('juan')).toBe('Juan');
});

test('Leave capitalized words the same', () => {
	expect(capitalize('Mordor')).toBe('Mordor');
});

test('Leave uppercase words the same', () => {
	expect(capitalize('DUBAI')).toBe('DUBAI');
});


test('Works with single letter', () => {
	expect(capitalize('t')).toBe('T');
});

test('Leave empty string', () => {
	expect(capitalize('')).toBe('');
});

test('Return empty string when no argument is given', () => {
	expect(capitalize()).toBe('');
});

test('Return same number as string with number as argument', () => {
	expect(capitalize(12)).toBe('12');
});

