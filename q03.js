scores = [4, 27, 16, 25, 8, 64];

const increaseByFive = function (scores) {
    let result = [];
    for (let score of scores) {
        result.push(score + 5);
    }
    return result;
};

console.log(increaseByFive(scores));