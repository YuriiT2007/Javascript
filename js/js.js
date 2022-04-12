// let abra = 25689;//--namber--//
// let jhgkj = "coconat23"; //--string--//
// let hjg = null;//--пустота--//
// let oi = true; //--правд--/
// let ppo = false;//--не правд--//
// let iu = undefined;//--undefined--//
// let fjfj = NaN;//-не число--//
// const gfd = NaN;
// console.log(typeof(gfd));

// const username = "Mangoщщ";
// alert("Юра привет", username);
// const is = confirm("Подтвердите регистрацию")
// console.log(is);
// // const bt = prompt("ку-ку-ру-ку")
// // console.log(bt);

// // const value = prompt("Please enter a number!");
// // console.log(typeof value); // "string"
// // console.log(value); // "5"
// // const x = 10;
// // const y = 7;
// // console.log(x + y);
// const d = 12;
// const l = 8;
// console.log(d - l);



// console.log("x > y:", x > y);
// console.log("x !== y:", x !== y);

// const valueA = 5;
// console.log(typeof Number(valueA));


// const ValueB = "random string";
// console.log(Namber(ValueB));

// const validNumber = Number("51");
// console.log(Number.isNaN(validNumber));
// console.log(Math.floor(1.7)); // 1
// const a = "Mango " + "is " + "good";
// console.log(a);
// console.log(1 + "2" + 4);//12

// Используя переменные необходимо составить строку с подставленными значениями
// const a = "Манго";
// const f = 207;
// const greeting =
//   "Welcome " + a + ", your room number is " + f + "!";
// console.log(greeting); // "Welcome Mango, your room number is 207!"
// const a = "Манго";
// const f = 207;
// const greeting = `Welcome ${a}, yuor rum id good ${f} "!"`;
// console.log(greeting);

//
// const a = "Манго";
// const c = 207;
// const greeting = `Алена ${a}, I love you ${c}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"

// let cost = 0;
// const b = "pro"
// if (cost === b) {
//     cost=100
// }
// console.log(cost);
// const a = 5;
// const b = 10;
// let c = a > b ? a : b;
// console.log(c);



// const s = 5;
// const f = 10;
// let d;
// if (s > f) {
//      d = s;
// }
// else {
//      d = f;
// }

// console.log(d);

// ***************************************************************
// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const massage = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(massage);
// ************************************************************

// let pricePerDroid = 800;
// let orderedQuantity = 6;
// let deliveryFee = 50;
// let totalPrice = ((pricePerDroid * orderedQuantity) + deliveryFee);

// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// *************************************************************************

// function sayHi() {
//     console.log("Hello, this is my first function!");
// }
// sayHi();


// ******************************************************************************
// function add(a,b,c) {
//  console.log(`Addition result equals`,a+b+c );
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15)
// *******************************************************************
// function add(a, b, c) {
//   // Change code below this line
// return ( a + b + c);


//   // Change code above this line
// }

// // add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));
// **************************************************************
// function pipi (name, prise) {
//     const massage = `Я у мамі ${name} молодйц ${prise}`
//     return massage;
// }


// console.log(pipi(15,30));
// ******************************************************
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity*pricePerItem;

//   // Change code above this line
//   return totalPrice;
// };
// ************************************************************
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity*pricePerItem;

//   // Change code above this line
//   return totalPrice;
// };
// console.log(calculateTotalPrice (500, 200))
// ***********************************************************
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
// let totalprice = orderedQuantity*pricePerDroid+deliveryFee;
// let message = `You ordered droids worth ${totalprice} credits. Delivery (${deliveryFee} credits) is included in total price.`

//   // Change code above this line
//   return message;
// }
// console.log(makeOrderMessage(50, 20, 3));
// ******************************************************************
//  function isAdult(age) {
//   // Change code below this line

//   const passed = (age>=18) ;

//   // Change code above this line
//   return passed;
// }
// // console.log(isAdult(14));
//****************************************************************8 */
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password===SAVED_PASSWORD ;

//   // Change code above this line
//   return isMatch;
// }
// *********************************************************************
// function checkAge(age) {
//   let message;

//   if (age>=18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }
// ********************************************************************
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line

// a = a + 2;
// b = b - 4;
// c = c * 3;
// d = d / 10;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;
// *****************************************************************

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
// let totalPrice = pricePerDroid*orderedQuantity;
// if (totalPrice>customerCredits){
//   message = "Insufficient funds!";
//   }
// else  {
 
//   message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//   }
 
//   // Change code above this line
//   return message;
// }
// console.log(makeTransaction(500, 10, 5000));


// *******************************************************************
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password===null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password===ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }
// *****************************************************************
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// if(ordered===0){
//   message = "There are no products in the order!";
// }
// else if (ordered>available){
//   message = "Your order is too large, there are not enough items in stock!"
// }
// else{
//   message = "The order is accepted, our manager will contact you"
// }
//   // Change code above this line
//   return message;
// }

// ************************************************************************
// function isNumberInRange(start, end, number) {
//   const isInRange = number>=start && number<=end ; // Change this line

//   return isInRange;
// }
// ***************************************************************************
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType==="pro"|| subType === "vip" // Change this line

//   return canAccessContent;
// }
// ***********************************************************************
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange =!isInRange ; // Change this line

//   return isNotInRange;
// }
// console.log(isNumberNotInRange(20, 50, 76))
// **************************************************************************
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   }
//   else if (totalSpent >= 20000 && totalSpent <= 50000) {
//     discount = SILVER_DISCOUNT;
//   }
//   else if (totalSpent >= 5000 && totalSpent <= 20000) {
//       discount = BRONZE_DISCOUNT;
//     }
//   else if (totalSpent <= 5000) {
//       discount = BASE_DISCOUNT
//     }
//   // Change code above this line
//   return discount;
// }
// console.log(getDiscount(46900));

// ************************************************************************
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   // if (ordered > available) {
//   //   message = "Not enough goods in stock!";
//   // } else {
//   //   message = "The order is accepted, our manager will contact you";
//   // }
// message = ordered > available ?  "Not enough goods in stock!" : "The order is accepted, our manager will contact you"
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(200,20))
// **********************************************************************
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
// message = ADMIN_PASSWORD===password ? "Access is allowed" : "Access denied, wrong password!";
//   // Change code above this line
//   return message;
// }
// ***************************************************************************
// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case "starter":// Change this line
//        price = 0; // Change this line
//       break;

//     case "professional":  // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization":// Change this line
//       price =50 ; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }
// *******************************************************************
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   // if (password === null) {
//   //   message = "Canceled by user!";
//   // } else if (password === ADMIN_PASSWORD) {
//   //   message = "Welcome!";
//   // } else {
//   //   message = "Access denied, wrong password!";
//   // }
//   switch(password){
//   case null:
//   message = "Canceled by user!"
//   break;
//   case ADMIN_PASSWORD:
//   message = "Welcome!"
//   break;
//   default:
//   message = "Access denied, wrong password!"
//   break;
//   }
//   // Change code above this line
//   return message;
// }
// ********************************************************************
// function getShippingCost(country){
//   let message;
//   // Change code below this line
// switch(country){
//   case "China":
//   message = `Shipping to China will cost 100 credits`;
//   break;
//   case "Chile":
//   message = "Shipping to Chile will cost 250 credits";
//   break;
//   case "Australia":
//   message = "Shipping to Australia will cost 170 credits";
//   break;
//   case "Jamaica":
//   message = "Shipping to Jamaica will cost 120 credits"
//   break;
//   default:
//   message = "Sorry, there is no delivery to your country"
//   console.log(message)
// }
//   // Change code above this line
//   return message;
// }
// console.log(getShippingCost("Chile"))
// **********************************************************************
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }
// console.log(getNameLength("Poli"))
// *********************************************************************
// const courseTopic = "JavaScript essentials";
// Change code below this line

// const courseTopicLength = courseTopic;
// console.log(courseTopic.length)
// const firstElement = courseTopic;
// console.log(courseTopic[0]);
// const lastElement = courseTopic;
// console.log(courseTopic[courseTopic.length -1]);
// // Change code above this line



// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = (courseTopic.length);

// const firstElement = (courseTopic[0]);

// const lastElement = (courseTopic[courseTopic.length -1]);

// // Change code above this line
// ***************************************************************************
// function getSubstring(string, length) {

//   const substring = string.slice(0,length); // Change this line
  
  
//   return substring;
// }
// console.log(getSubstring("Hello world", 8))
// ************************************************************************
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
// if(message.length<maxLength){
//   result = message.slice(0, message.length);
//   }
// else {
//   result = `${message.slice(0,maxLength)}...`;
//   }
//   /// Change code above this line
//   return result;
// }
// console.log(formatMessage("Curabitur ligula sapienaaa", 12))

// **************************************************************

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
// if(message.length<=maxLength){
//   result = message.slice(0, message.length);
//   }
// else {
//   result = `${message.slice(0,maxLength)}...`;
//   }
  
//   /// Change code above this line
//   return result;
// }
// console.log(formatMessage('Curabitur ligula sapien', 23))

// *******************************************************************
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase() ; // Change this line

//   return normalizedInput;
// }
// *******************************************************************
// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   return result;
// }
// ********************************************************************
// function checkForSpam(message) {
//   let result;
//   // Change code below this line
// if(message.toLowerCase().includes("sale")){
//   result = true;
//   }
// else if (message.toLowerCase().includes("spam")) {
//   result = true;
//   }
// else if (message.toLowerCase().includes(!"spam")){
//   result = folse;
//   }

//   // Change code above this line
//   return result;
// }
// console.log(checkForSpam("Get best  offers now!"))
// *****************************************************************
// const clients = ["Mango", "Poly", "Ajax"];
// clients[1] = "kyky";

// console.log(clients);
// const clients = ["Mango", "Poly", "Ajax"];
// const lastElement = clients.length - 1;
// console.log(lastElement);


// **************************************************************************
// const string = "javascript";

// for (const a of string) {
//     console.log(a);
// }
// const clients = ["Mango", "Polys", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На каждой итерации будем проверять совпадает ли элемент массива с
//   // именем клиента. Если совпадает то мы записываем в message сообщение
//   // об успехе и делаем break чтобы не искать дальше
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }

//   // Если они не совпадают то запишем в message сообщение об отсутствии имени
//   message = "Клиента с таким именем нету в базе данных!";
// }

// console.log(message); // "Кли
// **************************************************************************
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 3;

// Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }
// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript это интересно";
// console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]
// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript это lf интересно";
// console.log(message.split("")); // ["JavaScript", "это", "интересно"]
// ************************************************************************
// const clients = [3, 6, 9,10];
// for (let i = 0; i < clients.length; i += 1);
// console.log(clients[1])

// const clients = [3, 6, 9,10];

// for (const client of clients) {
//   console.log(client);
// }


// function filterArray(numbers, value) {
//    // Change code below this line


// // numbers.push(value);
// // // console.log(numbers); // [1]
// // Change code above this line
//     for (let i = 0; i < numbers.length; i += 1);
    
//     if (numbers[i] <= value) {
//     continue;
//   }
// // console.log(clients[1])
 
//    console.log(`Число больше чем ${value}: ${numbers[i]}`); // 18, 29, 34
// // }
    
// }
// console.log.filterArray([1, 2, 3, 4, 5], 3)
// function filterArray(numbers, value) {
//     //  const numbers = [i];
//     // let  value ;

// ***********ТЕМА************************************************
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] >= value) {
//             // continue;
//             console.log(numbers[i])
//         }

//         // console.log(numbers[i])// 18, 29, 34
//         // return;
//     }
// }
// filterArray([12, 24, 8, 41, 76], 20)   //
// ***********************************************************************

// const numbers = [1,3];

// numbers.push(5);
// console.log(numbers);


// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(fruit);
// }

// const fruit = "apple";

// if (
//   fruit === "apple" ||
//   fruit === "strawberry" ||
//   fruit === "cherry" ||
//   fruit === "cranberries"
// ) {
//   console.log("It is a red fruit!");
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }
// *********************************************************************
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   let message;

//   switch (password) {
//     case ADMIN_PASSWORD:
//     message = "Canceled by user!"
//     break;
//     default:
//   message = "Access denied, wrong password!"
//   break;
//   }
//   return message;
  // Change code above this line
// }**********************************************************************

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   // if (password === null) {
//   //   message = "Canceled by user!";
//   // } else if (password === ADMIN_PASSWORD) {
//   //   message = "Welcome!";
//   // } else {
//   //   message = "Access denied, wrong password!";
//   // }
//   switch(password){
//   case null:
//   message = "Canceled by user!"
//   break;
//   case ADMIN_PASSWORD:
//   message = "Welcome!"
//   break;
//   default:
//   message = "Access denied, wrong password!"
//   break;
//   }
//   // Change code above this line
//   return message;
// }
// *****************************************************************
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line



//   if (password === ADMIN_PASSWORD) {
//     return  ("Welcome!");
//   }
//     return ("Access denied, wrong password!");
 

 
//   // Change code above this line
// }
// *********************************************************************
// const fruits = ["apple", "plum", "pear", "orange"];
// **********************************************************************
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];
// // Change code below this line
// ***********************************************************************
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1]= "peach";
// fruits[3]= "banana";
// // Write your code under this line
// *************************************************************************
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex =fruits.length-1;
// const lastElement= fruits[lastElementIndex];
// // Change code below this line
// **********************************************************************
// function getExtremeElements(array) {
//   return [array[0], (array[array.length - 1])];
  
//   ******
//   //  console.log(array[0]);
//   //  console.log(array[array.length - 1]);
  
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]))

// ***********************************************************************
// public static void printArrayInConsole(int[] inputArray) {
//     for (int i = 0; i < inputArray.length; i++) {
//         System.out.print(inputArray[i] + " ");
//     }
//     System.out.println();
// }
// *****************************************************************
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
// words = (message.split(delimeter));
//   // Change code above this line
//   return words;
// }
// **********************************************************************
// function calculateEngravingPrice(message, pricePerWord) {
//   let array = message.split(' ');
//        let result = array.length * pricePerWord;
//       return result;
//    // Change code below this line
//   // console.log(message.split(" "));
//   // console.log()
//   // console.log(message.lenght);
//    // Change code above this line
// }
// console.log(calculateEngravingPrice("JavaScript in my blood", 20))
// ***********************************************************************

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
// string = array.join(delimeter);


//   // Change code above this line
//   return string;
// }
// ********************************************************************
// function slugify(title) {
 
  
//   let array = title.toLowerCase();
//   let result = array.split(" ");
//   let good = result.join("-")
//       return good;

//   // Change code above this line
// }
// console.log(slugify("Ten secrets of JavaScript"))
// ********************************************************************
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// // const firstTwoEls = fruits.slise(1, 2);
// // const nonExtremeEls = fruits.slise(1, 4);
// // const lastThreeEls = fruits.slise(-3);
// console.log(fruits.slice(0, -3));
// console.log(fruits.slice(1, 4));
// console.log(fruits.slice(-3))
// ************************************************************
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients) ; // Change this line
// *********************************************************************
// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
  
//   let masiv = firstArray.concat(secondArray);
//   let  asa;
 
//   if (masiv.lenght > maxLength) {
//    asa = masiv.slise(0, maxLength);
//   } else {
//     asa = masiv;
//   }
//   return asa;
  // let newArray = firstArray.concat(secondArray);
  // let Array;
  // if (newArray.length > maxLength) {
  //   Array = newArray.slice(0, maxLength);
  // } else {
  //   Array = newArray;
  // }
  // return Array;


    
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 2));
// *********************************************************************
// const start = 3;
// const end = 7;

// for (let i = start ; i <= end ; i += 1) { // Change this line
//   console.log(i);
// }
// *************************************************************************
// function calculateTotal(number) {
//   let result = 0;
//   for (let i = 0; i <= number; i += 1)  result = result + i;
//   return result;
// }
// console.log(calculateTotal(6));


// function calculateTotalPrice(order) {
//   let total = 0;
  
//   for (let i = 0; i <= order.lenght; i += 1) {
//   total += order[i];
//   // Change code below this line
//  }
//     return total;
//   // Change code above this line

// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// ************************************************************
// function findLongestWord(string) {
//   // Change code below this line
//   // for (let i = 0; i <= string.lenght; i += 1) {
//   //   return [i]
//   let a;
//   a = string.split(" ");
//   return a;

//   }


    

// function findLongestWord(string) {
//   // Change code below this line
//   let a = string.split(" ");
//   let total = a[0];
//   for (let i = 0; i <= a.lenght; i += 1) {
//     if (a[i].lenght > total.lenght) {
//       total = a[i];}
    
//   }
   
// //     let total = 0;
// //     if (a[i].lenght > total.lenght) {
// //       console.log(total);
// //  }

    
//   return total;

// // }

//   // Change code above this line
// }
// console.log(findLongestWord(" quick brown fox jumped over the lazy dog"));


// ************************************************************************

// function findLongestWord(string) {
//   // Change code below this line
//   let newArray = string.split(' ');
//   let maxWord = newArray[0];
//   for (let i = 0; i < newArray.length; i += 1) {
//     if (newArray[i].length > maxWord.length) {
//       maxWord = newArray[i];
//     }
//   }
//   return maxWord;
// }
//    console.log(findLongestWord(" quick brown fox jumped over the lazy dog"));
// ************************************************************************

// function createArrayOfNumbers(min, max) {
//   const numbers = [i];
//   // Change code below this line
//   for (let i = min; i < max; i += 1) {
//     // Change code above this line
  
//     return numbers;
//   }
// }
// console.log(createArrayOfNumbers(14, 17));
  
// *********************************************************************
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i < max; i += 1)
//     // Change code above this line
//     numbers.push(i);
//   return numbers;
// }
// console.log(createArrayOfNumbers(14, 17));
// *****************************************************************
// function filterArray(numbers, value) {
//    // Change code below this line
//   const a = [];
//   for (let i = 0; i < numbers.lenght; i += 1){
//     let b = numbers[i];
//     if (numbers > value) {
//   a.push(b)
// }
//     return a;
// }


//   // Change code above this line
// }
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// *********************************************************************
//   function getCommonElements(array1, array2) {
//                    // Change code below this line
//     let array3 = [];
//     const namber;
//                    for (const number of array1) {
//                      if (array2.includes(number)) {
//                         array3.push(number);
//                      }

//                    }
//                    return array3;

//                   // Change code above this line
// }
//  console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))
// **********************************************************************
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }
//   for (const i of order) {
//     console.log(i);
//     total+= i;
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))

// function getEvenNumbers(start, end) {
//    // Change code below this line
// let a = [];
// for (let i = start; i <= end; i += 1){
//   // console.log(i);
//   if (i % 2 === 0) {
//     console.log(i)
//     a.push(i);
//   }
// }
// console.log(a)

    // Change code above this line
// }
  
// getEvenNumbers(2, 5)

// *******************************************************************
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// **********************************************************************
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//     }


  
//   // Change code above this line
// }
// }
// **********************************************************************
// function includes(array, value) {
//   // Change code below this line
// //
// for (const i of array){
//   if(value === i);
//   return i;
  
// }
 
  

// }




// console.log(includes([1, 2, 3, 4, 5], 17));
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// console.log(aptRating);
// const aptDescr = apartment.descr;
// console.log(aptDescr);
// const aptPrice = apartment.price;

// const a = apartment.tags;
// console.log(a);
// // Change co
// *******************************************************************
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
//  console.log(firstTag);
// const a = apartment.tags[2];
// console.log(a);
// // Change code above this line
// *******************************************************************

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const a = apartment["tags"];
// console.log(a);
// // Change code above this line
// *****************************************************************
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
  
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted")
// console.log(apartment.tags);
// // Change code below this line
// ****************************************************************
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
//   // Change code below this line
//   // Change code above this line
// };
// console.log(product.price)
// *********************************************************************
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = ['descr', 'rating', 'price'];
// const values = ['Spacious apartment in the city center', 4, 2153];
// for (keys in Object){
//    console.log(keys);
// }
// ********************************************************************
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line

//   keys.push(key);
//   values.push(apartment[key]);

//   // Change code above this line
// }
// if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
// }
//   function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for (const key in object) {
//      if (object.hasOwnProperty(key)) {
//        propCount += 1;
//   }
 
//    }
//   // Change code above this line
//    console.log(propCount)
//     return propCount;
// }
// countProps({ name: "Mango", age: 2 })
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = null;
// const pointer = null;
// ***************************************************************************
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// // const a = Object.keys(apartment);
// console.log(keys);
// for (const key of keys ){
//   console.log(key);
//   console.log(apartment[key]);
//   values.push(apartment[key]);

// }
// console.log(values);
// *************************************************************************
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   for (const key of object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//     console.log(countProps(object))
//   }

//   return propCount;
//   // Change code above this line
// }

// ******************************************************************
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(keys)
// ***********************************************************************
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const a = Object.values(salaries)
// for (const a in salaries) {
//      if (object.hasOwnProperty(a)) {
//        countTotalSalary += 1;
//   }
//   return totalSalary;
// }
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })
// *******************************************************************
// const fn = function (myobject) {
//   console.log(myobject);
// };
// fn ({ a: 1, b: 4 })
// ****************************************************************
// const temps = [14, -4, 25, 8, 11];


// console.log(temps);  // выводит масив чисел: [14 -4 5 8 11]

//************************************************ */
// const temps = [14, -4, 5, 8, 11];



// console.log(...temps); /// выводит набор отдельных чисел: 14 -4 5 8 11
//********************************************************** */
// const temps = [14, -4, 5, 8, 11, 25];


// console.log(Math.max(...temps)); выводит число 25;
/*********************************************************** */
// const temps = [14, -4, 5, 8, 11, 22];



// console.log(Math.max(14, -4, 5, 88, 11, 22)); Shown 88
/************************************************************* */

// const temps = [14, -4, 25, 8, 11];

// // Это точная, но независимая копия массива temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]



// const temps = [12, -4, 2, 8, 11];

// const copioftemps = [...temps];


// console.log(copioftemps); копирует [12, -4, 2, 8, 11]
//********************************************************** */
// const temps = [12. - 4, 23, -87];

// const copioftemps = [...temps];

// **********************************************************
// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);

// }

// const nambers = [5, 10, 20, 25];
  
// // for (let i = 0; i < nambers.length; i += 1) {
  
// //   console.log('Индекс ${i}, значение ${numbers[i]}');
// // }


// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });
// *************************************************
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
//   country: {
//     fara: 568,
//     para: 785,
//   },
//   land: {
//     canada: ["swiming", "music", "sci-fi"],
//   }
// };

// const c = book.country.fara;
// console.log(c); ////568,

// const f = book.land.canada;
// console.log(f);  выводит масив ["swiming", "music", "sci-fi"],
// const a = book.title;
// console.log(a);   /  a надо назвать bookTatle и в консоле будет The Last Kingdom;
// ********************************************************/

// const b = book.genres;
// console.log(b);

// const stay = book.country;
// console.log(stay)
/******************************************************** */
// const user = {
//   name: "Jacques Gluke",
//   taog: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const a = user.location;
// console.log(a);  масив {country: 'Jamaica', city: 'Ocho Rios'}


// const a = user.location.country;
// console.log(a);               Jamaica

// const f = user["tag"];
// console.log(f);

// const d = user["location"];
// console.log(d);

// const s = "taog";
// const b = user[s];
// console.log(b);

// *****************************************************

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// book.rating = 9;
// console.log(book);

// book.genres.push("hello world");
// console.log(book.genres);

// book.dadada = 90;
// book.trnslete = ["ua","ru"]
// console.log(book);


// ****************************************************
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };


// book.FAFa = 932;
// book.dada = ["ru", "ua"];

// console.log(book.FAFa);
// console.log(book.dada)

// const a = "ghh jhuh"
// const user = {
//   a: a,
// };


// console.log(user.a)
// *************************************************
// const proNano = "name";
// const user = {
//   age: 25,
//   [propName]: "Генри Сибола",
// }
// console.log(user.neme)
//************************************************
// const a = {
//   books: ["The Last hhhKind", "Drim Guardin"],
//   getBooks(o) {
    
//     console.log(a.books.push(o))
//   console.log(a.books);
//   },

// };
// a.getBooks("hgjfkd")
// console.log(a.books)
// bookShelf.getBooks()
// ********************************************

// / ✅ Логически и синтаксически сгруппированные сущности
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Это метод объекта
//   getBooks() {
//     console.log("Этот метод будет возвращать все книги - свойство books");
//   },
//   // Это метод объекта
//   addBook(bookName) {
//     console.log("Этот метод будет добавлять новую книгу в свойство books");
//   },
// };


// bookShelf.getBooks();
// bookShelf.addBook("Новая книга");
// **********************************
// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };
// bookShelf.getBooks();

// const pipiska = {
//   cat: 15,
//   dog: 20,
//   log: 25,
// }
// const pipiska2 = {
//   cat: 444,
//   dog: 3,
//   log: 555,
// }
// const pipiska3 = {
//   cat: 4,
//   dog: 3,
//   log: 333,
//   gog:"gfg"
// }

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line

//   const v =  Object.values(salaries)
//   for (let nan of v) {
//     totalSalary += nan;
//   }
//   console.log(totalSalary)
//   return totalSalary
  
// }
//   //60
// const ff = countTotalSalary(pipiska3)
//  ************************************
// JS V2 block-3----16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const val = Object.values(salaries);
//   for (let a of val){
//   totalSalary += a;
// }
//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// ********************************************
// 17 mod 3
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (let color of colors){
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);

// }

// *********************************************8


// var sports = ['футбол', 'бейсбол'];
// var total = sports.push('американский футбол', 'плавание');


// console.log(sports)

// ***********************************************




// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// console.log(products);

// function getProductPrice(productName) {
//   // Change code below this line
//   let a = null;
//   for (const pr of products) {
//     if (productName === pr.name) {
//       a = pr.price;
//     }
//   }
//   return a;
//   // Change code above this line
// }
// console.log(getProductPrice('Двигатель'));



// function getProductPrice(productName) {
//    // Пиши код ниже этой строки
//    let value = null;
//    for (product of products ) {
//       if (productName === product.name) {
//  	value = product.price;
//       }
//    }
//      return value;

//    // Пиши код выше этой строки
//  }
//  console.log(getProductPrice('Двигатель'));






// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
  // Ключ
  // console.log(book[key]);
  // Значение свойства с таким ключом
//   console.log(book[key]);
// }


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];


// for (const book of books) {
//   // Объект книги
//   // console.log(book);
//   // Название
//   // console.log(book.title);
//   // Автор
//   // console.log(book.author);
// //   // Рейтинг
// //   console.log(book.rating);
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];


// function getAllPropValues(propName) {
//   // Change code below this line
//   const a = [];
//   for (const product of products) {
//     // console.log(product);
    
//     for (const key in product) {
//   //     console.log(key);
//   // console.log(propName)
//       if (propName === key) {
//       a.push(product[key]);
//       }
//   //   else {
//   //     return a;
//   //  }

//     }
//     console.log(a)
//     }

//   // // Change code above this line
// }
// getAllPropValues('name')







// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const a = [];
//   // Change code below this line
//   for (const product of products) {
//     console.log(product[propName]);
//     if (product[propName]) {
//       a.push(product[propName]);
//     }
//     return a;
// }
 

//   // Change code above this line
// }
// console.log(getAllPropValues("name"));



// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// const array = [];
// for (let product of products){
//   let arraykeys = Object.keys(product);
//   console.log(arraykeys.includes(propName));
//   if (arraykeys.includes(propName)) {
//     array.push(product[propName]);
// }
// }

//   return array;
//   // Change code above this line
// }
// console.log(getAllPropValues("name"))


// const sdf = ["fsra", "para", "shara", "dyra"];
// console.log(sdf.includes("fsra"));



// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function addElement(newArray,name,price,quantity) {
//   const copyArray = [...newArray]
//   const newobg = { name: name, price: price, quantity: quantity };
//   copyArray.push(newobg);
//   return copyArray;
// }
// console.log(addElement(products,'andrey',34,22));
// console.log(products)



// const data = [];

// function operatorBase(emptydata, name, oper, tarif, bezlim) {
//   const newobj = { username: name, mobop: oper, stoim: tarif, cifra: bezlim }
//   emptydata.push(newobj)
//   return emptydata
// }

// console.log(operatorBase(data, "max", "bil", 700, false))
// console.log(operatorBase(data, "max", "bil", 700, false))
// console.log(operatorBase(data, "max", "bil", 700, false))
// console.log(operatorBase(data, "max", "bil", 700, false))


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let neArray
//   // Пиши код ниже этой строки
//   for (let product of products) {
//     if ( nearray === product.name){
//       return
//   }
// }


//   // Пиши код выше этой строки
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let a = 0;
//   for (let product of products) {
//     if (productName === product.name) {

//       a = product.price * product.quantity;
//       console.log(a);
//     }
   
// }
//  return a;
 
//   // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice("Radar"))



// const temps = [14, -4, 25, 8, 11];
// console.log(...temps);
// console.log(...temps);

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // {name: 'Манго'}
// // console.log(dog.name); // 'Манго'
// // console.log(dog.legs); // 4

// const num1 = 5;
// const num2 = 10;
// let biggerNumber =  num1 > num2 ? num1 : num2;

// if (num1 > num2) {
//   biggerNumber = num1;
// } else {
//   biggerNumber = num2;
// }

// console.log(biggerNumber);

// **********************************************************8?
// const firstBook = {
//   title: "Последнее королевство",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;

// console.log(firstTitle); // Последнее королевство
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: "Сон смешного человека",
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смешного человека
// console.log(secondCoverImage); // https://via.placeholder.com/640/480

// const firstBook = {
//   title: "Последнееeee королевство",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };
// console.log(firstBook.title)
const {
  title: firstTitle,
  coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
} = firstBook;

// console.log(firstTitle); // Последнее королевство
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: "Сон смешного человека",
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смешного человека
// console.log(secondCoverImage); // https://via.placeholder.com/640/480