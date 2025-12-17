const repeatString = function(str, n) {
    if (n < 0) return 'ERROR';
    
    let concatenated_str = '';
    for (let i = 0; i < n; i++) {
        concatenated_str += str;
    }
    return concatenated_str;
};

// Do not edit below this line
module.exports = repeatString;
