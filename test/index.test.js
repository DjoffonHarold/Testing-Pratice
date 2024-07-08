//import sum from "../src";
import { 
  sum,
  cal,
  div,
  mul,
  capitalize,
  reverseString,
  caesarCipher,
  analyzeArray } from "../src";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('negative number', () =>{
  expect(cal(1, 2)).toBe(-1)
})

test('division', ()=>{
  expect(div(1, 2)).toBe(0.5)
})

test('multiply', ()=>{
  expect(mul(1, 2)).toBe(2)
})

test('convert', ()=> {
  expect(capitalize('joe')).toBe('Joe')
})

test('reverseString function that takes a string and returns it reversed.', ()=>{
  expect(reverseString('xyw')).toBe('wyx')
})

test('cesar string', () =>{
  expect(caesarCipher('xyz', 3)).toBe('abc')
})

test('cesar string', () =>{
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
})

test('cesar string', () =>{
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

test('analyzeArray' , ()=>{
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({ average: 3, min: 1, max: 5, length: 5 })
  expect(analyzeArray([0, 0, 0, 0])).toEqual({ average: 0, min: 0, max: 0, length: 4 });
    expect(analyzeArray([])).toBeNull();
})