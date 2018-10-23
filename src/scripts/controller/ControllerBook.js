import Book from "../models/Book";

class ControllerBook {
    constructor(modelBooks, filtersService) {
        this.modelBooks = modelBooks;
        this.filtersService = filtersService;
    }

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