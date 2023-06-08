// const accountId=232354
// let accountEmail ="khantarik@gmail.com"
// var accountPassword ="Tarik@12345"
//  accountCity= "jabalpur"
//   console.log(accountId,accountEmail);

// scope  programming  programming of lest access 
 // scope  provide separation of code .
 // limitation of code area and variables value and use particular location .
  
 // Type of scope in ES6

 // Global scope in javascript .

//   var name = 'abc';
//   function sayName(){
//     var marks=100;// Reference error ,marks is not defined  // because of var marks =100 is function define in function and execute in function outside .//
//     console.log(name);

//   }
//  sayName();
//  console.log(marks); // reference error  

 //****  global scope ..
   //  var x=0;
   // function first (){
   //  // local scope 1
   //  var x= 1;
   //  console.log(x);
   //  function childOfFirst(){
   //      var x=2;
   //      console.log(x);
   //      //local scope 2
   //  }
   //  childOfFirst()
   // }
   //  first()
   //  // global scope 
   //   function second(){
   //      console.log(x);
   //      // local scope 3
   //   }
   //   // global scope 
   //   second();

   // ### block scope  { }
  //   let x= 20;
  //   {
  //     let x=1;
  //     console.log(x);
  //   }
  // console.log(x);
   
//    if (true){
//     // this 'if' conditional block doesn't a new scope 
//     var food ='bar';

//    }
//  console.log(food);
  //##  Laxical scope 
  //  function dada(){
  //   var name = ' matloob khan';
  //   // like is not accessible here 
  //   function papa(){
  //      console.log(name);
  //     // name is accessible here 
  //     // likes is not accessible here 
  //     function beta (){
  //       // name is also accessible here 
  //       // innermost level of the scope chain.
  //       var like =' coding';
  //     }
  //    // console.log(like) // var like execute ke bad khatam ho jata hai.. isliye ye parent ko call nhi kr sakta hai. 
  //     beta ()
  //   }
  //   papa()
  //  }
  // dada() // lexical scope  jab hm kisi funcation under dusra function banate hai toh ek function apne parent function  ko call kr sakta hai .
 //
// hositing in javascript 


//  console.log(a);
//  var a=10;
//  console.log(a)
//  function fun(){
//    console.log(b);
//    var b=2;
//    console.log(b);

//  }
//  fun();
//  console.log(b);
//  var b=3;
// great()//function declartaion uper aa jati hai
// function great(){
//    console.log("INSHAllah");
//   }
   
 // 
//  let arr  = [2,3,12,32,5,25];
//  n = arr .map((x)=> {
//   return x*x
// })
//   Console.log(n);
 // example in age let ,const ,var
// function dry(){
//   age=32;
// }
// let age;
// dry()
//  console.log(age)

 //const value can't changed throughout javascript program!!! 
  
 // let use in to declare block scoped variable 
    // let  b = " tarik";
    //  b= 4
    //  {
    //   let b='this'
    //   console.log(b)

    //  }
    //  console.log(b)
    //   //
  

    // var is globally scope  while let & const are block scope .!!
     // var can be update &  Re declare within its scope !!
     // let can be update & but not declared!!
     // const can neither be update not be declare !!
     // var variable are initialized with undefine where  as let and const variable are not initala
    //  let a = 45;
    //  let b = "tarik";
    //      const  author = " baba "
              // author = 5 // throws an error because constant cannot be changed.!!

    //    let c = null
    //    let  d = undefined
    //    {
    //     let b ='this'
    //     console.log(b)
    //    }
    //    console.log(b)
    //    console.log(author)

    // next day say 11 baje se pehle ana hai sab ko or jo jiske sath  support me beth ta hai .. 
    //  bahut suna ya bhai aaj .or bola hai kii jab salary de rhe hai tab se. ye kab aate hai kab jate koi nhi pata .
    // ab bata kr ana hai daily ,,or jana hai.







    //  javascript js mastry , sixepack codegyan, 


    // var a;
    // a = 0;
    // a++;
    // alert(a); //  output= 0 aye ga
    // console.log(a);


     // primitive and object in javascript 
      
    //  N = null 
    //  N = Number
    //  S =Symbol
    //  S = String
    //  B = boolean 
    //  B = Bigint
    //  U = undefined
     // datatype hai jaha hm varaibale  me jo bhi data type use krte hai !!{

    //  N = null 
     //  N = Number
     //  S =Symbol
     //  S = String
     //  B = boolean 
     //  B = Bigint
     //  U = undefined
//  }


// javascript practice set 

// !1!
// white a javascript program to find whether a number is divisible by 2 and 3 
  //  let num = prompt(" what is your age")
  //  num = Number.parseInt(num)
  //   if (num % 2 == 0 && num %3 == 0){
  //     console.log("your number is divisible by 2 and 3 ")

  //   }
  //   else{
  //     console.log("your number is not divisible by 2 and 3")
  //   }
//   let a = 454;
//   let b = BigInt("567") + 
//          BigInt("3")
//  let c=null;
//  let d = true;
//  let e = "tarik"
// //  let f= symbol("i am a nice symbol")
//  let g

  
//  console.log(a,b,c,d,e,g)
//  console.log(typeof a)

// #### reverse  string 
//  function reverse(str){
//    return str.split('').reverse().join('')
//  }
//    console.log(reverse("hello")); // outputolleh

 //  reverseString

  //  let data="tarik";
  //   data = data.split('');
  //   data.reverse();
  //   data=data.join('');
  //   console.log(data); // output - kirat .


  // function addSumOfTwoNumbers(integar1, integar2){
  //   return integar1 + integar2
  // }
  // console.log(addSumofTwoumbers(44, 66))

  // 
 
  // var a =20
  // var b= 30;
  //  console.log(a+b);

//  var area =(20+35+30)/2;
//   console.log(area);
//  factor=161334.090
// var factor = kilometer* factor
// console.log(km);

  
// var cal = (33> 45) ? 'pass' : 'fail';
//  console.log(cal);
  
// var cal = (33 > 50)?  'pass' : 'fail';
//  console.log(cal);
//     var kilometer= 30; //prompt("enter value in kilometer")
//    var factor=0.1010;
//  var meters=kilometer*factor;
//   console.log(meters);


// flatten array 

//  let arr=[
// [2,4],
// [8,0,1],
// [3,4,5],
// [6,6,7,8,9,10],
// ['tarik','age','id'],
// ['red','color'],
// ['true','false'],
//  ];
// // let flatArray =[].concat(...arr);
// //  let flatArray =[].concat.apply([],arr);

// // console.log(arr);
// console.log(arr.flat());



// leap year in 
//  let year = 1990;
//  function checkLeapYear(year){
//   if((0==year%4)&&(0 != year %100)||(0== year %400)){
//     console.log(year+ 'is a leap year');
//   } else{
//     console.log(year+'is not leap year');
//   }
//  }
// //  const year = prompt('Enter a year');
//  checkLeapYear(year);

// var arr =[0,2,[6,7],[6,[5,8]],9];
   
// console.log(arr[2],[1]);
// console.log(arr[3],[0]);
// console.log(arr[3],[1],[0]);
// console.log(arr[4]);

// even to convert odd number
 

// var array= [2,4,6,8,10];
//  console.log(array[0]-1);
//  console.log(array[1]-1);
//  console.log(array[3]-1);
//  console.log(array[4]-1);
 

//  var array =[2,7,6,3,10];
//  for (var i = 0; i > array.length; i++) {
//    if(array[i]-1) {
//      array[i] = arr[i]-1;
//    }
//  }
 
//  console.log(array)

// how would you check if a  number is integer ? 
 
// function integer(num){
//  return num%1 === 0;
// }
// console.log(integer(4));
// console.log(integer(12.2));
// console.log(integer(0.3));

// var firstWord="khan";
// var secondWord ="tarik";
//  isAnagram(firstWord,secondWord);
//  function isAnagram(first,second){
//   var a = first.toLowerCase();
//   var b = second.toLowerCase();
//   a = a.split("").sort().join(""); 
//   b = b.split("").sort().join("");
//   return a === b;
//  } 
// console.log();
 

// array method in from 
//  const arr =[2,4,6,8];
// //  const number =Array.from(arr,it=>it*2)
//  const number =Array.from(arr,(it,i)=>i*2+1)

// //  function odd(a){
// //   return even(a);
// //  }
// console.log(number);
  

// how to do array in from method?


//  convert to even number to odd number 
//  const arr= [1, 5, 6, 8, 10]
//  const number = Array.from(arr,(it,i)=>i*2+1);
//  console.log(number);

//

//  let lsa=[
//   {
//     name:"tarik",
//     age:32,
//     job:["developer","contentWriter"]
//   },
//   {
//     name:"farman",
//     age:32,
//     job:["FrontEndDeveloper","youtuber"]
//   },
//   {
//     name:"indian",
//     age:32,
//     job:["FrontEndDeveloper","BackEndDeveloper"]
//   },
//   {
//     name:"gul",
//     age:32,
//     job:["FrontEndDeveloper","Developer"]
//   }
//  ];

// const names = lsa.filter(lsa => lsa.name == 'gul');
// console.log(name);
// // for (let index = 0; index < name.length; index++) {
// //   console.log(name[index].job);
// // }
// const result = lsa[]


// random number otp Generate
//  const r = Math.random();
//  r;
//  const otp =Math.round(r*9000+1000)
//  console.log(otp);

// convert to array to object .
//  const arr = ['a','b','c','d'];
//  let obj = arr.reduce(
//   (a,it,i)=>({...a,[i]:it}),{}
//  )
//  console.log(obj);

 // simple way to use in convert array to object ..
// const names = ['tarik','khan','khokhar']
//  const obj = {...names}
//  console.log(obj);

//  object key method  collect the key in object || values method are collect values in the object. 
//  let person = {name:"tarik khan", age:32,hobby:"wiring"};
//  console.log(Object.keys(person));  // output [ 'name', 'age', 'hobby' ]
  
//  console.log(Object.values(person));  // [ 'tarik khan', 32, 'wiring' ]


// reference coping in javascript 
 

// var person ={
//   name:"tarik-khan",
//   age: 32,
//   hobby: "writing",
//   phone: 9416000016
// }
//  anotherPerson = person;
//  anotherPerson.name = "Khokhar" // output  khokhar && its not change tarik khan 

 // jab hm kisi object me new value assign krte hai to wo 
 //  anotherPerson = person;
 // anotherPerson.name = "Khokhar"
  // person.name= khokhar ? toh usme koi change nhi 
  //  console.log(anotherPerson)
  // jab hm another person ko assign krte hai toh wah usi memory  allocate nhi kr sakte or hm anotherperson variable ko   ek hii memory space me assign kr rhe hai || array or object me same issue hote hai isme new memory allocate nhi hoti hai ,
// or agar hm another Persons {} , toh ek new  memory allocate hoti hai ,,

// var person ={
//   name:"tarik-khan",
//   age: 32,
//   hobby: "writing",
//   phone: 9416000016
// }
//  var p1 = person; // reference coding 
// //  console.log(p1); 
//  p1.name = "khokhar"
// //  console.log(p1,person);
//  person.age = 30;
//  console.log(p1,person)
  
  // var person ={
  //   name:"tarik-khan",
  //   age: 32,
  //   hobby: "writing",
  //   phone: 9416000016
  // }
  // var p1 = person;
  // p1.name = "khokhar";
  //  console.log(p1,person);
  //  var p2 = Object.assign({city:"Jabalpur"},person);
  //  console.log(p2);
  //  p2.name = "tk";
  //  console.log(p1,person,p2)

  // person.name = 'Khokhar'
  // console.log(person);



 //  How to add value in object 

//   var person ={
//       name:"tariq khan ",
//       age: 32,
//       hobby: "writing",
//       phone: 9416000016
//     }
//    var fullName = person.name + 'khokhar'
// // console.log(person.name +("khokhar"));
// console.log(fullName);




  //  callback 

  //  it is the oldest way to work with asynchonous operations in javascript .\
  //  it is function passed to another function as an argument .
  // it  offers poor error handling .



  //  Type of functions 

  //  NameFunctions 
  // Lacey /tradition way 
  //  function  myfun(){
  //   console.log("hello , i am tariq khklhar");

  //  }
  //   myfun();

  //   // anonymous Functions ..
  //   //  anonymous function | without names used as  function  expression or a arguments 
     
  //   let greet = function (name){
  //     console.log(`Hello ${name}`);

  //   };
  //    greet("tarik");

// arrow functions
 

// use logical operator to find whither the age of a person lies between 10 and 20?

// let age = prompt("what is your age ")
// if (age > 10 && age <20){
//   console.log(" your age lies between 10 and 20 ");
// }
// else {
//   console.log(" your age doesn't lies between 10 and 20")
// }

// demonstrate the use of switch case statement in javascript ?

// let age = prompt("what is you age ?")
// switch (age)
//   {
//     case '12': 
//       console.log("your age is 12")
//     case '14': 
//       console.log("your age is 14")
//       case '16': 
//       console.log("your age is 16")
//       case '18':
//       console.log("your age is 18")
//       default:
//       console.log(" your age not special")
//   }

//   program to find whether a number is a divisible by   2 and 3?

// let num = prompt("what is your age ")
// let num = 43;
// num = Number.parseInt(num)
// if (num%2 == 0 && num%3 == 0){
//   console.log(" your num is divisible by 2 and 3 ");
// }else{
//   console.log("your num is not divisible by 2 and 3");
// }

//   program to find whether a number is a divisible by either  2 and 3?

// let num = 40;
// let num = prompt("what is your age ")
// num = Number.parseInt(num)
// if (num%2 == 0 || num%3 == 0){
//   console.log(true);
// }else{
//   console.log(false);
// }

// write a program drive or not using ternary operator ?

// let age = 32;
//  let age = prompt( " what is your age")
//  let boy = age >18 ? " drive a car": "not drive a car ";
//  console.log(boy);

 // chapter loops in javascript 

  /*

  we use loops to perform reflect action for example 
 
  */ 

  // for(let i=0; i<10; i++){
  //    console.log(i);
  // }

  // let char= [h,h,m,n];
  //  let uniqueChars =[...new Set(Chars)];
  //  console.log(uniqueChars);

//  var arr =[2,4,3,2,4];
//  var res=[];
//  for (i=0;i<arr.length;i++){
//    // res.push(arr[i]);
//    // }
//    var isDuplicate = false;
//    for (j=0;j<res.length;j++){
//    if (arr[i] === res[j]){
//      isDuplicate = true;
//  } 
// }
//  if (!isDuplicate){
//   res.push(arr[i]);
//  }
// }
// console.log(res);// [2,4,3]
// var numbers = [8, 12, 5, 2, 5, 7];
// var collectionNumbers = {
//   OriginalNumbers: numbers,
//   doubledNumbers: numbers.map(function(n) { return n*2; })
// };

// console.log(collectionNumbers);
 
 // how to do  array number pair 2 ?
  

 // hoisting 

  // function say (){
  //   console.log('tarik')

  // }
  // let x=1;
  // var call= function (){
  //  console.log(x);
  // //  var x = 1;
  
  // };
  // call()
  //  for( var i=0; i<5; i++){ß
  //   // var lagne se 5,5,5,5
  //   // let use krne pr 1,2,3,4 output aaye  ga 
  //   setTimeout(function(){
  //     console.log(i);},i*1000);
  //  }

//
// function sum (a,b){
//   return a-b;
// }
// console.log(sum(3,4));
// var  Name = "haider";
//  var lName= khan
// function name(haider,khan){
// console.log();
// }

 let sum = (a,b)=>{
 return a+b;
 }
console.log(sum(10,3));

