// CHAPTER 21-25
// TASK1
// var firstName=prompt("Enter your first name?");
// var lastName=prompt("Enter your last name?");
// var fullName= firstName + lastName;
// alert("Welcome Dear, " +fullName );

// TASK2
// var userInput=prompt("Dear user enter your favorite mobile phone model?");
// var userLength=userInput.length;
// document.write("My Favorite phone is: " +userInput);
// document.write("<br>");
// document.write("Length of string:" +userLength);

// TASK3
// var character="Pakistani";
// var index=character.indexOf("n");
// document.write("String: " +character+"<br>");
// document.write("Index of 'n': " +index);

// TASK4
// var character="Hello World";
// var index=character.lastIndexOf("l");
// document.write("String: " +character+"<br>");
// document.write("Last Index of 'l': " +index);

// TASK5
// var character="Pakistani";
// var index = character.charAt(3);
// document.write("String: " +character+"<br>");
// document.write("Character at index 3: " +index);

// TASK6
// var firstName=prompt("Enter your first name?");
// var lastName=prompt("Enter your last name?");
// var fullName = firstName.concat(lastName);
// alert("Welcome Dear, " +fullName );

// TASK7
// var city="Hyderabad";
// var cityNew=city.replace("Hyder", "Islam");
// document.write("City: " +city+"<br>");
// document.write("After Replacement: " +cityNew);

// TASK8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var str=message.replace(/and/g, "&");
// document.write("Real: " +message+"<br>");
// document.write("Replaced: " +str)

// TASK9
// var char="472";
// var charType=typeof(char);
// var num=Number(char);
// var numType=typeof(num);
// document.write("Value: " +char+"<br>");
// document.write("Type: " +charType+"<br>");
// document.write("Value: " +num+"<br>");
// document.write("Type: " +numType);

// TASK10
// var userInput=prompt("Enter your string?");
// var userUpper=userInput.toUpperCase();
// document.write("User Input: " +userInput+"<br>");
// document.write("Upper Case: " +userUpper);

// TASK11
// var userInput=prompt("Enter your string?");
// var firstChar=userInput.slice(0,1);
// var otherChar=userInput.slice(1);
// firstChar=firstChar.toUpperCase();
// otherChar=otherChar.toLowerCase();
// var updatedInput=firstChar + otherChar;
// document.write("User Input: " +userInput+"<br>");
// document.write("Upper Case: " +updatedInput);

// TASK12
// var num = 35.36;
// var str = num.toString();
// str=str.replace(".","");
// document.write("Number: " +num+"<br>");
// document.write("Result: " +str);

// TASK13
// var userName=prompt("Enter your name?");
// var arr=userName;
// for (var i=0; i<arr.length;i++){
//     if(arr.charCodeAt(i) >=33 && arr.charCodeAt(i) <=64){
//         alert("Please enter a valid username");
//         break;
//     }
   
// }

// TASK14
// var bakeryItem=["cake", "apple pie", "cookie", "chips", "patties"];
// var item=prompt("Welcome to ABC Bakery. What do you want to order Sir/Maam?");
// item=item.toLowerCase();
//     if(bakeryItem.indexOf(item) !==-1){
//     alert(item +" is available at index "+bakeryItem.indexOf(item)+ " in our bakery");
//     }
//     else {
//     alert("We are sorry "+item+" is not available in our bakery");
//     }

// TASK15
// var notValid = false
//     var valid = false
//     var pass = prompt("Please Enter a password:")
//     if(pass.length !== 6){
//         notValid = true
//     }else{
//         for(var i=48;i<58;i++){
//             if(pass.charCodeAt(0) == i){
//                 notValid = true
//                 break;
//             }
//         }
//         for(var i=1; i<pass.length;i++){
//             for(var j=48;j<57;j++){
//                 if(pass.charCodeAt(i) == j){
//                     valid = true;
//                     break;
//                 }
//             }
//             if(valid){
//                 break;
//             }
//         }
//     }
//     if(notValid == false && valid == true){
//         document.write("Your password is: "+ pass)
//     }else{
//         document.write("Invalid password")
//     }


// TASK16
// var university="University of Karachi";
// var uni=university.split("");
// for(var i=0; i<uni.length;i++){
//     document.write(uni[i] +"<br>")
// }


// TASK17
// var str=prompt("Enter your string?");
// var lastChar=str.charAt(str.length-1);
// document.write("User Input: " +str+"<br>");
// document.write("Last character of input: "+lastChar);

// TASK18
// var str="The quick brown fox jumps over the lazy dog";
// str=str.toLowerCase();
// strNew=str.split(" ");
// var search=0;
// for (var i = 0; i < strNew.length; i++) {
// if( strNew[i]==="the"){
//     search++;
// }
// }
// document.write("Text: " +str+"<br>");
// document.write("There are "+search+" occurrence(s) of word 'the'");

// CHAPTER 26-30
// TASK1
// var num=prompt("Enter any positive number?");
// num=Number(num);
// var roundOff=Math.round(num);
// var floorNum=Math.floor(num);
// var ceilNum=Math.ceil(num);
// document.write("number: " +num+"<br>");
// document.write("round off value: " +roundOff+"<br>");
// document.write("floor value: " +floorNum+"<br>");
// document.write("ceil value: "+ceilNum );

// TASK2
// var num=prompt("Enter any negative floating number?");
// num=Number(num);
// var roundOff=Math.round(num);
// var floorNum=Math.floor(num);
// var ceilNum=Math.ceil(num);
// document.write("number: " +num+"<br>");
// document.write("round off value: " +roundOff+"<br>");
// document.write("floor value: " +floorNum+"<br>");
// document.write("ceil value: "+ceilNum );

// TASK3
// var num=prompt("Enter any number?");
// num=Number(num);
// var absoluteNum=Math.abs(num);
// document.write("The absolute value of "+num+" is " +absoluteNum);

// TASK4
// var diceNum=Math.random();
// diceNum=Math.round(diceNum);
// var randomNum=diceNum * 10;
// if (randomNum > 6){
//     randomNum = randomNum - 6;
// }
// else if(randomNum == 0){
//     randomNum=randomNum + 6;
// }
// document.write("random dice value: "+randomNum);

// TASK5
// var coinNum=Math.random();
// if (coinNum <= 0.5){
//     document.write("random coin value: Tails " +coinNum);
// }
// else{
//     document.write("random coin value: Heads " +coinNum);
// }

// TASK6
// var randomNum=Math.random();
// randomNum = randomNum * 100;
// randomNum=Math.round(randomNum);
// document.write("random number between 1 and 100: " +randomNum);

// TASK7
// var weight=prompt("Enter your weight?");
// var weight1=parseInt(weight);
// var weight2=parseFloat(weight);
// document.write(weight1);
// document.write("<br>")
// document.write(weight2);

// TASK8
// var secretNum = Math.random();
// secretNum = secretNum * 10;
// secretNum=Math.round(secretNum);
// var userNum=prompt("Enter any number between 1 to 10?");
// if (userNum == secretNum){
//     document.write("Congratulation! You guess correct number")
// }
// else{
//     document.write("Try Again!")
// }
// console.log(secretNum);

// CHAPTER 31-34
// TASK1
// var rightNow = new Date();
// document.write(rightNow);

// TASK2
// var month= ["January","February","March","April","May","June","July", "August","September","October","November","December"];
// var rightNow= new Date();
// var currentMonth=rightNow.getMonth();
// document.write("Current month: " +month[currentMonth]);

// TASK3
// var days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
// var rightNow = new Date();
// var currentday=rightNow.getDay();
// document.write('Today is ' +days[currentday])

// TASK4
// var days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
// var rightNow = new Date();
// var currentday=rightNow.getDay();
//      if (currentday===0 || currentday===6){
//         document.write('Its fun Day')  
//            }
//      else{
//         document.write('Wait for the Fun day')
//      }

// TASK5
// var rightNow = new Date();
// var currentmonthdate=rightNow.getDate();
    // if (currentmonthdate < 16){
    //     document.write('First Fifteen Days of the month')
    // }
    //  else{
    //     document.write('Last days of the month')
    //  }

// TASK6
// var rightNow = new Date();
// var currentmiliseconds=rightNow.getTime();
// document.write('Current Date:' +rightNow+"<br>");
// document.write('Elapsed miliseconds since January 1, 1970: ' +currentmiliseconds+"<br>");
// document.write('Elapsed minutes since January 1, 1970: ' +currentmiliseconds/(1000*60));

// TASK7
// var rightNow = new Date();
// var currenthour=rightNow.getHours();
// if (currenthour < 12){
//     document.write('Its AM')
// }
// else{
//     document.write('Its PM')
// }

// TASK8
// var laterdate= new Date('Dec 31, 2020');
// document.write('later date: '+laterdate+"<br>");

// var laterdate2= new Date('Dec 16, 2020');
// document.write('later date: '+laterdate2);

// TASK9
// var rightNow = new Date();
// var lastramzandate=new Date('June 18, 2015');
// console.log(lastramzandate);
// var msDiff=rightNow.getTime()-lastramzandate.getTime();
// var diffinDays=msDiff/(1000*60*60*24);
// diffinDays=parseInt(diffinDays)
// document.write(+diffinDays+' Days has passed since 1st Ramzan 2015')

// TASK10
// var rightNow = new Date();
// var refdate=new Date('Dec 5, 2015');
// var otherdate=new Date('Jan 1, 2015');
// var elapsedsec=refdate.getTime()-otherdate.getTime();
// var resultinsec=elapsedsec/(1000);
// var resultinmin=elapsedsec/(1000*60);
// document.write('On reference date ' +refdate+',' +resultinsec+ ' sceonds had passed since begining of 2015'+"<br>")
// document.write('On reference date ' +refdate+',' +resultinmin+ ' minutes had passed since begining of 2015')

// TASK11
// var rightNow = new Date();
// var a=rightNow.getHours()-1;
// var result=new Date();
// result=result.setHours(a)
// result=new Date(result);
// document.write("Current date: "+rightNow+"<br>");
// document.write("1 hour ago, it was "+result);

// TASK12
// var rightNow = new Date();
// var pastYears=rightNow.getFullYear()-100;
// var pastDate = new Date()
// pastDate=pastDate.setFullYear(pastYears)
// pastDate=new Date(pastDate);
// document.write("Current Date: " +rightNow+"<br>");
// document.write("100 years back, it was "+pastDate);

// TASK13
// var age=prompt('Enter your age?');
// age=Number(age);
// var rightNow=new Date();
// var currentyear=rightNow.getFullYear();
// console.log(currentyear);
// ageResult=currentyear-age;
// document.write('Your Age is:'+age+"<br>");
// document.write('Your Birth Year is:' +ageResult);

// TASK14
// document.write("<h1>K-Electric Bill</h1>");
// var rightNow = new Date();
// var month= ["January","February","March","April","May","June","July", "August","September","October","November","December"];
// var currentMonth = rightNow.getMonth();
// document.write("Customer Name: ABC Customer" +"<br>");
// document.write("Current Month: " +month[currentMonth]+"<br>");
// document.write("Number of units: 410" +"<br>");
// document.write("Charges per unit: 16 "+"<br>");
// document.write("Net Amount Payable (within due date): "+(410*16)+"<br>");
// document.write("Late payment surcharge: 350"+"<br>");
// document.write("Gross Amount Payable (after due date): "+((410*16)+350)+"<br>");

// CHAPTER 35-38
// TASK1
// function date(){
//     var rightNow = new Date();
//     document.write("<h1> Current date & time: <br>"+rightNow+"</h1>");
// }

// date();

// TASK2
// function name(){
// var firstName=prompt("Enter your first name?");
// var lastName=prompt("Enter your last name?")
// var fullName= firstName + " " + lastName;
// alert("Hello user " +fullName);
// }

// name();

// TASK3
//  function add(){
//     var firstNum=prompt("Enter your first number?");
//     var secondNum=prompt("Enter your second number?");
//     firstNum=Number(firstNum);
//     secondNum=Number(secondNum);
//     var result=firstNum + secondNum;
//     return result;
//  }

//  var sum=add();
//  alert(sum);

// TASK4
//     var firstNum=prompt("Enter your first number?");
//     var secondNum=prompt("Enter your second number?");
//     var operator=prompt("Enter your choice operation?");
//     firstNum=Number(firstNum);
//     secondNum=Number(secondNum);    
// function calculator(a,b,c){
//     var answer;
//     if (c==="+"){
//         answer= a + b;
//         return answer;
//     }
//     else if (c==="-"){
//         answer= a - b;
//         return answer;
//     }
//     else if (c==="*"){
//         answer= a * b;
//         return answer;
//     }
//     else if (c==="/"){
//         answer= a / b;
//         return answer;
//     }
//     else if (c==="%"){
//         answer= a % b;
//         return answer;
//     }
//     else{
//         alert('invalid operator');
//     }
    
// }

// var result=calculator(firstNum, secondNum, operator);
// document.write("First Number: " +firstNum+"<br>");
// document.write("Second Number: " +secondNum+"<br>");
// document.write("Operator: " +operator+"<br>");
// document.write("Result: " +result);

// TASK5
// var num=prompt("Enter number you want to square?")
// num=Number(num);

// function square(a){
//  var answer=Math.pow(a, 2);
//  return answer;
// }

// var result=square(num)
// document.write("Square of the number is: "+result)

// TASK6
// var num=prompt("Enter the number you want factorial of?");
// num=Number(num);
// function factorial(x){
//     var answer;
//     if (x === 0)
//     {
//        answer=1
//        return answer;
//     }
    
//     answer= x * factorial(x-1);
//     return answer;
            
// }

// var result=factorial(num);
// document.write("Factorial of the number is: " +result);

// TASK7
// var startCount=prompt("Enter your start counting number?");
// var endCount=prompt("Enter your end counting number?");
// startCount=Number(startCount);
// endCount=Number(endCount);  
// function counting(a,b){
//     for(var i=a; i<=b; i++){
//     document.write(i +"<br>");
//     }

// }
// counting(startCount,endCount)

// TASK8
// function calculatehyp(per,base){
//  function calculateSqr(a,b){
//   per=a*a;
//   base=b*b;
//  }
//  calculateSqr(per,base);
//  var result= per + base;
//  console.log(result);
// }
// calculatehyp(5,4)

// THROUGH USER INPUT
// var per=prompt("Enter the value of perpendicular?");
// var base=prompt("Enter the value of base?");
// per=Number(per);
// base=Number(base);

// function calculateHypotenuse(x,y){
//     function calculateSquare(a,b){
//         x=a*a;
//         y=b*b;
//     }
//     calculateSquare(x,y);
//         var result=x+y
//         document.write("Hypotenuse<sup>2</sup>: " +result)
//     }
// calculateHypotenuse(per,base)

// TASK9
// i)Arguments as value
// function calculateArea(a,b){
//     var result=a*b;
//     document.write("Area of rectangle: "+result);
// }
// calculateArea(2,3)

// ii)Arguments as variables
// var width=prompt("Enter the value of width?");
// var height=prompt("Enter the value of height?");

// function calculateArea(a,b){
//         var result=a*b;
//         document.write("Area of rectangle: "+result);
// }

// calculateArea(width,height)

// TASK10
// function palindrome(str){
//     var low =  str.toLowerCase()
//     var str1 = low.split('')
//     str1 = str1.reverse()
//     str1 = str1.join('')
//     if(low == str1){
//         document.write('Word is palindrome'+"<br>")
//     }else{
//         document.write("Word is not palindrome"+"<br>")
//     }
// }
// palindrome('maham')
// palindrome('Civic')
// palindrome('aisha')
// palindrome('madam')


// TASK11
// function conversion(character){
//  var characterNew=character.split(" ");
//  for(var i=0; i<characterNew.length; i++){
//  var word= characterNew[i];
//  var firstChar = word.charAt(0);
//  firstChar=firstChar.toUpperCase();
//  var otherChar=word.slice(1);
//  var sentence = firstChar.concat(otherChar);
//  characterNew[i] = sentence;
// }

// characterNew = characterNew.join(" ")
// document.write(characterNew)

// }

// conversion("the quick brown fox");

// TASK12
// var str=prompt("Enter any string?");

// function longestWord(word){
//     var arr=str.split(" ");
//     var index;
//     var length=0;
//     for (var i=0; i<arr.length;i++){
//         var long=arr[i].length;
//         if(long > length){
//             length=long;
//             index = i;
//         }
//     }
//     document.write("Example String: " +word+"<br>");
//     document.write("Expected Output: "+arr[index]);

// }
// longestWord(str);

// TASK13
// function letterSearch(str,letter){
//     var count = 0;
//     str = str.toLowerCase()
//     for(var i =0; i<str.length; i++){
//         if(letter == str[i]){
//             count++;
//         }
//     }
//     document.write("The number of occurences of letter "+ letter + " in a string is: " + count+"<br>")
// }
// letterSearch('JSResourceS.com', 's')
// letterSearch('SylaniWebDevelopmnt', 'l')

// TASK14
// function calcCircumference(radius){
//     var result = 2*Math.PI*radius
//     console.log("The circumference is: " + result)
// }
// function calcArea(radius){
//     var result = Math.PI * (radius*radius)
//     console.log("The area is: "+ result)
// }
// calcCircumference(5)
// calcArea(5)