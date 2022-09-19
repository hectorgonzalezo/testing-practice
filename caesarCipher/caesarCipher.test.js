import caesarCipher from './caesarCipher';

test('Works in the middle', () => {
    expect(caesarCipher('a')).toBe('d')
})

test('Works for uppercase', () => {
    expect(caesarCipher('M')).toBe('P')
})


test('Wraps around the alphabet', () => {
    expect(caesarCipher('z')).toBe('c')
})

test('Does nothing for numbers or other characters', () => {
    expect(caesarCipher('1/+.')).toBe('1/+.')
})


test('Works for words', () => {
    expect(caesarCipher('Hello there')).toBe('Khoor wkhuh')
})


test('Works for different shifts', () => {
    expect(caesarCipher('Hello there', 8)).toBe('Pmttw bpmzm')
})