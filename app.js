//===================================Assignment # 5 JAVASCRIPT======================//
//=======================================MATH EXPRESSIONS===========================//



//Q1: Write a program that take two numbers & add them in a new variable. Show the result in your browser.
//Ans :
// var number1 = 3;
// var number2 = 5;
// var newNumber = number1 + number2;
// document.write ( "The sum of " + number1 + " and " + number2 +  " is " + newNumber + "<br>" );


//Q2:. Repeat task1 for subtraction, multiplication, division & modulous.
//Ans:
// var number1 = 3;
// var number2 = 5;

// var newNumber = number1 - number2;
// document.write ( "The subtraction of " + number1 + " and " + number2 +  " is " + newNumber );

// var newNumber = number1 * number2;
// document.write ( "The multiplication of " + number1 + " and " + number2 +  " is " + newNumber );

// var newNumber = number1 / number2;
// document.write ( "The division of " + number1 + " and " + number2 +  " is " + newNumber );

// var newNumber = number1 % number2;
// document.write ( "The module of " + number1 + " and " + number2 +  " is " + newNumber );


//Q3:
//Ans:
// var value;
// document.write ( "Value after variable declaration is " + value + "<br>" );
// var number = 5;
// document.write ( "Initial value: " + number + "<br>" );
// var increament = ++number; 
// document.write ( "Value after increament is " + increament + "<br>" );
// var addition = increament + 7;
// document.write ( "Value after addition is " + addition + "<br>" );
// var decreament = --addition;
// document.write ( "Value after decreament is " + decreament + "<br>" );
// var division = decreament % 3;
// document.write ( "The reminder is " + division + "<br>");


//Q4:Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 movie tickets.
//Ans:
// var price = 600;
// var quantity = 5;
// document.write ( "Total cost to buy " + quantity + " movie tickets  is " + price*quantity );


//Q5:Write a script to display multiplication table of  number 4 in your browser.
//Ans:
// var table = 4;
// var num1 = 1;
// var num2 = 2;
// var num3 = 3;
// var num4 = 4;
// var num5 = 5;
// var num6 = 6;
// var num7 = 7;
// var num8 = 8;
// var num9 = 9;
// var num10 = 10;
// document.write ( "<b> Table of </b>" + table + "<br>" + "<br>" );
// document.write ( table + "x" + "1" + "=" + table*num1 + "<br>");
// document.write ( table + "x" + "2" + "=" + table*num2 + "<br>");
// document.write ( table + "x" + "3" + "=" + table*num3 + "<br>");
// document.write ( table + "x" + "4" + "=" + table*num4 + "<br>");
// document.write ( table + "x" + "5" + "=" + table*num5 + "<br>");
// document.write ( table + "x" + "6" + "=" + table*num6 + "<br>");
// document.write ( table + "x" + "7" + "=" + table*num7 + "<br>");
// document.write ( table + "x" + "8" + "=" + table*num8 + "<br>");
// document.write ( table + "x" + "9" + "=" + table*num9 + "<br>");
// document.write ( table + "x" + "10" + "=" + table*num10 + "<br>");


//Q6:The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a.Store a Celsius temperature into a variable.
//b.Convert it to Fahrenheit & output “NNoC is NNoF”.
//c.Now store a Fahrenheit temperature into a variable.
//d.Convert it to Celsius & output “NNoF is NNoC”.
//Conversion Formula: 
//C = ( F - 32 ) x5 / 9
//F = ( C X 9/5) + 32
//Ans:
// var celcius = +prompt ( "Enter temperature in Celcius" );
// var Fahrenheit = +prompt ( "Enter temperature in Fahrenheit" );
// document.write ( "Temperature " + celcius + "<sup>0</sup>C" + " in Fahrenheit is " +((celcius*9/5)+32) + "<sup>0</sup>F" + "<br>") ;
// document.write ( "Temperature " + Fahrenheit + "<sup>0</sup>F" + " in Celcius is " + ((Fahrenheit-32)*5/9) + "<sup>0</sup>C" + "<br>");


//Q7:Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables.
//a.price of item 1.
//b.price of item 2.
//c.ordered quantity of item 1.
//d.ordered quantity of item 2.
//e.shipping charges.
//Ans:
// var priceOfItem1 = +prompt("Write the price of item 1.")
// var quantityOfItem1 = +prompt("Write the quantity of item 1.");
// var priceOfItem2 = +prompt ("Write the price of item 2.");
// var quantityOfItem2 = +prompt("Write quantity of item 2.");
// var shippingCharges = 100;
// document.write ( " <b> Shopping Cart <b> " + "<br>" + "<br>" + " <br>" + "<br>" );
// document.write ( "Price of item 1 is " + priceOfItem1 + "<br>" );
// document.write ( "Quantity of item1: " + quantityOfItem1 + "<br>" );
// document.write ( "Price of item 2 is " + priceOfItem2 + "<br>" );
// document.write ( "Quantity of item2: " + quantityOfItem2 + "<br>" );
// document.write ( "Shipping charges are " + shippingCharges + "<br>" + "<br>" );
// document.write ( "Total cost of your order is " + (priceOfItem1*quantityOfItem1 + priceOfItem2*quantityOfItem2 + shippingCharges) ) ;


//Q8:Store total marks & marks obtained by a student in 2 variables compute the percentage and show the result in your browser.
//Ans:
// var totalMarks = +prompt( "Enter the total marks of student.");
// var marksObtained = +prompt( "Enter the marks obtained by student.");
// document.write ( "<b> Marks Sheet <b>" + "<br>" + "<br>" + "<br>" )
// document.write ( "Total marks: " + totalMarks + "<br>" );
// document.write ( "Marks obtained: " + marksObtained + "<br>");
// document.write ( "Percentage: " + (marksObtained/totalMarks*100 + "%" + "<br>" ));


//Q9:Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistan rupees. Perform all calculations in a single expression.
//(Exchange rates : 1 US Dollar = 104.80 Pakistan Rupee and 1 Saudi Riyal = 28 Pakistan rupees.)
//Ans:
// var UnitedStatedollars = 10;
// var SaudiRiyals = 25;
// var conversionInToPkr = (UnitedStatedollars*104.80) + ( SaudiRiyals*28);
// document.write ( "<b> Currency in PKR <b>" + "<br>" + " <br>" + "<br>" );
// document.write ( "Total currency in PKR: " + conversionInToPkr + "<br>" );


//Q10:Write a program to initialize a variable with some number and do arithmetic in following sequence:
//a.Add 5.
//b.Multiply by 10.
//c.Divide the result by 2.
//Perform all the calculation in a single expression.
//Ans:
// var number = +prompt( "Write any numbere here." ); var addition = number + 5; var multiplication = addition*10; var division = multiplication/2;
// document.write ( division + "<br>" );


//Q11:Forgot how old someone is. Calculate it! 
//a.Store the current year in the variable.
//b.Store their birth year in a variable.
//c.Calculate their 2 possible ages based on the stored values.
//Ans:
// var currentYear = +prompt ( "Enter current year!");
// var birthYear = +prompt ( " Enter your birth year");
// var yourAge = currentYear-birthYear;
// document.write ( "Age Calculator" + "<br>" + "<br>" );
// document.write ( "CurrentYear: " + currentYear + "<br>");
// document.write ( "Birth Year: " + birthYear + "<br>" );
// document.write ( "Your Age: " + yourAge );


//Q12:Claculate properties of a circle.
//a. Store a radius in to a variable.
//b. Calculate the circumference based on the radius. (Hint : Circumference 0f a cricle = 2(pi)r, pi = 3.142)
//c. Claculate the area based on the radius. (Hint : Area of a circle = (pi)r2, pi = 3.142)
//Ans:
// var radius = +prompt( "Enter the radius of a circle" );
// var circumference = 2*3.142*radius;
// var area = 3.142*(radius**2);
// document.write ( "<b> The Geometrizer <b>" + "<br>" + "<br>" );
// document.write ( "Radius of a circle: " + radius + "<br>" );
// document.write ( "The circumference is " + circumference + "<br>" );
// document.write ( "The are is: " + area );


//Q13:Ever know how much a "lifetime supply" of your favorite snack is ?
//a.Store your favorite snack in to a variable.
//b.Store your current age in to a variable.
//c.Store a maximum age in to a variable.
//d.Store an estimated amount per day (as a number).
//e.Calculate how many would you eat total for the rest of your life.
//Ans:
// var favoriteSnack = prompt ( "Enter your favorite snack. " );
// var currentAge = +prompt ( "Enter your current age." );
// var maximumAge = +prompt ( "Enter your estimated max age");
// var snackPerDay = +prompt ("Enter the amount of snack per day");
// var totalAmountOfSnack = (maximumAge-currentAge)*365 ;
// document.write ( "<b> The Lifetime Supply Calculator <b>" + "<br>" + "<br>" + "<br>" );
// document.write ( "Favorite snack: " + favoriteSnack + "<br>" );
// document.write ( "Current age " + currentAge + "<br>" )
// document.write ( "Estimated maximum age: " + maximumAge + "<br>" );
// document.write ( "Amount of snack per day: " + snackPerDay + "<br>" );
// document.write ( "You will need " + totalAmountOfSnack + favoriteSnack + " to last you until the ripe old age of " + maximumAge );





//===================================================Chapter # 5 completed==========================================//