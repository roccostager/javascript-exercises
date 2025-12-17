const sumAll = function(val1, val2) {
    if (!(Number.isInteger(val1) && Number.isInteger(val2))) return 'ERROR';
    if (val1 < 0 || val2 < 0) return 'ERROR';

    let range_start = val1, range_end = val2;
    if (val1 > val2) range_start = val2, range_end = val1;

    let sum = 0;
    for (let i = range_start; i <= range_end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
