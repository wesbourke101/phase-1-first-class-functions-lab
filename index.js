// Code your solution in this file!
//const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(array) {
    const newArray = array.slice(0,2)
    return newArray;
}

const returnLastTwoDrivers = function(array) {
    const newArray = array.slice(-2)
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(arg, int) {
    return function() {arg * int}
}
