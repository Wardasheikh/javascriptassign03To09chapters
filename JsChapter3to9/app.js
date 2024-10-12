// ********** CHAPTER 03 ********
// ANS 01



var height = 170;
var newHeight = height+10;
alert("New height is " + newHeight);



// ANS 02

var num1 = 50;
var num2 = 30;
var sum = num1 + num2;
alert(sum);



// ANS 03

var numToBeAdded = 20;
var total =  numToBeAdded +170;
alert("total"+ total);


// ANS 04

var price = 120;
var tax = price * 10;
var totalPrice = price+tax;
alert("Total price"+totalPrice);

// ********CHAPTER 04 ***********
// 01
var myAddress="Karachi";
alert(myAddress);

// 02

var userName = "wardah";
var userEmail = "war@gmail.com";
var userPassword = 12345;
alert(userName+" "+userEmail+" "+ userPassword);

// 03

var userAddress = "";
var userAddress = "Pakistan";
alert(userAddress);


// 04

var rose = "Floribundas";
console.log(rose);

var Rose = "Floribundas";
console.log(Rose);




// **********CHAPTER 05 ************
// 01

var num1 = 25;
var num2 = 30;
var sum = num1 + num2
alert(sum);

 // 02
   
var num1 = 25;
var num2 = 5;
sum = num1+num2;
alert(sum);

// 03

var modulusResult = 27 % 4;
alert("modulusResult"+modulusResult);

// ******CHAPTER 06 ********
// 01
var num = 5;
var newNum = num++;
alert(num);
alert(newNum);


// 02

var counter  = 10;
var newCounter = ++counter;
var newCounter = ++counter;
alert(counter);


// 03

var point = 20;
point--;
alert(point)
++point;
alert(point);

// 04

var number = 0;
var newNumber = ++number;
var newNumber = ++number;
var newNumber = ++number;

alert(number)

// *********CHAPTER 07************
// 01

var modulusOperator = 20%6;
console.log(modulusOperator);


// 02

var expressValue=(6+2)*(5-3);
console.log(expressValue);

//03

var value1 = 25;
var value2 = 5;
console.log(value1 + value2);
console.log(value1 - value2);
console.log(value1 * value2);
console.log(value1 / value2);

//04

 var ans = 2+3*4-1;
 alert(ans);



  // **********CHAPTER 08************

// 01
  var userName = prompt("what is your name?");
  alert("my name is"+userName+"!");

 //02

 var abc = prompt("how old are you?");
var age = 20;

 if(age===abc){
alert("you are"+age+"years old");
 }else{
    alert("no age provided");
 }



 // 03

 var birds = prompt("how many pets do you have?");
 var pets = 10;

 if(pets===birds){
alert("you have"+pets+"pets");

 } else{
    alert("you didnot enter anything");
 }

 // 04
 var userNum = prompt("Enter a number between 1 and 10");
 alert(userNum*2);

// 05
var fav = prompt("what is your favourite number?");
var favNum = 9;
if(favNum===fav){
alert(fav)
}else{
   alert(favNum=9);
}





/// *********CHAPTER 09**********

// 01
var a = prompt ("what is the capital of France?");
var b = "paris";
if(a===b){
alert("correct!");

}else{
   alert("try again"+"correct ans is Paris");
}

// 02
var a = prompt("what is the capital of united kingdom?");
var b = "london";
var c = "The united Kingdom";

if(a==b){
alert("correct");

} elseif(a==c){
alert("correct")

}else{
   alert("Incorrect");
}


// 03
var score = 0;
var a = prompt("what is capital of france?");
var b = "paris";
if(a==b){
score= score+1;
alert("correct your score is"+score);
}else{
   alert("incorrect");
}


// 04

var ger = prompt("what is the capital of Germany?");
var num = prompt("what is 10+10"?);
var a = ("Berlin");
var b = ("20");

if(ger==a && num==b){
alert("you got both right");

}elseif(ger==a || num==b){
alert("you got one correct")

}else {
   alert("you got none correct")
}






























