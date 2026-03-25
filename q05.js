scores = [4, 27, 16, 25, 8, 88, 64];

// MAP

const multiplyByTen = scores.map((scores) => {
    return scores*10
})


// FILTER

const scoresAbove50 = scores.filter((scores) => {
    return scores > 50
})


// REDUCE

const totalScore = scores.reduce((total,scores) => {
    return total = total + scores
})



console.log("MAP");
console.log(multiplyByTen);
console.log("FILTER");
console.log(scoresAbove50);
console.log("REDUCE");
console.log(totalScore);