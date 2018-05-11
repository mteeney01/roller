var exports = module.exports = {};

exports.DIE = {
    D4: 4,
    D6: 6,
    D8: 8,
    D10: 10,
    D12: 12,
    D20: 20
};

exports.roll = function(amount, die) {
    let result = [];

    for (let i = 0; i < amount; i++) {
        result.push(getRandomIntInclusive(1, die));
    }

    return {
        rolls: result,
        total: result.reduce((a,b) => a + b, 0)
    };
};

/* From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive */
var getRandomIntInclusive = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
};