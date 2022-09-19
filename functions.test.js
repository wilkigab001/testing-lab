let theseFunctions = require('./function')

test('Should return 2', () => {
    expect(theseFunctions.returnTwo()).toBe(2)
})

describe('Tests for greeting functions', () => {
    test('Should return hello, james', () => {
        expect(theseFunctions.greeting('James')).toBe('Hello, James.')
    })
    test('Should return hello, jill', () => {
        expect(theseFunctions.greeting('Jill')).toBe('Hello, Jill.')
    })
    test('Should return hello', () => {
        expect(theseFunctions.greeting('Jill')).toContain('Hello')
    })
})

describe('Math Functions', () => {
    test('Should add two numbers', () => {
        expect(theseFunctions.add(1, 2)).toBe(3)
    })
    test('Should add two numbers', () => {
        expect(theseFunctions.add(5, 9)).toBe(14)
    })
    test('Should multiply two numbers', () => {
        expect(theseFunctions.multiply(1, 2)).toBe(2)
    })
    test('Should multiply two numbers', () => {
        expect(theseFunctions.multiply(5, 9)).toBe(45)
    })
    test('Should divide two numbers', () => {
        expect(theseFunctions.divide(12, 6)).toBe(2)
    })
    test('Should divide two numbers', () => {
        expect(theseFunctions.divide(9, 4)).toBe(2.25)
    })
    test('Should subtract two numbers', () => {
        expect(theseFunctions.subtract(1, 2)).toBe(-1)
    })
    test('Should subtract two numbers', () => {
        expect(theseFunctions.subtract(6,84)).toBe(-78)
    })
})