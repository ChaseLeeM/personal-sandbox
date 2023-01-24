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

//**Array Manipulation

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

// let months = ["April","May","June"];
// console.log(months);
// months.push("July");
// console.log(months);
// months.unshift("March");
// console.log(months);
// months.pop();
// console.log(months);

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

// let myRow = ['Andre','Chase','Chris','Will'];
// console.log(myRow.sort());
// console.log(myRow.reverse());
// console.log(myRow.sort().reverse());
// let myRowSlice = myRow.reverse().slice(2);
// console.log(myRowSlice);
// console.log(myRow.join(" "));
// console.log(myRow.join("_"));

//**Objects - Grouping of Data and Functionality

//    Object Literal Notation
// const cat = {
//     name: 'Garfield',
//     age: 7
// };
// console.log(cat);
// console.log(cat.name);
// console.log(cat.age);
// cat.color = 'Orange';
// console.log(cat);
// cat.age = 8
// console.log(cat);

//-- Mini Exercise 1
// Create a few beverage objects and assign values to each object for the following properties:
//   - brandName
//   - type
//   - volumeInLiters
//   - priceInCents
//   - expirationDate
//   - datesOfPreviousSips (use an array of strings)
//   - isOpen
// Define your objects using both literal syntax to create all properties and values at once and also try defining empty objects and assign property values in separate statements using the dot notation.

// const beverage = {
//     name : 'Coke',
//     type : 'Non Alcoholic',
//     volumeInLiters : 2,
//     priceInCents : 75,
//     expirationDate : 122322,
//     datesOfPreviousSips : [121022,121222,122022],
//     isOpen : true
// };
// console.log(beverage);
//
// beverage.name = "Bulliet";
// beverage.type = 'Whiskey';
// beverage.volumeInLiters = 1;
// beverage.priceInCents = 3900;
// beverage.expirationDate = 12/12/25;
// beverage.datesOfPreviousSips = 'NA';
//
// console.log(beverage);

// const pets = [
//     {
//         givenName: 'Spot',
//         isDog: true
//         toys: ['ball','frisbee']
//     },
//     {
//         givenName: 'Max',
//         isDog: true
//         toys ['ball','friend']
//     },
//     {
//         givenName: 'Goldie',
//         isDog: false
//         toys: ['plant','food']
//     }
// ]
    // for (let i = 0; i < pets.length; i +=1){
    //     console.log(pets[i].givenName);
    // }
    // pets.forEach(function (pet){
    //     console.log(pet.givenName);
    // });


//Mini Exercise 2

// const users = [
//     {
//         givenName: 'Sam',
//         age: 21
// },
// {
//     givenName: 'Cathy',
//     age: 34
// },
// {
//     givenName: 'Karen',
//     age: 43
// }
// ];
// 0. Log each given name
//
// for (let i = 0; i < users.length; i +=1){
//     console.log(users[i].givenName);
// }


// 1. Log the names of all users in a single console log separated by spaces. // output = “Sam Cathy Karen”
// for (let i = 0; i < users.length; i +=1){
//     let singleLine = users[i].givenName.toString(' ');
//     console.log(singleLine);
// }
// let singleLineArray = [];
// users.forEach(function (user){
//     let givenName = user.givenName;
//     singleLineArray.push(givenName);
// });
//
//
// console.log(singleLineArray.join(' '));

// 2. Change the names of all users to “John Doe”
// users.forEach(function (user){
//     user.givenName = 'John Doe';
// });
//
// console.log(users);

// 3. Increase the current age of all users by 1
// Can you accomplish each step using iteration?

// users.forEach(function (user){
//     user.age += 1;
// });
//
// console.log(users);
//
// Looking for users over 30.
// users.forEach(function (user){
//     if (user.age > 30){
//         console.log(user.givenName);
//     } else {
//         console.log(`Hey youngster, ${user.givenName}.`);
//     }
// });
// User with the longest name
// let longestName = "";
// users.forEach(function (user){
//     if (user.givenName.length > longestName.length){
//         longestName = user.givenName;
//     }
// });
// console.log(`Longest name is ${longestName}`);
//
//      Assigning Functionality to an Object
//
// const dog = {
//     petName: 'Sparky',
//     age: 4,
//     bark: function() {
//         console.log("Woof woof");
//     },
//     eat: function(food){
//         console.log(`Sparky eats ${food}.`);
//     },
//     agePet: function(){
//         this.age += 1; //this!
//     }
// }
//
//
//
// dog.bark();
// dog.eat('kibble');
// dog.agePet();
// console.log(dog);
// dog.agePet();
// console.log(dog);
// dog.agePet();
// console.log(dog);
//
// const pets = [
//     {
//         name: 'Sparky',
//         type: 'Fish',
//         age: 4
//     },
//     {
//         name: 'Piggy',
//         type: 'Cat',
//         age: 4
//     },
//     {
//         name: 'Bubba',
//         type: 'Dog',
//         age: 5
//     },
//     {
//         name: 'Pickles',
//         type: 'Dog',
//         age: 10
//     },
//     {
//         name: 'Beans',
//         type: 'Dog',
//         age: 3
//     },
//     {
//         name: 'Mr. Salmon',
//         type: 'Fish',
//         age: 1
//     }
// ]

// function averageDogAge(pet){
//     let total = 0
//     let dogCount = 0
//     pets.forEach((pet){
//         if (pet.type === 'Dog') {
//             total += pet.age;
//             dogCount++;
//         }
//     });
//     return total / dogCount;
// }
//
// console.log(averageDogAge(pets));
//
// function returnPetsWithNoFish(pets){
//     const notAFish = [];
//     pets.forEach(pet => {
//         if (pet.type !== 'Fish') {
//             notAFish.push(pet);
//         }
//     });
//     return notAFish;
// }
//
// console.log(returnPetsWithNoFish(pets));
//
// function returnLastTwoChars(input){
//     return (input.slice(-2));
// }
//
// console.log(returnLastTwoChars('Chase'))
// // returnLastTwoChars(‘cat’) // returns ‘at’
// // returnLastTwoChars(‘hello’) // returns ‘lo’
// // returnLastTwoChars(‘hi’) // returns ‘hi’
//
// function returnLastCharsReversed(input,num) {
//     return input.split("").reverse().slice(0, num).join('');
// }
//
// console.log(returnLastCharsReversed('Chase',2))


// let iBeforeE = string => string.split('ei').join('ie')

// Create a function, filterList, that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// filterList([1,2,‘a’,‘b’]) // returns [1,2]
// filterList([1,‘a’,‘b’,0,15]) // returns [1,0,15]
// filterList([1,2,‘aasf’,‘1’,‘123’,123]) // returns [1,2,123]

// function filterList(input){
//     let array=[];
//     for(let i = 0; i < input.length; i++){
//         if(typeof input[i] !== 'string')
//     }
// }  unfinished

//Create a function, zipArrays, that takes two array inputs of the same length and returns an array with the elements of both arrays alternating in the order of first[0], second[0], first[1], second[1], etc. If both arrays are empty, return an empty array.
// <!--zipArrays([], []) // returns []-->
// <!--zipArrays([1], [2]) // returns [1, 2]-->
// <!--zipArrays(['a', 'b'], ['c', 'd']) // returns... ['a', 'c', 'b', 'd']-->
// <!--zipArrays([1,2,'a','b'], ['bob', null, 'sally', 25]) // returns...-->
//
// <!--[-->
// <!--1,-->
// <!--'bob',-->
// <!--2,-->
// <!--null,-->
// <!--'a',-->
// <!--'sally',-->
// <!--'b',-->
// <!--25-->
// <!--]-->
//
// const zip1 = ['a','b'];
// const zip2 = [1,2];
// function zipArrays(array1,array2){
//     let zipped = []
//     if (array1.length === 0) {
//         return [];
//     }
//     for (let i = 0; i < array1.length; i += 1){
//         zipped.push(array1[i])
//         zipped.push(array2[i])
//     }
//     return zipped;
// }
// console.log(zipArrays(zip1,zip2));

// ================================= WARM UP
//
// Write a function, getUserCredentials, that takes in a list of user objects and returns a list of user objects with only the username and password properties. Assume at least an array of one user object.
//
//
//     const users = [
//     {
//         firstName: 'Justin',
//         lastName: 'Reich',
//         dob: '1923-01-01',
//         username: 'jreich',
//         password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
//     },
//     {
//         firstName: 'Sally',
//         lastName: 'Smith',
//         dob: '1935-03-11',
//         username: 'ssmith',
//         password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
//     },
//     {
//         firstName: 'Fred',
//         lastName: 'Smith',
//         dob: '1999-01-21',
//         username: 'fsmith',
//         password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
//     },
// ]

// function getUserCredentials(users){
//     const credentials =[];
//     for (let i =0; i < users.length; i++){
//         const user=users(i);
//         credentials.push({username: user.username, password: user.password });
//     }
//     return credentials;
// }
// function getUserCredentials(array){
//     let credentials = [];
//     array.forEach(function(user){
//         credentials.push({username: user.username, password: user.password})
//     })
//     return credentials;
// }
//
// console.log(getUserCredentials(users)) // returns...

/*
//
// [
//   {
//     username: 'jreich',
//     password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
//   },
//   {
//     username: 'ssmith',
//     password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
//   },
//   {
//     username: 'fsmith',
//     password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
//   }
// ]
//
// */
//
// // This loop should print the numbers from 0 through 9 in the console
//
// for (let i = 0; i < 10; i++) {
//     console.log("The value of i is " + i);
//     i++;
// }
//
// // desired output : 0, 1 ,2,  3, 4, 5, 6, 7, 8, 9
// var coffees = [
//     {id: 1, name: 'Light City', roast: 'light'},
//     {id: 2, name: 'Half City', roast: 'light'},
//     {id: 3, name: 'Cinnamon', roast: 'light'},
//     {id: 4, name: 'City', roast: 'medium'},
//     {id: 5, name: 'American', roast: 'medium'},
//     {id: 6, name: 'Breakfast', roast: 'medium'},
//     {id: 7, name: 'High', roast: 'dark'},
//     {id: 8, name: 'Continental', roast: 'dark'},
//     {id: 9, name: 'New Orleans', roast: 'dark'},
//     {id: 10, name: 'European', roast: 'dark'},
//     {id: 11, name: 'Espresso', roast: 'dark'},
//     {id: 12, name: 'Viennese', roast: 'dark'},
//     {id: 13, name: 'Italian', roast: 'dark'},
//     {id: 14, name: 'French', roast: 'dark'},
// ];
//
//
// function renderCoffee(coffee) {
//     var html = '<div class="coffee outline">';
//     html += '<div class="name">' + coffee.name + '</div>';
//     html += '<div class="roast">' + coffee.roast + '</div>';
//     html += '</div>';
//
//     return html;
// }

// var isColdOutside = true;

// var clothingToWear;
//
// if (isColdOutside) {
//     clothingToWear = 'sweater and a jacket';
// } else {
//     clothingToWear = 'shorts and a t-shirt';
// }
//
// var clothingToWear = isColdOutside ? 'sweater and a jacket' : 'shorts and a t-shirt';
// console.log(isColdOutside)

// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.

// example data...

const neighborhood1 = {
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "Elementary School", rating: 8},
        {name: "Middle School", rating: 6},
        {name: "High School", rating: 8}
    ]
};

const neighborhood2 = {
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "high",
    schools: [
        {name: "Elementary School", rating: 8},
        {name: "Middle School", rating: 8},
        {name: "High School", rating: 8}
    ]
}

const neighborhood3 = {
    neighborhood: "Oak Mountain",
    medianHomePrice: 290000,
    pool: false,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "Elementary School", rating: 8},
        {name: "Middle School", rating: 8},
        {name: "High School", rating: 8}
    ]
}

const neighborhood4 = {
    neighborhood: "Ginormous Acres",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: [
        {name: "Elementary School", rating: 9},
        {name: "Middle School", rating: 9},
        {name: "High School", rating: 9}
    ]
}
//
// function desirableNeighborhood(neighborhood){
//     let totalRating = 0;
//     for (let i = 0; i < neighborhood.schools.length; i++){
//         totalRating += neighborhood.schools[i].rating;
//     }
//     if (neighborhood.medianHomePrice < 300000 && neighborhood.crimeRate === "low" && totalRating >= 24){
//         return true;
//     }
// };
//
//
// console.log(desirableNeighborhood(neighborhood1)) // returns false due to school rating
// console.log(desirableNeighborhood(neighborhood2)) // returns false due to crime rate
// console.log(desirableNeighborhood(neighborhood3)) // returns true
// console.log(desirableNeighborhood(neighborhood4)) // returns false due to median home price

// Create a function, encodeStr, that takes in a string and returns the string of characters with the following substitutions:
//
// ‘a’ or ‘A’ becomes ‘@’
// ‘i’ or ‘I’ becomes ‘1’
// ‘s’ or ‘S’ becomes ‘$’
//

// function encodeStr (string){
//     let newString = string
//     let chars = {'a':'@','A':'@','i':'1','I':'1','s':'$','S':'$'};
//     newString = newString.replace(/[aAiIsS]/g,match => chars[match]);
//     return newString;
// }
//
// console.log(encodeStr('apple'));
// console.log(encodeStr('codeup'));
// console.log(encodeStr('SASS'));
// console.log(encodeStr('bike'));

// encodeStr(‘apple’) // returns ‘@pple’
// encodeStr(‘codeup’) // returns ‘codeup’
// encodeStr(‘SASS’) // returns ‘$@$$’
// encodeStr(‘bike’) // returns ‘b1ke’

// Make a function, reverseStrings, that takes in an array of objects and reverses the value of the 'str' properties.

//
//     const strs = [
//     {
//         id: 1,
//         str: 'hello'
//     },
//     {
//         id: 2,
//         str: 'world'
//     },
//     {
//         id: 3,
//         str: 'codeup'
//     },
//     {
//         id: 4,
//         str: 'x'
//     }
// ]

// reverseStrings(strs) // returns...

    // [
    // {
    //     id: 1,
    //     str: 'olleh'
    // },
    //     {
    //         id: 2,
    //         str: 'dlrow'
    //     },
    //     {
    //         id: 3,
    //         str: 'puedoc'
    //     },
    //     {
    //         id: 4,
    //         str: 'x'
    //     }
    // ]
//
// function reverseStrings(array){
//     for (let i = 0; i < array.length; i++){
//         array[i].str = array[i].str.split('').reverse().join('');
//     }
//     return array;
// }
//
// console.log(reverseStrings(strs));

