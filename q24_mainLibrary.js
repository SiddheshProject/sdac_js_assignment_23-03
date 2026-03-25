const { libraryName, listBooks, Book} = require("./q24_library")

console.log(libraryName);

console.log("-------------------------------");

listBooks()

console.log("-------------------------------");

const book = new Book("The power","Cal")
book.displayBookInfo()