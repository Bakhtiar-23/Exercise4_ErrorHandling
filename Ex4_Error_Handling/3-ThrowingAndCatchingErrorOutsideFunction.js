function isLeapYear(year) {
    if (!Number.isInteger(year) && year !== 0) {
        throw new Error('Non-integer argument year error');
    }
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}

function tryIsLeapYear(year) {
    try {
        if (arguments.length === 0) {
            throw new Error('Missing argument year error');
        }
        return isLeapYear(year);
    } catch (err) {
        console.error(err.message);
        return false; 
    }
}

// Example usage
console.log(tryIsLeapYear()); 
console.log(tryIsLeapYear('test')); 
console.log(tryIsLeapYear(2020)); 
console.log(tryIsLeapYear(2021)); 
console.log(tryIsLeapYear(0)); 