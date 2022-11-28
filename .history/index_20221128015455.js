// Code your solution here


function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());

}


function fuzzyMatch (drivers, str) {
    return drivers.filter(driver => driver.substr(0, str.length) === str);

}

function matchName() {

}