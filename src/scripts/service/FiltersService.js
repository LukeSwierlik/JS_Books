import { filters_option } from "../constants/constants";


class FilterService {
    constructor() {
        this.orderFiltersValue = '';
        this.filtersPageValue = 0;
    }

    comparePages(a, b) {
        return a.pages - b.pages;
    };

    compareReleaseData (a, b) {
        const releaseDataA = new Date(a.releaseDate.years , a.releaseDate.month, 1);
        const releaseDataB = new Date(b.releaseDate.years , b.releaseDate.month, 1);
    
        return releaseDataA - releaseDataB;
    };

    compareLastNameAuthor (a, b) {
        return a.author.lastName.localeCompare(b.author.lastName);
    };

    orderByOption (value, books) {
        let newBooks = [];
    
        switch(value) {
            case filters_option.COUNT_PAGES: {
                newBooks = books.sort(this.comparePages);
                break;
            }
            case filters_option.RELEASE_DATA: {
                newBooks = books.sort(this.compareReleaseData);
                break;
            }
            case filters_option.LAST_NAME_AUTHOR: {
                newBooks = books.sort(this.compareLastNameAuthor);
                break;
            }
            default: {
                break;
            }
        }
    
        return newBooks;
    };

    filtersPage(value, originalBooks) {
        const filterBooks = originalBooks.filter(book => book.pages >= value);
    
        return [...filterBooks];
    };
    
}

export default FilterService;