function isLeapYear(year) {
    try {
        if (arguments.length === 0) {
            throw new Error('Missing argument year error');
        }
        if (!Number.isInteger(year) && year !== 0) {
            throw new Error('Non-integer argument year error');
        }
        return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
    } catch (err) {
        console.error(err.message);
        return false; 
    }
}

// Example usage
console.log(isLeapYear()); 
console.log(isLeapYear('test')); 
console.log(isLeapYear(2020)); 
console.log(isLeapYear(2021)); 
console.log(isLeapYear(0)); // 
