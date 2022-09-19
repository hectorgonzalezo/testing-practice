import analyzeArray from './analyzeArray'

test('Average working', () => {
    expect(analyzeArray([1, 2, 5, 8, 9]).average).toBe(5)
})

test('Average working with floats and negative numbers', () => {
    expect(analyzeArray([1, 2.5, 5, 8.1, -9]).average).toBeCloseTo(1.52)
})

test('Min working', () => {
    expect(analyzeArray([1, 2, 10002, 100, 9]).min).toBe(1)
})

test('Min working with floats and negative numbers', () => {
    expect(analyzeArray([8, -20.5, 0, 8.1, -9]).min).toBe(-20.5)
})

test('Max working', () => {
    expect(analyzeArray([1, 2, 10002, 100, 9]).max).toBe(10002)
})

test('Max working with floats and negative numbers', () => {
    expect(analyzeArray([-8, -20.5, 0, -8.1, -9]).max).toBe(0)
})

test('Length working', () => {
    expect(analyzeArray([1, 2, 3, 4,  5, 6]).length).toBe(6)
})

test('Length working for empty array', () => {
    expect(analyzeArray([]).length).toBe(0)
})

test('default case on TOP', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6})
})