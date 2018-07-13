let {square} = require('../square');
let {replaceCharactersInString} = require('../replaceCharactersInString');
let {bmiCalculator} = require('../bmiCalculator');


//delete the x at the beginning of the describe block to be able to run tests.

//Exercise 1 tests

xdescribe('square of a number', () => {
  it('should return the square of a number', () => {
    expect(square(5)).toBe(25);
    expect(square(-2)).toBe(4);
  });
  it('should return null if the function argument is not a valid number', () => {
    expect(square(undefined)).toBeNull();
  })
})


//Exercise 2 tests

xdescribe('replace all instances of a character in a string', () => {
  it('should return a string with all the specified characters replaced', () => {
    expect(replaceCharactersInString('somethings', 's', 'p')).toBe('pomethingp');
  })
})


//Exercise 3 tests

xdescribe('calculate bmi', () => {
  it('should return an object with 3 properties', () => {
    expect(Object.keys(bmiCalculator('Pedro', 'male')).length).toBe(3);
  })
  it('should assign correct default values if height and weight are ignored', () => {
    expect(bmiCalculator('Pedro', 'male')).toBe(24.69);
  });
  it('should assign correct weightStatus based on gender', () => {
    expect(bmiCalculator('jane', 'female', 170, 80).weigthStatus).toBe('overweight');
    expect(bmiCalculator('pedro', 'male', 170, 80).weigthStatus).toBe('normal');
  })
})