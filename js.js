// javaScript Refresher
// function printMyName(name){
//     console.log(name);
// }
// printMyName("Emad")

// const sayMyName = (number) => {
//     return number * 10
// }
// console.log(sayMyName(5));
// class Human{
//     constructor(){
//         this.gender = "Male"
//     }
//     printGender(){
//         console.log(this.gender);
//     }
// }
// class Person extends Human{
//     constructor(){
//         super();
//         this.name = 'Emad'
//     }
//     printMyName(){ 
//         console.log(this.name);
//     }
// }
// const person = new Person();
// console.log(person);
// person.printMyName();
// person.printGender()

// Speared Operator
// const number = [1,2,3]
// const newNumber = [...number,4,5,6]

// console.log(number);
// console.log(newNumber);

// const person ={
//     name:"Max"
// };
// const newPerson = {
//     ...person ,
//     age:23
// }
// console.log(person);
// console.log(newPerson);

// // Rest Operator

// const filterFun =(...args) =>{ // used to merge a list of function arg into an array
//     return args.filter(x=> x === 1 );
// }
// console.log(filterFun(1,2,3));

// Destructuring
// Array

// let [a,b] = ["Hello" , "Max"]
// console.log(a);
// console.log(b);

//object

// let {name} = {name:"EMad" , Age:23}
// console.log(name);
// console.log(Age); // not defined
// const numbers = [1,2,3]
// let [x,,y] = numbers;
// console.log(x,y); 
//  let numbers = [1,2,3]
//  let x = numbers.map(x=> x*10)
//  console.log(x);