function confirmBooking() {
    checkPayment()
}

confirmBooking()

function checkPayment() {
    try {
        throw new Error("Booking Error....");
    } catch (error) {
        console.log(error.name+":"+error.message);
    }
}
