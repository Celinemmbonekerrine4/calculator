 var multiply = function(number1, number2) {
   return number1 * number2;
 };
 var number1 = parseInt(prompt("Enter a number:"));
 var number2 = parseInt(prompt("Enter another number:"));
 alert(multiply(number1,number2));
 
var divide=function(weight,height){
    return weight/height;
  }
  var weight = parseInt(prompt("Weight in kg"));
  var height = parseInt(prompt("Height in Cm"));
  alert(divide(weight,height));

  var multiply=function(fahrenheit,celcius){
    return fahrenheit*celcius;
  }
  var fahrenheit = parseInt(prompt("Fahrenheit"));
  var celcius = parseInt(prompt("Celcius"));
  alert(multiply(fahrenheit,celcius));

  var num=3;
if ( num%2 == 0) {
	alert(prompt('Even number'));
}else{
	alert(prompt('Odd number'));
}