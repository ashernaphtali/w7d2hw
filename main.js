//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for(let i = 0; i < Object.values(person3).length; i++){
    console.log(Object.values(person3)[i])

};


// console.log(person3['pizza'][0])
// console.log(person3['shakes'][0]['mcDonalds'])

// let txt1 = "";
// for (let x in person3) {
//     txt1+= person3[x] + " " + " * ";
// }
// console.log(txt1);

// let text2 = "";
// for (let y in person3.shakes) {
//     text2+= person3.shakes[y] + " " + " * ";
// }
// console.log(person3.shakes);


// EXCERCISE 2

class Person{
    constructor(name, age) {
    this.name = name;
    this.age = age;

}
  
  printInfo() {
    return `Name: ${this.name} \n Age: ${this.age}`
  }
  ageCounter() {
    return this.age+=1
   } 
  
  
}


const myFather = new Person("Dan", 70);
const myBrother = new Person("max", 45)
console.log(myFather, myBrother)
console.log(myFather.printInfo())
console.log(myFather.ageCounter())
console.log(myBrother.ageCounter())
console.log(myBrother.ageCounter())
console.log(myBrother.ageCounter())



const bigOrSmall = (my_string) => {
    return new Promise( (resolve,reject) => {
        if(my_string.length > 10){
            resolve("Big Word")
        } else {
            reject("Small Word")
        }
    })
}

// Using a JS Promise
bigOrSmall('12345678901112222')
//Happy resolver path
.then( (result) => {
    console.log(`This string is ${result}`)
})
//Sad Reject path
.catch( (error) => {
    console.log(`This string is ${error}`)
})


// Code Wars #1 

//Complete the solution so that it reverses the string passed into it.

function backwards(str){
    return str.split("").reverse().join("");
}

console.log(backwards('birdie'))


// Code Wars #2

// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?



let a = "code";
let b = "wa.rs";
let name = a + b;