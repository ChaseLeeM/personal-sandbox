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
// for (let i = 0; i < 10; i++) {
//     console.log(`For Loop #${i + 1}.`);
// }
//
// let classmates = ["Andre", "Chris", "Titus"];
//
// for (let i = 0; i < classmates.length; i++) {
//     console.log(`Index ${i} is ${classmates[i]}.`);
// }

// num += 2 // num = num + 2;
// num -= 2 // num = num - 2;
// num *= 2 // num = num * 2;
// num /= 2 // num = num / 2;
//num++ // num = num + 1;
//num-- // num = num - 1;

//Array Manipulation

//array.push()      adds a new last element
//array.pop()       removes the last element
//array.unshift()   adds a new first element
//array.shift()      removes the first element

// var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
// console.log(daysOfTheWeek);
// ['Monday', 'Tuesday', 'Wednesday', 'Thursday']
// let's add 'Sunday' to the beginning of the week
// daysOfTheWeek.unshift('Sunday');
// console.log(daysOfTheWeek);
// ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
// let's add 'Friday' and 'Saturday' to the end of the week
// daysOfTheWeek.push('Friday', 'Saturday');
// console.log(daysOfTheWeek);
// ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

let months = ["April","May","June"];
console.log(months);
months.push("July");
console.log(months);
months.unshift("March");
console.log(months);
months.pop();
console.log(months);

//Locating

// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red'];
// var index = colors.indexOf('green');
// console.log(index);
// 3
// index = colors.indexOf('red');
// console.log(index);
// 0
// index = colors.lastIndexOf('red');
// console.log(index);
// 7

//Slicing

// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var slice = colors.slice(2, 4);
// console.log(colors); // colors is unchanged
// ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
// console.log(slice); // ['yellow', 'green']
// slice = colors.slice(3);
// console.log(slice); // ['green', 'blue', 'indigo', 'violet']

//Reversing

// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// console.log(colors);
// ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
// console.log('Reversing the colors array.');
// colors.reverse();
// console.log(colors);
// ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']

//Sorting - sorting within the variable

// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// console.log(colors);
// ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
// console.log('Sorting the colors array.');
// colors.sort();
// console.log(colors);
// ['blue', 'green', 'indigo', 'orange', 'red', 'violet', 'yellow']

//In order to sort numbers you need to run a mathematical evaluation on your array.
// function compareNumbers(a,b){
//     return a - b
// }


//Splitting - taking a string and turning it into an array

// var namesString = "Joe,Bob,Sally";
// console.log(namesString);
// Joe,Bob,Sally
//
// var namesArray = namesString.split(',');
// console.log(namesArray);

//Joining - taking an array and turning it into a string
// var namesArray = ['Joe', 'Bob', 'Sally'];
// console.log(namesArray);
// ['Joe', 'Bob', 'Sally']
// var namesString = namesArray.join(',');
// console.log(namesString);
// Joe,Bob,Sally

// ============================= !! MINI-EXERCISE 2 !!

/*
    1. Put the first names of everyone in your row in the order they are sitting (just your half of the classroom)
    2. Log the alphabetical order of everyone in your row
    3. Log the reverse alphabetical order of everyone in your row
    4. Log everyone in the row in reverse order
    5. Log an array of just the first two students in the row (left to right)
    6. Log everyone in the row in a single string separated by spaces
    7. Log everyone in the row in a single string separated by underscores
 */

let myRow = ['Andre','Chase','Chris','Will'];
console.log(myRow.sort());
console.log(myRow.reverse());
console.log(myRow.sort().reverse());
let myRowSlice = myRow.reverse().slice(2);
console.log(myRowSlice);
console.log(myRow.join(" "));
console.log(myRow.join("_"));



