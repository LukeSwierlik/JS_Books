import { filters_option } from "../constants/constants";

const comparePages = (a, b) => {
    return a.pages - b.pages;
};

const compareReleaseData = (a, b) => {
    const releaseDataA = new Date(a.releaseDate.years , a.releaseDate.month, 1);
    const releaseDataB = new Date(b.releaseDate.years , b.releaseDate.month, 1);

    return releaseDataA - releaseDataB;
};

const compareLastNameAuthor = (a, b) => {
    return a.author.lastName.localeCompare(b.author.lastName);
};

export const orderByOption = (value, books) => {
    let newBooks = [];

    switch(value) {
        case filters_option.COUNT_PAGES: {
            newBooks = books.sort(comparePages);
            break;
        }
        case filters_option.RELEASE_DATA: {
            newBooks = books.sort(compareReleaseData);
            break;
        }
        case filters_option.LAST_NAME_AUTHOR: {
            newBooks = books.sort(compareLastNameAuthor);
            break;
        }
        default: {
            break;
        }
    }

    return newBooks;
};

export const filtersPage = (value, originalBooks) => {
    const filterBooks = originalBooks.filter(book => book.pages >= value);

    return [...filterBooks];
};


export const saveFilters = (filtersBook) => {
    const filtersValue = JSON.stringify(filtersBook);

    localStorage.setItem('filters', filtersValue);
};

export const deleteFilters = () => {
    localStorage.removeItem('filters');
};