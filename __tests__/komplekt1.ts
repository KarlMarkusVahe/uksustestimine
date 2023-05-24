test('test1', () => {
    expect(3+2).toBe(5);
});

import {kasPositiivne} from "../f1";
test("sugu m", ()=>{
    expect(kasPositiivne(3)).toBe(true);
    expect(kasPositiivne(0)).toBe(false);
    expect(kasPositiivne(-5)).toBe(false);
});

import {Isikukood} from "../k1";
test("positiivne", ()=>{
    expect(new Isikukood("37605030299").sugu()).toBe("M");
});

test("positiivne2", ()=>{
    expect(new Isikukood("48209030299").aasta()).toBe(1982);
});

import {countLetterA} from "../f1"
test('countLetterA function should correctly count the number of "a" letters', () => {
    const text = 'A quick brown fox jumps over the lazy dog.';
    const result = countLetterA(text);
    expect(result).toBe(1);
});

import {countAllLetterA} from "../f1"
test('countLetterA function should correctly count the number of "a" letters', () => {
    const text = 'A quick brown fox jumps over the lazy dog.';
    const result = countAllLetterA(text);
    expect(result).toBe(2);
});