//3-Factory function that takes 4 parameters: name, height, weight, gender. This function returns an object with 3 properties {name, bmi, weightStatus}
//The first property will be 'name'. Make sure the name is correctly formatted.
//The second property will be 'bmi' which is a calculation of the body mass index of that person. Make sure bmi is rounded to 2 decimal places. 
//The third property ('weigthStatus') will be one of three values as a string (underweight, normal, overweight) which is based on the bmi and the gender.
//Expect height to be in centimeters and weight to be in kilograms.
//Give default values to height and weight of 180 and 80 respectively.

//This table might not be accurate but use it as a reference for assigning weightStatus. 
//Men: 
//bmi < 18.5 => weightStatus = 'underweight'
//18.5 < bmi < 30 => weightStatus = 'normal'
//bmi >= 30 => weightStatus = 'overweight'

//Women:
//bmi < 18.5 => weightStatus = 'underweight'
//18.5 < bmi < 24.9 => weightStatus = 'normal'
//bmi >= 24.9 => weightStatus = 'overweight'

function bmiCalculator(name, gender, height, weight) {
  
}

//Dont write code after this line
module.exports = bmiCalculator;