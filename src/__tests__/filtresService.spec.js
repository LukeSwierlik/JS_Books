import {booksMock} from '../__mocks__/booksMock.js';
import {filters_option} from "../scripts/constants/constants";
import FiltersService from "../scripts/service/FiltersService";
import Book from "../scripts/models/Book";

describe('test a methods filtresService', () => {
    let originalBooks = [];
    const filtersService = new FiltersService();

    beforeEach(() => {
        originalBooks = [];

        booksMock.forEach(item => {
            const {cover, title, author, releaseDate, pages, link} = item;

            const book = new Book(cover, title, author, releaseDate, pages, link);
            originalBooks.push(book);
        });
    });

    it('test a method sort comparePages', () => {
        const valueSort = filters_option.COUNT_PAGES;

        const filterBooks = filtersService.orderByOption(valueSort, originalBooks)
            .map(book => book.pages);

        const expectValue = [166, 172, 254, 254, 334, 936];

        expect(filterBooks).toEqual(expectValue);
    });

    it('test a method sort releaseData', () => {
        const valueSort = filters_option.RELEASE_DATA;

        const filterBooks = filtersService.orderByOption(valueSort, originalBooks)
            .map(book => {
                return {
                    releaseDate: {
                        years: book.releaseDate.years,
                        month: book.releaseDate.month
                    }
                };
            });

        const expectValue = [
            {releaseDate: {years: "2001", month: "11"}},
            {releaseDate: {years: "2008", month: "12"}},
            {releaseDate: {years: "2012", month: "08"}},
            {releaseDate: {years: "2012", month: "12"}},
            {releaseDate: {years: "2014", month: "07"}},
            {releaseDate: {years: "2017", month: "07"}}
        ];

        expect(filterBooks).toEqual(expectValue);
    });

    it('test a method sort compareLastNameAuthor', () => {
        const valueSort = filters_option.LAST_NAME_AUTHOR;

        const filterBooks = filtersService.orderByOption(valueSort, originalBooks)
            .map(book => {
                return {
                    author: {
                        firstName: book.author.firstName,
                        lastName: book.author.lastName
                    }
                };
            });

        const expectValue = [
            {author: {firstName: "Nicolas", lastName: "Bevacqua"}},
            {author: {firstName: "Douglas", lastName: "Crockford"}},
            {author: {firstName: "Eric", lastName: "Elliott"}},
            {author: {firstName: "David", lastName: "Flanagan"}},
            {author: {firstName: "Cody", lastName: "Lindley"}},
            {author: {firstName: "Addy", lastName: "Osmani"}}
        ];

        expect(filterBooks).toEqual(expectValue);
    });

    it('test a method filtersPage', () => {
        const value = 200;

        const filtersBook = filtersService.filtersPage(value, originalBooks);

        const expectValue = 4;

        expect(filtersBook.length).toEqual(expectValue);
    });
});