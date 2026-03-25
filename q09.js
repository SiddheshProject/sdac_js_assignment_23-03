names = ["ABC", "DEF", "GHI", "JKL", "MNO"]

function announceWinner(playerName) {
    let found = false;

    for (let name of names) {
        if (name === playerName) {
            found = true;
            break;
        }
    }

    if (found) {
        console.log(`${playerName} is the winner!`);
    } else {
        console.log("Unknown Player");
    }
}

announceWinner("ABC")
console.log("--------------------");
announceWinner("")
console.log("--------------------");
announceWinner("AB")