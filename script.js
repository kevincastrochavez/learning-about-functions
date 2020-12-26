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

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original: ${str}`);
  console.log(`Transform: ${fn(str)}`);
};

transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);
