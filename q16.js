class Book {
    title
    author
    price

    constructor(title,author,price) {
        this.title = title
        this.author = author
        this.price = price    
    }

    showDetails(){
        console.log(this.title+" "+this.author+" "+this.price);
    }
}

const book = new Book("Book","John",777)
book.showDetails()