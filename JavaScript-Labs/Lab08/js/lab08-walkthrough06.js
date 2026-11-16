/* add code below this */
var stringOne = new String("Test");
var stringTwo = "Test";
var stringThree = "Test";
var stringFour = new String("Test");

document.write("<br>typeof stringOne=" + typeof stringOne);
document.write("<br>typeof stringThree=" + typeof stringThree);

if (stringOne == stringTwo)
   document.write("<br>stringOne has equal value to stringTwo");
if (stringOne == stringFour)
   document.write("<br>stringOne has equal value to stringFour");
if (stringOne === stringTwo)
   document.write("<br>stringOne has equal value and equal type to stringTwo");
if (stringTwo === stringThree)
   document.write("<br>stringTwo has equal value and equal type to stringThree");
if (stringTwo === stringFour)
   document.write("<br>stringTwo has equal value and equal type to stringFour");

var dateOne = new Date();
document.write("<p>" + dateOne + "</p>");
document.write(Math.PI + "<br/>");
document.write(Math.sqrt(4) + "<br/>");
document.write(Math.random() + "<br/>");
