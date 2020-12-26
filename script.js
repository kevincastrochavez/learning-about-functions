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

lufthansa.book(239, 'Kevin Castro');
lufthansa.book(635, 'Cindy Chávez');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// DOES NOT WORK BECAUSE IT IS A REGULAR FUNCTION
// book(239, 'Jared Castro');

// CALL METHOD
book.call(eurowings, 102, 'Jared Castro');
console.log(eurowings);

book.call(lufthansa, 569, 'Alicia Chávez');
console.log(lufthansa);

//APPLY METHOD
const flightData = [593, 'Juan Clavino'];
book.apply(eurowings, flightData);
console.log(eurowings);

book.call(eurowings, ...flightData);
