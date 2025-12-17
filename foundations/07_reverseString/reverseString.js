const reverseString = function(str) {
    let reverse_str = '';
    for (let i = 1, n = str.length; i <= n; i++) {
        reverse_str += str.at(n - i);
    }

    return reverse_str;
};

// Do not edit below this line
module.exports = reverseString;
