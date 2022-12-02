let owner = "Chase"

hello(owner);


// Math.floor((Math.random() * 1000) + 1)

// 1) Understand the problem
// - read the problem and reread it
// - review existing examples
// - restate the problem in your own words
// - answer the questions:
//     What is the input (how many and what type)?
//     What is the output?
//     - consider your own inputs and outputs (solve the problem as a human)
// 2) Devise a plan (pseudo code the steps)
// - write out what the program should do in English or your native language in simple steps (pseudo code)
// - you may consider multiple ways to tackle a problem, depending on complexity; pick an approach and stick to it
// - think of steps simple enough for a five year old to understand
// - don’t fall into the trap of writing in code at this step
// 3) Carry out the plan (write the code)
// - for each step, translate it into code
// - use clear variable names and consistent spacing
// - if you don’t know how to translate a step into JS code, google it
// 4) Look back (refactor the solution for readability / performance / etc.)
//     - if it passes all the tests, this step is not needed on assessments

// Creating a function that removes the first character in the input, showing false if input is not a string or is empty.
// let names = 'Chase'

// function removeFirstCharacter(input){
//     if (typeof input !== 'string') {
//         return false;
//         //if not a string, return false
//     } if (input.length === 0) {
//         return false
//         //if empty return false
//     } else {
//         return input.slice(1);
//         //return input without first character
//     }
// }

//Ternary form
// function $name(){
//     return condition ? true : false
//}

// function removeFirstCharacter(input) {
//     if (typeof input !== 'string') return false;
//     return (input.length === 0) ? input : input.slice(1);
// }


// console.log(`Running removeFirstCharacter`)
// console.log(removeFirstCharacter(names));




function hello(input){
    console.log(`Hello ${input}!`);
}

//Loops
for (let i = 0; i < 10; i++) {
    console.log(`For Loop #${i + 1}.`);
}

let classmates = ["Andre", "Chris", "Titus"];

for (let i = 0; i < classmates.length; i++) {
    console.log(`Index ${i} is ${classmates[i]}.`);
}

// num += 2 // num = num + 2;
// num -= 2 // num = num - 2;
// num *= 2 // num = num * 2;
// num /= 2 // num = num / 2;
//num++ // num = num + 1;
//num-- // num = num - 1;

