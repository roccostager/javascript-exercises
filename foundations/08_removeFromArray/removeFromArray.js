const removeFromArray = function(arr) {
    if (arguments.length < 2) return;

    filter_arr = [];
    for (let i = 1, n = arguments.length; i < n; i++) {
        filter_arr.push(arguments[i]);
    }

    return arr.filter((item) => !(filter_arr.includes(item)));
};

// Do not edit below this line
module.exports = removeFromArray;
