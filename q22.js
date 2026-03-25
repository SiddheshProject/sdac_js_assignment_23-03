class InvalidBookError extends Error {
    constructor(message) {
        super(message)
        this.name = "InvalidBookError"
    }
}

function addBook(book_price) {
    try {
        if (book_price < 0) {
            throw new InvalidBookError("Book price can't be < 0");
            
        } else {
            console.log("Book Added.....");
        }
    } catch (error) {
        console.log(error.name+"  :  "+error.message);
        
    }
}

addBook(96)
console.log("---------------------");
addBook(-96)