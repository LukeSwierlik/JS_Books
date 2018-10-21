import '../sass/main.scss';
import {orderByOption, filtersPage, saveFilters, deleteFilters} from "./service/FiltersService";
import {controlBooks} from './controller/Books';
import {clearBooks, renderBooks} from "./view/bookView";
import {elements} from "./elements";
import {renderLightBox} from "./view/lightboxView";
import {selectors} from "./constants/constants";

const STATE = {
    originalBooks: [],
    filtersBookPages: [],
    isLoading: true,
    filtersBook: {
        valueFiltersPage: 0,
        filtersOption: '',
        isFilter: false
    }
};

const showCover = () => {
    const coverElement = [...document.querySelectorAll(selectors.COVER)];
    console.log('coverElement', coverElement);

    if (coverElement.length) {
        coverElement.forEach(element => {
            element.addEventListener('click', (event) => {
                const coverLarge = event.target.closest(selectors.COVER).dataset.cover;
                elements.lightbox.classList.add('lightbox--active');

                renderLightBox(coverLarge);
            });
        });
    }
};

const readSaveFilters = (filersLocalStorage, originalBooks) => {
    const {valueFiltersPage, filtersOption} = filersLocalStorage;
    STATE.filtersBookPages = [...STATE.originalBooks];

    if (valueFiltersPage) {
        STATE.filtersBookPages = filtersPage(valueFiltersPage, originalBooks);
        elements.filterPages.value = valueFiltersPage;

        STATE.filtersBook.isFilter = true;
        STATE.filtersBook.valueFiltersPage = parseInt(valueFiltersPage, 10);
    }

    if (filtersOption) {
        STATE.filtersBookPages = orderByOption(filtersOption, STATE.filtersBookPages);
        STATE.filtersBook.isFilter = true;

        [...elements.sort].forEach(option => {
            if(option.value === filtersOption) {
                option.checked = true;
            }
        });
    }

    if (STATE.filtersBook.isFilter) {
        clearBooks();
        renderBooks(STATE.filtersBookPages);
    }

};

window.addEventListener('load', () => {
    STATE.originalBooks = controlBooks();
    STATE.isLoading = false;

    const filersLocalStorage = JSON.parse(localStorage.getItem('filters'));

    if (filersLocalStorage) {
        readSaveFilters(filersLocalStorage, STATE.originalBooks);
    }

    if (!STATE.isLoading) {
        showCover();
    }
});

[...elements.sort].forEach(option => {
    option.addEventListener('click', ({target}) => {
        const {value} = target;

        clearBooks();

        STATE.filtersBook.filtersOption = value;
        const filterBooks = orderByOption(value, STATE.filtersBookPages);

        renderBooks(filterBooks);
        showCover();
        saveFilters(STATE.filtersBook);
    });
});

elements.filterPages.addEventListener('change', ({target}) => {
    const {value} = target;
    const pages = parseInt(value, 10);

    clearBooks();
    console.log('pages', pages);

    STATE.filtersBook.valueFiltersPage = pages;
    STATE.filtersBookPages = filtersPage(pages, STATE.originalBooks);

    renderBooks(STATE.filtersBookPages);
    showCover();
    saveFilters(STATE.filtersBook);
});

const clearFilters = () => {
    clearBooks();
    deleteFilters();
    elements.filterPages.value = '';
    STATE.filtersBookPages = STATE.originalBooks;
    controlBooks(STATE.originalBooks);
    showCover();
};

elements.filtersClear.addEventListener('click', () => {
    clearFilters();
});


const keyPressed = (event) => {
    // leftAlt + r
    if(event.altKey && event.which === 82) {
        clearFilters();
    }
};

window.addEventListener('keyup', keyPressed);

