// const x = 10;
// const y = 20;
// console.log(x + y);

//  function add(a,b) {
//     return a+b;
//  }
// console.log(add(3,5));
// console.log(add(3,2));
// console.log(add(3,15));

// const x = 10;
// function add(a, b) {
//     return a + b;
// }
// const result = add(x, 20);
// console.log(result);

// function changeUser(user) {
//     user.name = "Rahul";
// }
// const user = {
//     name: "Chandan"
// };
// changeUser(user);
// console.log(user.name);


// console.log(a);
// var a=10;

// console.log(a);
// let a=10;

// const user = {
//     name: "Chandan"
// };
// console.log(user.name);
// user.name = "Rahul";
// console.log(user.name);

// var user = {// if we use const show error
//     name: "Chandan"
// };
// user = {
//     name: "Rahul"
// };
// console.log(user.name);


// const x ="10";
// const y=5;
// console.log(x+y); //105
// console.log(x - y);//5
// console.log(x * y);//50
// console.log(x / y);//2

// console.log(Boolean([]));//T
// console.log(Boolean({}));//T
// console.log(Boolean(""));//F
// console.log(Boolean("0"));//T
// console.log(Boolean(0));//F
// console.log(Boolean("false"));//F

// console.log(null == undefined); //F both represent a missing value
// console.log(null === undefined);//F
// console.log(0 == false);//T
// console.log(0 === false);//F


// Output Prediction Problems
// console.log(typeof null); //object
// console.log(typeof []);//object
// console.log("5" + 2);//52
// console.log("5" - 2);//3
// console.log(0 || 50);//50
// console.log(0 ?? 50);//0
// console.log(0 ?? 50);//0
// console.log("" || "hello");//hello
// console.log(null === undefined);//F
// console.log(false == 0);//T
// console.log(false === 0);//F


// const age=2;

// if(age >=18){
//  console.log("Eligible for vote")
// } else {
//     console.log("Invalid Voter");
// }


// if(1){
//     console.log("Run the code");
// } else {
//     console.log("does not run the code");
// }


// for(let i=0; i<5; i++){
//     console.log(i);
// }

// const array = [1,2,3,4,5];
// console.log((array.length));


// let count =0;
// while(count <5){
//     console.log(count);
//     count++;
// }


// const x = 10;
// if (x > 5) {
//     console.log("A");
// }
// console.log("B");


// if ("1") {
//     console.log("A");
// } else {
//     console.log("B");
// }

//For order
// for (let i = 0; i < 3; i++) {
//     console.log("body", i);
// }

//Gaurd clause
// function test(value) {
//     if (!value) {
//         return "empty";
//     }
//     return "valid";
// }
// console.log(test(0));
// console.log(test(10));


//Find the first even number in the array
// const numbers =[1,3,7,8,10,12];
// for(i=0; i<numbers.length; i++){
//      if(numbers[i] %2 == 0){  
//         console.log(numbers[i]);
//         break;
//      } 
// }


// function name(){
//     console.log("chandan");
// }
// name();
// name();

// function Total(product, items){
//     return product *items;
// }
//  console.log(Total(15, 10));


//REST Parameter = rest parameter collect remaining arguments into array.

// function sum(...numbers) {
//     let total = 0;

//     for (const number of numbers) {
//         total += number;
//     }
//     return total;
// }
// console.log(sum(1, 2, 3, 4));


// console.log(x);
// var x=10;
// // var    → initialized with undefined
// // let    → uninitialized → TDZ
// // const  → uninitialized → TDZ
// // function declaration → initialized with function


// function a() {
//     console.log("A");
// }

// console.log("Start");
// a();
// console.log("End");

// // start
// // A
// // End

// function a() {
//     console.log("A");
//     b();
//     console.log("B");
// }
// function b() {
//     console.log("C");
// }
// a();

// //A
// //C
// //B

// function one() {
//     return two();
// }

// function two() {
//     return three();
// }

// function three() {
//     return 100;
// }

// console.log(one()); // 100


// function test() {
//     console.log("1");

//     function inner() {
//         console.log("2");
//     }

//     inner(); // 

//     console.log("3");
// }

// test(); //1,2,3



// function a() {
//     console.log("A");
//     b();
//     console.log("B");
// }

// function b() {
//     console.log("C");
//     d();
//     console.log("D");
// }

// function d() {
//     console.log("E");
// }
// a();


// function outer() {
//     let x = 10;
//     function inner() {
//         console.log(x);
//     }
//     inner();
// }
// outer();
// //10


// console.log("A");
// setTimeout(() => {
//     console.log("B");
// }, 0);// 0ms , does not mean "executing immediately" => placed in the task queue /timer
// Promise.resolve().then(() => { // Microtask Queue
//     console.log("C");
// });

// console.log("D");
// //A
// //D
// //C
// //B


// function a() {
//     console.log("A");
//     Promise.resolve().then(() => {
//         console.log("B");
//     });
//     b();
//     console.log("C");
// }
// function b() {
//     console.log("D");
//     setTimeout(() => {
//         console.log("E");
//     }, 0);
//     console.log("F");
// }
// a();
// console.log("G");

// //A
// //D
// //F
// //C
// //G
// //B
// //E

//order of Execute the code: Synchronous code -> Microtask queue -> Timer callback


// console.log("A");
// setTimeout(() => {
//     console.log("B");
//     Promise.resolve().then(() => {
//         console.log("C");
//     });
// }, 0);
// Promise.resolve().then(() => {
//     console.log("D");
//     setTimeout(() => {
//         console.log("E");
//     }, 0);
// });
// console.log("F");

// //A
// //F
// //D
// //B
// //C
// //E

//Order of Execution: Global Stack -> Microtask queue -> timer/task queue -> new microtask -> new timer

// function countDown(n) {
//     if (n === 0) {
//         return;
//     }
//     console.log(n);
//     countDown(n - 1);
// }
// countDown(3);


// function factorial(n) {
//     if (n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// console.log(factorial(4));


// function outer() {
//     let value = 10;
//     setTimeout(() => {
//         console.log(value);
//     }, 0);
//     value = 20;
// }
// outer();


// function count(n) {
//     if (n === 0) return;
//     console.log(n);
//     count(n - 1);
// }
// count(5);

// function factorial(n) {
//     if (n === 1) return 1;
//     return n * factorial(n - 1);
// }
// console.log(factorial(5));

// function print(n) {//IMPORTANT
//     if (n === 0) return;

//     print(n - 1);
//     console.log(n);
// }
// print(5);




//Array

// const numbers = [10, 20, 30, 40];

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers.length);
// console.log(typeof[numbers]);


// Array are mutable.

// const users = ["A", "B"];
// users[0] = "G";
// console.log(users);


// const a =[1,2,3];
// const b = a;
// b.push(4);
// console.log(a);


// Methods:

// const arr= [1,2,3,4];
// const result = arr.push(5); // add element in end
// const result = arr.pop(); //  removed from last
// const result = arr.shift(); // removed from begining
// const result = arr.unshift(5); // add element in begining
// const result = arr.slice(1,3);
// const result = arr.splice(1,2);
// console.log(arr);
// console.log(result);


// const a = [1,2];
// const b =[3, 4];

// const result = a.concat(b);

// console.log(result);
// console.log(a);


// const arr = ["A", "B", "C", "D"];
// console.log(arr.indexOf("B"));
// console.log(arr.indexOf("X"));
// console.log(arr.includes("A"));


// const users = [
//     {
//         id: 1, 
//         name: "Chandan"
//     },
//     {
//           id: 2,
//           name: "Sintu"
//     },
//     {
//           id: 3,
//           name: "Sintu"
//     }
// ];

// const result1 = users.find(user => user.name == "Sintu");
// const result2 = users.find(user => user.id == 1);

// const result = users.findIndex(user => user.id == 3);

// console.log(result1);
// console.log(result2);
// console.log(result);



// const numbers = [1,2,3,4,5];
// const even = numbers.filter(n => n%2 === 0);
// const odd = numbers.filter(n=> n %2 != 0);
// console.log(even);
// console.log(odd);


// const prices = [100, 200, 300];
// const discounted = prices.map(price => price * 0.9);
// console.log(discounted);


// const numbers = [1, 2, 3, 4];

// const c = numbers.reduce(
//     (a, b) => a + b)
// console.log(c);


// const numbers = [10, 2, 30];

// numbers.sort((a,b) => a -b);
// console.log(numbers);