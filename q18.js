function booking(status) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status) {
                resolve(
                    {name: "Ed", price: 777, meal: "Veg", indate: "Jul7", outdate: "Jul9"}
                )
            } else {
                reject("Error occurred try again later.......")
            }

        }, 2000)
    });
}

async function fetch() {
    try {   
        let details = await booking(true)
        console.log(details);
    } catch (error) {
        console.log(error);
        
    }
}
fetch()