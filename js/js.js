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
// ****************************************************************************
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;

// const { yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
// icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


// ***************************************************************


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }
  

// for (const book of books) {
//   const { title, author, rating } = book

//   console.log(title);
  // console.log(author);
  // console.log(rating);
// }

// for (const { title, author, rating } of books) {
//    console.log(title);
// }

// ***********************************************************8
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// const { today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg" },
//   tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, } = forecast;



// ******************************************************************

// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const todayLow = forecast.today.low;
//   const todayHigh = forecast.today.high;
//   const tomorrowLow = forecast.tomorrow.low;
//   const tomorrowHigh = forecast.tomorrow.high;

//   const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh }, } = forecast;
  
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// const {today:{low: todayLow, high:todayHigh}, tomorrow:{low: tomorrowLow, high: tomorrowHigh}, } = forecast;

// *********************************************************************


// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = scores;
// const worstScore = scores;
//  Math.max([89, 64, 42, 17, 93, 51, 26]);
// *********************************************************************
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores,...secondGroupScores,...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(worstScore)
// *******************************************************************
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings,...overrideSettings};

// console.log(finalSettings)
// ************************************************************
  


// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line

//   // Change code above this line
// }
// retern (...data);

// ****************************************************************************
// // Change code below this line
// function add(...args) {
//   // Change code above this line
//   let sum = 0;
// for (let nam of args){
// sum += nam;
// }
// return sum;
// }
// ***************************************************************************************



// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (firstNumber < arg){
//     total += arg;
    
//   }
  
//   }
//   return total;
//   // Change code above this line
// }
// ********************************************************************************************

// function findMatches(firstNumber, ...args) {
//   const matches = []; // Don't change this line
//   console.log(firstNumber);
//   console.log( args);
//   for (let i = 0; i < firstNumber.length; i++) {
//     console.log(firstNumber[i]);
//     if (args.includes(firstNumber[i])) {
//       matches.push(firstNumber[i]);
//     }
//   }
  
//   console.log(matches);
//   // Change code above this line
//   // return matches;
// }
// findMatches([1, 2, 7, 4, 5], 1, 8, 2, 7)

// ***************************************************

// // Change code below this line
// function findMatches(firstNumber, ...args) {
//   const matches = []; // Don't change this line
//   for (let i = 0; i < firstNumber.length; i++) {
//   // Change code above this line
//   if (args.includes(firstNumber[i])) {
//       matches.push(firstNumber[i]);
    
//     }
     
//   }
//     return matches;
//     }
// **************************************************************

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   updateBook(oldName, newName){
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   removeBook(bookName){
//     return `Deleting book ${bookName}`;
//   }
//   // Change code above this line
// };
// *******************************************************************
// const bookShelf = {
//   books: ["Последнее королевство"],
//   getBooks() {
//      return this.books;
//   },
 
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   // removeBook(bookName) {
//   //   const bookIndex = this.books.indexOf(bookName);
//   //   this.books.splice(bookIndex, 1);
//   // },
// };

// console.log(bookShelf.getBooks()); // []
// bookShelf.addBook("Мгла");
// // bookShelf.addBook("Страж снов");
// // console.log(bookShelf.getBooks()); // ["Последнее королевство", "Мгла", "Страж снов"]
// // bookShelf.removeBook("Мгла");
// // console.log(bookShelf.getBooks()); // ["Последнее королевство", "Страж снов"]


// *********************************************************************************

// (const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line

//  const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1,newName );

//     // Change code above this line
//   },
  
// };
// *******************************************************************************

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
// getPotions(){
//   return this.potions;
// }
//   // Change code above this line
// };

// *******************************************************************
// 38


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
// this.potions.push(potionName)


//     // Change code above this line
//   },
// };
// ******************************************************
// 39
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const a = this.potions.indexOf(potionName);
//     this.potions.splice(a, 1, );

//     // Change code above this line
//   },
// };
// ************************************************************

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };
// *************************************************************************************


// const atTheOldToad = {
// 	  potions: [
// 	    { name: "Speed potion", price: 460 },
// 	    { name: "Dragon breath", price: 780 },
// 	    { name: "Stone skin", price: 520 },
// 	  ],
// 	  // Change code below this line
// 	  getPotions() {
// 		    return this.potions;
// 		  },

// 		  addPotion(newPotion) {
// 		    for (const el of this.potions) {
// 		   if (el.name === newPotion.name) {
// 		      return `Error! Potion ${newPotion.name} is already in your inventory!`;
// 		      }
// 		}
// 		    this.potions.push(newPotion);
// 		  },

// 		  removePotion(potionName) {
// 		    const {potions} = this;

// 		    for (let i = 0; i < potions.length; i += 1) {
// 		      if (potionName === potions[i].name) {
// 		      potions.splice(i, 1);
// 		      }

// 		    }
// 		return `Potion ${potionName} is not in inventory!`;
// 		  },
// 		  updatePotionName(oldName, newName) {

// 		    for(const potion of this.potions) {
// 		       if (potion['name'] === oldName) {
// 			 potion['name'] = newName;
// 		       }
// 		    }
// 		  }
// 	  // Change code above this line
// 	};
// // 	console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }))
// //
// **********************************************************************


// const fnA = function (message, callback) {
//   console.log(message);
//   console.log(callback);
//   callback(100);
// };

// const fnB = function(namber) {
//   console.log('лог віведен на екран', namber);
// };



// fnA("uywgwq", fnB);
// *****************************************************************************
  
// const doMath = function (a, b, callback) {

//     const result = callback(a, b);
//     console.log(result);
// };



// const sum =

// doMath(10, 4, function (x, y) {
//   return x + y;
// })
// doMath(10, 4, function (x, y) {
//   return x - y;
// });


// *****************************************************************************

// const buttonRef = document.querySelector("button");
// // const handleBtnClick = function () {
// //   console.log('Клик поooo кнопке' + Date.now());
// // };
// buttonRef.addEventListener(`click`, function () {
//   console.log('Клик поooo кнопке' + Date.now());

// });
// ***********************************************************************************

// const onGetPositionSucces = function (position) {
//   console.log(`это вызов onGetPositionSuccess`);
//   console.log(position);
// };

// const onGetPositionError = function (error) {
//  console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSucces, onGetPositionError);
// ********************************************************************

// function getCurrentPosition(onError, onSuccess) {
//   if (true) {
//     onSuccess({все ок})
//   }
//   else {
//     onError({обьект ошибки})
//   }
// }
// ***************************************************************

// const callback = function () {
//   console.log(`Через 30 сек колбека в таймауте`)
// }
// console.log(`В коде перед таймаутом`)

// setTimeout(callback, 7000);
// console.log(`В коде после таймаута`)


// callback(12, 13);
// ***************************************************************

// const filter = function (array,test) {
//   const filteredArray = [];
//   for (const el of array) {
//     console.log(test(el));
//     // const passed = test(el);
//     // // if (passed) {
//     //    filteredArra.push(el);
//     // }
//   }
//   return filteredArray;
// }

// const callback1 = function (value) {
//   return value >= 3;
// }

// const r1 = filter([1, 2, 3, 4, 5],callback1);
// console.log(r1);

// // const r2 = filter(filter([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// // console.log(r2);

// ********************************************************

// const fnA = function () {
//   const innerVarible = `Значение внуиренней переменной функции fnA`;
//   const inerFunction = function () {
//     console.log(innerVarible)
//     console.log(`Это вызов000000000000000000 inerFunction`)
//   };
//   return inerFunction;
// }
// const fnB = fnA();
// console.log(fnB);



// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} говорит ${dish}`)
//   }
//   return makeDish;
// }
// const mango = makeSheff("Mango");
// console.dir(mango);

// const makeSheff = function (name) {
//   const innverVar = 555;
//   const message = "hello";

//   const makeDish = function (dish) {
//     console.log(message);
//     console.log(innerVar);
//     console.log(`${name} готовит  ${dish}`);

//   };
//   return makeDish;
// };
// const FloatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed(2));


// const rounder = function (number, plases) {
//   return Number(number.toFixed(plases))
// };
// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));
// console.log(rounder(5.123, 3));



// const rounder = function (places) {
//   return function (number) {
//     return Number(number.toFixed(places))
// }
// }


// const rounder2 = rounder(2);
// const rounder3 = rounder(3);


// const raunder = function (plases) {
//   return function (namber) {
//     return Number(number.toFixed(places));
//   };
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);


// console.log(rounder2(3.4586));
// console.log(rounder3(4.4855));
// console.log(rounder2(7.5454));



// const add = function (a, b, c,) {
//   console.log(a, b, c);
//   return a + b + c;
// }

// console.log(add(5, 10, 15));


// const add = function (a, b, c) {
  
//   return a + b + c;
// };

// const addArrow = (a, b, c) => {
//   console.log(`hdhdjdj`);
//   return a + b + c;
// };

// // const addArrow = (a, b, c);
// console.log(add(5, 10, 15));


// const fnA = function () {
//   return {
//     a: 5,
//   };
// };

// console.log(fnA());

// const arrowFnA = () => ({arrowA: 5});
// console.log(arrowFnA());


// const onGetPositionSuccess = (position) => {
//   console.log("Это вызов oneGetPositionError");
//   console.log(position);
// };

// const oneGetPositionError = (error) => {
//   console.log("Это вызов onGetPossitionError")
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(oneGetPositionSuccccess, oneGetPositionError)


// const filter = function (array, test) {
//   const filteradArray = [];

//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);
//     if (passed) {
//       filteredArray.push(el);
//     }
//   }
//   return filteradArray;
// };

// const callback1 = function (value) {
//   return value >= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const callback2 = function(value)

// const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);
// console.log(r1);

// const User = name => {
//   this.name = name;
// };

// console.log(new User("Mango"));

// const objA = {
//   x: 5,
//   showX() {
//     console.log(this.x);
//     const objB = {
//       y: 10,
//       showThis() {
//         console.log("this в obj.showThis",this)
//       }
//     }
//   },
// };
// objA.showX();

// const onlineAndSorted = players
//   .filter(player => player.isOnline)
//   .sort((prevPlayer, nextPlayer) => nextPlayer.rank - nextPlayer.rank);
// console.table(onlineAndSorted);

// const updatePlayers = players.map(player => {
//   return player.id === playerIdToUpdate
//     ? { ...player, timePlayed: player.timePlayed + 50 }
//     : player,
// );
// console.table(updatedPlayers);


// const numders = [5, 6, 7, 20, 34];

// numders.forEach(function (number, index, array) {
//   console.log(number,"kj", "rp", "ut" );
//  });

// const numbers = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map(function (number) {
//   console.log(number);
//   return number * 2;
// });


// console.log("numbers", numbers);
// console.log("doubledNums", doubledNums);


// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-1", name: "Poly", timePlayed: 470, points: 18, online: false },
//   { id: "player-1", name: "Kivi", timePlayed: 210, points: 62, online: false },
  

// ];


// const playerNames = players.map(player => player.name);
// console.log('playerNames', playerNames);


// const plyerIds = player.map(player => player.id);
// console.log('playerIds', playerIds);

// const upatedPlayers = players.map(player => {
//   console.log(player);
//   return {
//     ...player,
//   };
// });

// console.table(upatedPlayers);
// console.log(updatedPlayers);


// const playerNames = players.map(player => {
//   console.log(player);
//   return player.name;
// });

// console.log("playerNames", playerNames);

// const updatedPlayers = players.map(player => {
//   if (playerIdToUpdate === player.id) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     };
//   }
//   return player;
// });

// const updatePlayers = players.map(player => {
//   if (playerIdToUpdate === player.id) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     };
//   }
//   return player;
// });



// const updatePlayers = player.map(player => {
//   if (playerIdToUpdate === player.id) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     };
//   }
//   return player;
// })



// const updatedPlayers = players.map(player =>
//   playerIdToUpdate === player.id
//     ? {
//       ...player, timePlayed: player.timePlayed + 100
//     }
//     : player,
// );


// const updatedPlayers = players.map(player =>
//   playerIdToUpdate === player.id
//     ? { ...player, timePlayed: player.timePlayed + 100 }
//     : player,
// );


// ***********************************************************
// const numbers = [5, 10, 15, 25, 25,];

// const doubledNums = numbers.map(number => {
//   return number * 7;
// });
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 53, online: false },
//   { id: 'player-3', name: 'Mango', timePlayed: 310, points: 47, online: false },
//   { id: 'player-4', name: 'Mango', timePlayed: 380, points: 12, online: false },

// ];

// console.log(players);






// const playerIdToUpdate = 'player-3';
// const timePlayed = '500';

// const updatedPlayers = players.map(player => {
//   if (playerIdToUpdate === player.id) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     };
//   }
//   return player;
// });


// console.table(updatedPlayers);

// **********************************************************


// const playerIdToUpdate = 'player-3';


// const updatePlayers = players.map(player => {
//   if (playerIdUpdate === player.id) {
//     return {
//       ...player,
//       timePlaye: player.time + 100,
//     };
//   }
//   return player;
// }
// );


// console.table(updatedPlayers);



// const tagsStats = allTags.reduse((acc, tag) => {
//   console.log(acc);
//   if (acc[tag]) {
//     acc[tag] += 1;
//     return acc;
//   }
//   acc[tag] = 1;

//   return acc;
// }, {});


// const planets = ["Zemlya", "Mars", "Venera", "Yupiter"];

// const a = planets.map(fa => fa.toUpperCase());

// console.log(a);




// const s = planets.map(planet => planet.toLowerCase());
// console.log(s)


// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Gjkb", score: 59 },
//   { name: "Ajaks", score: 37 },
//   { name: "Xyuston", score: 64 },
// ];

// const h = students.map(o => o.score +1);
// console.log(h);


// const students = [
//   { name: "Mango", courses: ["Matematica", "fizika"] },
//   { name: "Mango", courses: ["matematica", "fizika"] },
//   { name: "Mango", courses: ["matematica", "fizika"] },
// ];

// const j = students.map(student => student.courses);
// console.log(j);


// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < Array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 3);

// console.log(numbers);

// *************************************************

// const numbers = [1, 9, 6, 2, 3]
// numbers.sort();
// console.log( numbers); //// [1, 2, 3, 6, 9]

// const letters = ["b", "B", "a", "A"];
// letters.sort();
// // console.log("letters", letters); //// ['A', 'B', 'a', 'b']


// ****************************************************************

// const numbers = [1, 9, 6, 2, 3];
// // numbers.sort();

// // console.log(`numbersss`, numbers);

// const letters = [`b`, `B`, `a`, `A`];

// numbers.sort((a, g,) => {
//   return g - a;
// });
// console.log(numbers);

// **********************************************

// const letters = [1, 5, 3, 9];

//  letters.sort();

// const copy = [...letters];
// console.log(`copy`, copy);
// console.log(`numbers`, numbers);
// *********************************************
// Делает реверс масива по убыванию и возростанию

// const numbers = [1, 2, 3, 4, 5];

// const deakSort = [...numbers].sort((a, b) => b - a);
// const ascSort = [...numbers].sort((a, b) => a - b);

// console.log(`deakSort`, deakSort);
// console.log(`ascSort`, ascSort);
// Делает реверс масива по убыванию и возростанию
// console.log([1, 2, 3, 4, 5].reverse());

// *************************************************


// const players = [
//   { id: `player-1`, name: `Mango`, timePlayed: 310, online: false },
//   { id: `player-2`, name: `Poly`, timePlayed: 450, online: true },
//   { id: `player-3`, name: `Kivi`, timePlayed: 680, online: false },
//   { id: `player-4`, name: `Ajax`, timePlayed: 240, online: true },
//   { id: `player-5`, name: `Chelsy`, timePlayed: 910, online: false },
// ];


// const a = [...players].sort((d, f) => {
//   return d.timePlayed - f.timePlayed;
// });
// console.table(a);
// ***************************************************

// Свойство flat разглаживает вложенность:

// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array.flat(2));
// *****************************************************

// const tweets = [
//   { id: `000`, likes: 5, tags: [`js`, `nodejs`] },
//   { id: `000`, likes: 5, tags: [`jt`, `nodels`] },
//   { id: `000`, likes: 5, tags: [`jn`, `nodegs`] },
//   { id: `000`, likes: 5, tags: [`je`, `nodeds`] },

// ];


// const tags = tweets.map(t => t.tags).flat();
// console.log(t => t.tags);


// const numbers = [1, 2, 5, 7, 9, 99, 32, 90, 43];

// const a = numbers.filter(function (num) {
//   return num > 5;
// });
// console.log(a);

// const pereb = a.map(t => t * 3);
// console.log(pereb);

// const sorted = pereb.sort((d, v) => d - v);
// console.log(sorted);


// аналог предыдущей записи:

// const df = numbers
//   .filter(num => num > 2)
//   .map(num => num * 2)
//   .sort((a, b) => a - b);


// console.log(df);

// ***************************

// const playesr = [
//   { id: `id-1`, tag: `Mango`, isOnline: true, rang: 800 },
//   { id: `id-2`, tag: `Poly`, isOnline: false, rank: 600 },
//   { id: `id-3`, tag: `Ajax`, isOnline: true, rank: 100 },
//   {id: `id-4`, tag: `Fax`, isOnline: false, rank: 526},
// ];

// const adf = playesr
//   .filter(players => players.isOnline)
//   .sort((playerA, playerB) => playerB.rank - playerA.rank);



// console.table(adf);


// *****************************************

// const tags = tweets.flatMap(t => t.tags);
// console.log(tags);


// const stats = tags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});

// console.log(stats);

// *************************************************
// Редюс
// const total = [2, 7, 3, 45, 65].reduse((previousValue, number) => {
//   return previousValue + number;
// }, 0);
// console.log(total);

// const total = [2, 7, 3, 14, 6].reduse((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32


// *********************************************


// const student = [
//   { name: "Манго", score: 83 },
//   { name: "Poli", score: 59 },
//   { name: "Kivi", score: 87 },
//   { name: "Madet", score: 58 },

// ];

// const totalScore = student.reduce((a, student) => {
//   return a + student.score;
// }, 0);

// console.log(student.score);

// ******************************************

// const numbers = [5, 45, 54, 78, 51, 4];

// for (let i = 2; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
//   console.log(numbers[i]);
// }


// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);

// });



// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = function makePizza();
// const pointer = null;

// **************************************************
//   Задачи 4 модуль 48 шт
// **************************************************
//2. Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName,callback ) {
//   return callback(pizzaName);
// // }
// ***************************************************

//3. Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), которая логирует строку "Eating pizza <имя пиццы>".

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`)
// });

// *************************************************************
// 4.Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.

// *****************************************************************

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, makePizza, onOrderError ) {
//     if (this.pizzas.includes(pizzaName)){
//       return makePizza(pizzaName);
      
//     }
//   return (`Error! There is no pizza with a name ${pizzaName} in the assortment.`)
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// **************************************************************************
// 5.  Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
// };

//   // Change code above this line
//   // return totalPrice;
// console.log(totalPrice);


// const orderedItems = [5, 10, 15, 20, 25];

// // Классический for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(numbers[i]);
// // }

// // numbers.forEach(function (number, index) {
// //   console.log(`Индекс ${index}, значение ${number}`);
// // });

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

//   orderedItems.forEach(function (orderedItem, index) {
//    return totalPrice += orderedItem;
//   });



//   // Change code above this line
//   console.log(totalPrice);
// }

// calculateTotalPrice(orderedItems)
// **************************************************
// 6. Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.




// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }
//   numbers.forEach(function (number) {

//     if ( number > value) {
//        filteredNumbers.push(number);
//     }
//     return filteredNumbers;
//   });



//   // Change code above this line
//  console.log(filteredNumbers);
// }

// filterArray([5, 10, 15, 20, 25], 7)

// ********************************************************


// 7. Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
  // Change code below this line

  // for (let i = 0; i < firstArray.length; i += 1) {
  //   if (secondArray.includes(firstArray[i])) {
  //     commonElements.push(firstArray[i]);
  //   }
  // }

  // firstArray.forEach(function (namberfirstArray) {
  //   if (secondArray.includes(namberfirstArray)) {
  //     commonElements.push(namberfirstArray);
  //   }
  //   return commonElements;
  // });

//   function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line

//     firstArray.forEach(function (namfirstArray) {
//       if (secondArray.includes(namfirstArray)) {
//         commonElements.push(namfirstArray);
//       }
      
//     });
     
 



 
//     // Change code above this line
//   }

// console.log(commonElements);

// }
//   getCommonElements([1, 2, 3], [2, 1, 17, 19]);

// *********************************************************
// 8. Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

// // Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

// *************************************************************
// 9.Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.
// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) =>
//    quantity * pricePerItem;
  
// *********************************************************************
// 10.Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.

// // Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach( (item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Change code above this line
// **************************************************************
// 11. Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.


// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   console.log(filteredNumbers);
// }

// filterArray([1, 2, 3, 4, 5], 3)


// 12. Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach( (element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }
// 13. Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.


// function changeEven(numbers, value) {
//   // Change code below this line
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   //   console.log(numbers[i])
//   // }
//   const newArray = [];
//   numbers.forEach( (number) => {
//     if(number % 2 === 0) {
//    newArray.push(number + value);
//     }
//     console.log(newArray)
// })
  



// //   // Change code above this line
// }

// changeEven([1, 2, 3, 4, 5], 10)



// const pureMultiply = (numbers, value) => {
//   const newArray = [];
//   number.forEach(number => {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//     }
//     });
//   console.log(newArray)
// }

// const numbers = [1, 2, 3, 4, 9];
// pureMultiply(numbers, 2);


// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     if (element % 2 === 0) {
//      newArray.push(element * value);
//     }
    
//   });

//   console.log(newArray);
// };

// const numbers = [1, 2, 3, 4, 9];
// pureMultiply(numbers, 2);




// const changeEven = (numbers, value) => {
//   const newArray = [];
//   // Change code below this line
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//     }
//     else {
//       newArray.push(number)
//     }
//   });
//  return newArray;

// };


// changeEven([1, 2, 3, 4, 5], 10)



// function changeEven(numbers, value) {
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//      console.log(numbers[i]);
//   }
 
//   // Change code above this line
// }

// changeEven([44, 13, 81, 92, 36, 54], 100)

// 13. Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

// const changeEven = (numbers, value) => {
//   const newArray = [];
//   // Change code below this line
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//     }
//     else {
//       newArray.push(number)
//     }
//   });
//  return newArray;

// };


// changeEven([1, 2, 3, 4, 5], 10)

// *************************************************

// 14 Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().
// const planets = ["Ptvkz", "Mars", "Venera", "Юпитер"];

// const a = planets.map(planet => planet.length);
// console.log(a);

// *************************************************

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Poly", score: 94 },
//   { name: "Voly", score: 94 },
// ];

// const names = students.map(student => student.name);
// console.log(names);

// 15.Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line




// const titles = books.map(a => a.title);
// 16.Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const a = books.flatMap(book => book.genres)
// console.log( a);

// ****************************************************

// 16. Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.
// *******************************************8

// const getUserNames = users => {
    
// const a = users.map(user => user.name)
// return a;
//   };

// ***************************************************

// const users = [
  
//    {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
//   ];

//   const a = users.map(user => user.name)
// console.log( a);

// ***************************************************

// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.

// const getUserEmails = users => {
//  const a = users.map(user => user.email)
// return a;
//   };
//   // Change c

// ****************************************************

// 19. Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value % 2 === 0);
// console.log(positiveValues);


// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues);


// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues);
// ****************************************************

// const values = [51, -3, 27, 21, -68, 42, -37];


// const positiveValues = values.filter(value => value < 0);

// console.log(positiveValues);


// const negativeValues = values.filter(value => value > 0);

// console.log(negativeValues);

// ******************************************************************
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);  [17, 61, 47, 73]
// console.log(evenNumbers);

// const oddNumbers = numbers.filter(a => a % 2 !== 0);
// console.log(oddNumbers);

// ********************************************************

// const numbers = [17, 24, 82, 61, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);

// console.log(evenNumbers);



// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(oddNumbers);

// *********************************************************















// 20. Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.
// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kivi", courses: ["physics", "biology"] },
// ];

// const allCourses = students.flatMap(student => student.courses);

// console.log(allCourses);


// const uniqueCourses = allCourses.filter( a, d, c, => allCourses.indexof(d) === index);

// console.log(uniqueCourses);


// const students = [
//   { name: "Mango", courses: ["mathematics", "phisics"] },
//   { name: "Mango", courses: ["science" "mathematics"] },
//   { name: "Kivi", courses: ["phisics", "biologi"] },
// ];


// const allCourses = students.flatMap(student => student.courses);

// console.log(allCourses);

// const uniqueCourse = allCourses.filter(a, b, c => allCourses.indexof(b) === index);

// console.log(allCourses);


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticim"],
//   },
//   {
//     title: "redder That Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const allGenres = books.flatMap(book => book.genres);
// console.log(allGenres);
// const uniqueGenres = allGenres;