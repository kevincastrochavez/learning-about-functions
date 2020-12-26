'use strict';

///////////////////////////////////
///// DEFAULT PARAMETERS

const bookings = [];

const createBooking = function (flightNum, numPass = 1, price = 199) {
  const booking = {
    flightNum,
    numPass,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 4, 250);
// When want to skip a parameter, set to undefined
createBooking('LH123', undefined, 250);
