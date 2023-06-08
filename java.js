// const display1El = document.querySelector('.display-1')
// const display2El = document.querySelector('.display-2')
// const numbersEl = document.querySelector('.number')
// const operationEl = document.querySelector('.operation')
// const equalEl = document.querySelector('.equal')
// const clearAllEl = document.querySelector('.all-clear')
// const clearLastEl = document.querySelector('.last-entity-clear')
// let dis1Num = ''
// let dis2Num = ''
// let result = null
// let lastOperation = ''
// let haveDot = false
// numbersEl.forEachListener(number) => {
//     number.addEventListener('click', (e) => {
//         if (e.target.innerText = '.' && !haveDot) {
//             haveDot = true

//         } else if (e.target.innerText = '.' && !haveDot) {
//             return
//         }
//         display += e.target.innerText
//         display2El.innerText = dis2Num

//     })
// }
// operationEl.forEach((operation) => {
//     operation.addEventListener('click', (e) => {
//         if (!dis2Num) return
//         haveDot = false
//         const operationName = e.target.innerText
//         if (dis1Num && dis2Num && lastOperation) {
//             mathOperation()
//         } else {
//             result = parseFloat(dis2Num)
//         };
//         clearVar(operationName)
//         lastOperation = operationName
//         console.log(result)
//     })
// })

// function clearVar(name = '') {
//     dis1Num += dis2Num + '' + name + ''
//     display1El.innerText = dis1Num
//     display2El.innerText = ''
//     dis2Num = ''
//     tempResultEl.innerText = result
// }

// function mathOperation() {
//     if (lastOperation)
// }


//important question ..
// const arr = [1, 2, 2, 3, 3, 4, 5];
// const dom = [];
// arr.forEach((fun) => {
//     const index = dom.indexOf(fun);
//     if (index === -1) dom.push(fun)
// });
// console.log(dom);




//var arr= [5,4,4,3,3,8,8,6,6,5,7];

// var kk = [ ];

// arr.forEach((v) => {
//     const index = kk.indexOf(v);
//     if (index === -1) kk.push(v);
// });

// console.log(kk)
   
// console.log()


// spread operator 
// const user={
//     name:'Tarik',
//     city:'jbl'
//  };

//  const address={
//     street:'A1074/6'
//  };
//   const newUser={
//    ...user,
//    ...address,
//   };
//    console.log(newUser);


 // rest operator
//  function sum(number1, number2, ...numbers){

//      let result=0;
//      for (let num of numbers){
//         result = +num;
//      }
//      return result;
//  }
//  console.log(sum(3,4,5,6));


//  scope 
//  1 - global scope 
//  2- function scope 
//  3- block scope 

// function study (){
//     var a=2;

//     function child1(){
//         // console.log(a)
//         var b =3;
//         function child2(){
//             var c =4;
//         }
//     }
//     console.log(study);
//     }
 

// 
//  var a =1;
//  function fun(){
//     var b = 2;
//     console.log(a);
//     console.log(b);

//  }
//  fun();
//  console.log(a);
//  console.log(b);
//  var a=1;
//  function fun(){
//     a=2;
//     console.log(a);

//  }
//  fun();
//  console.log(a);
//  const a = 100;
//  function  study(){
//     const  b= 20;
//     console.log()
//  }
//  var str='tarik';
//  let obj={};
//  for(let i = 0;i<str.length; i++){
//  if (obj[str[i]]){
//     obj[str[i]] += obj[str[i]];
//  }else{
 
//     obj[str[i]]=1
    

//     }
//  }

//  console.log(obj);


// function sum(number1,number2,...numbers){
//    console.log(numbers);
//    let result =0;
//    for (let num of numbers){
//      result +=num;
//    }
//    return result;
//  }
//  // const numbers =[3,5,5,6,3,2,8]
//  console.log(sum(3,5,6));
  
//  //## Rest operator
//  const numbers =[2,3,4,5,1];
//   console.log(Math.min(...numbers));


 // Destructuring
   
//  const user={
//   name :'TARIK',
//   city:'jabalpur',
//   address: 'mehraseoni',

//  };
//  const {name, ...address}=user;
//  console.log(name, address);


// var a =2;
// var b=3;
// // fun();
// function fun(){
//   var a=4;
//   var d=5;
//      b=6;
//    console.log(a,b,d);

// }
// if(true){
//   let a=8;
//       b=9;
//     console.log(a,b);
// }
// //  fun();
// console.log(a,b);

        // scope
          // var a= 2;
          // let b=4;
          //  const c =5;
          //  function fun(){
          //    var a= 5;
          //     let b=6;
          //      c=9;
          //    console.log(a,b,c); 
          //    if (true){
          //      var a=10;
          //      let b=11;
          //      const c=13;
          //      console.log(a,b,c);
          //       a= 7;
          //       b=8;
          //       c=3;
          //     console.log(a,b,c);
          //    }
          //  }
          //   fun();
          //   console.log(a,b,c);
    