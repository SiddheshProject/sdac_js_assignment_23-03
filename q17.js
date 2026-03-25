function checkAvailability(seats) {
    return new Promise((resolve, reject) => {
        if (seats <= 10) {
            resolve("Seats are available")
        } else {
            reject("Seats are not available")
        }
    });     
}

checkAvailability(6).then((result) => {
    console.log(result);
    
}).catch((err) => {
    console.log(err);
    
});

checkAvailability(16).then((result) => {
    console.log(result);
    
}).catch((err) => {
    console.log(err);
    
});
