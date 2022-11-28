// Code your solution here


function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());

}


function fuzzyMatch (drivers, str) {
    return drivers.filter(driver => driver.substr(str.length, ) === str)

}

function matchName() {

}