function validateDestination(city) {
    try {
        if (city == "" || (city != "Mumbai" && city != "Delhi" && city != "Chennai" && city != "Kolkata")) {
            throw new Error("Invalid destination name");    
        } else {
            console.log("Valid destination name.....");
            console.log("City name is: " + city);
        }
    } catch (error) {
        console.log(error.name + ":" + error.message);
    } finally {
        console.log("Validation Done");
    }
}

validateDestination("Mumbai");
console.log("---------------");
validateDestination("")
console.log("---------------");
validateDestination("hjgerhjsd")