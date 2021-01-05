'use strict';

///////////////////////////////////
///// DEFAULT PARAMETERS

// const bookings = [];

// const createBooking = function (flightNum, numPass = 1, price = 199) {
//   const booking = {
//     flightNum,
//     numPass,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 4, 250);
// // When want to skip a parameter, set to undefined
// createBooking('LH123', undefined, 250);

// ///////////////////////////////////
// ///// PASSING ARGUMENTS: VALUES VS REFERENCE

// const flight = 'LH234';
// const kevin = {
//   name: 'Kevin Castro',
//   passport: 21354654,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = `Mr ${passenger.name}`;

//   if (passenger.passport === 21354654) {
//     alert('Check In');
//   } else {
//     alert('Wrong password');
//   }
// };

// checkIn(flight, kevin);
// console.log(flight);
// console.log(kevin);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000);
// };

// newPassport(kevin);
// checkIn(flight, kevin);

///////////////////////////////////
///// HIGHER ORDER FUNCTIONS

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Original: ${str}`);
//   console.log(`Transform: ${fn(str)}`);
// };

// transformer('Javascript is the best', upperFirstWord);
// transformer('Javascript is the best', oneWord);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Kevin');

// // WITH ARROW FUNCTIONS
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('Hi')('Juan');

///////////////////////////////////
/////

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// lufthansa.book(239, 'Kevin Castro');
// lufthansa.book(635, 'Cindy Chávez');
// console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// const book = lufthansa.book;
// DOES NOT WORK BECAUSE IT IS A REGULAR FUNCTION
// book(239, 'Jared Castro');

// // CALL METHOD
// book.call(eurowings, 102, 'Jared Castro');
// console.log(eurowings);

// book.call(lufthansa, 569, 'Alicia Chávez');
// console.log(lufthansa);

// //APPLY METHOD
// const flightData = [593, 'Juan Clavino'];
// book.apply(eurowings, flightData);
// console.log(eurowings);

// book.call(eurowings, ...flightData);

// //BIND METHOD
// const bookEW = book.bind(eurowings);
// bookEW(23, 'José Cuervo');
// // console.log(bookEW);

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Poncho');

// lufthansa.planes = 300;
// lufthansa.buyplane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyplane.bind(lufthansa));

// //Partial Application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(10, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));
// console.log(addVAT(23));

///////////////////////////////////////
// Coding Challenge #1

// Let's build a simple poll app!

// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

// Here are your tasks:

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)

//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// HINT: Use many of the tools you learned about in this and the last section 😉

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );

//     {
//       typeof answer === 'number' &&
//         answer < this.answers.length &&
//         this.answers[answer]++;
//     }
//     this.displayresults();
//     this.displayresults('string');
//   },
//   displayresults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayresults.call(
//   {
//     answers: [5, 2, 3],
//   },
//   'string'
// );

///////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)

// (function () {
//   console.log('This will never run again');
// })();

// (() => console.log('This will never run again, arrow function'))();

///////////////////////////////////////
// Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

// const booker = secureBooking();
// booker();
// booker();

// booker();
// console.dir(booker); CONSOLE CLOSURES

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// h();
// f();

// console.dir(f);

///////////////////////////////////////
// More Closure Examples
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
