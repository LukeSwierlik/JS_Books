import Book from "../models/Book";

class ControllerBook {
    constructor(modelBooks) {
        this.modelBooks = modelBooks;
    }
    
    // loadBooksWithUrl(url) {
    //     fetch(url)
    //         .then(data => data.json())
    //         .then(data => {
    //             data.forEach(item => {
    //                 const {cover, title, author, releaseDate, pages, link} = item;
    //
    //                 const book = new Book(cover, title, author, releaseDate, pages, link);
    //                 this.modelBooks.books.push(book);
    //             });
    //         })
    //         .catch(err => {
    //             console.log('Problem with downloading data. Error: ', err);
    //         });
    // }

    loadBooksWithJSON(booksData) {
        const newBooks = Array.from(booksData);

        newBooks.forEach(item => {
            const {cover, title, author, releaseDate, pages, link} = item;

            const book = new Book(cover, title, author, releaseDate, pages, link);
            this.modelBooks.books.push(book);
        });
    }
}

export default ControllerBook;