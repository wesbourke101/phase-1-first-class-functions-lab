// Code your solution in this file!
//const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(array) {
    const newArray = array.slice(0,2);
    return newArray;
}

const returnLastTwoDrivers = function(array) {
    const newArray = array.slice(-2);
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(arg) {
    return function multi(arg2) {return arg * arg2};
}

function fareDoubler(arg) {
    const hello = createFareMultiplier(arg)(2);
    return hello;
}

function fareTripler(arg) {
    const hello = createFareMultiplier(arg)(3);
    return hello;
}

function selectDifferentDrivers(arg, fun) {
    const store = fun(arg);
    return store;
    
}
