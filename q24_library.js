const libraryName = "National Library"

function listBooks() {
    console.log("Books list");
    console.log("Think big");
    console.log("Deep Work");
    console.log("The power");
}

class Book {
    title
    author
    constructor(title,author) {
        this.title = title
        this.author = author
    }
    displayBookInfo(){
        console.log(this.title+"  "+this.author);
    }
}
module.exports = {libraryName,listBooks,Book}