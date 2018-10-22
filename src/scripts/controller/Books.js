import Book from "../models/Book";
import {renderBook} from "../view/bookView";

export const controlBooks = (booksData) => {
    const newBooks = Array.from(booksData);
    const books = [];

    newBooks.forEach(item => {
        const {cover, title, author, releaseDate, pages, link} = item;

        const book = new Book(cover, title, author, releaseDate, pages, link);
        books.push(book);

        renderBook(book);
    });

    return books;
};