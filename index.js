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


