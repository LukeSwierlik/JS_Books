import { elements } from '../elements';
import BookView from "../view/bookView";
import {selectors} from '../constants/constants';
import LightBoxView from '../view/lightboxView';

class ControllerFiltres {
    constructor(modelFiltres, filtersService, modelBooks, storage) {
        this.modelFiltres = modelFiltres;
        this.filtersService = filtersService;
        this.modelBooks = modelBooks;
        this.storage = storage;
    }

    handleEvent(event) {
        event.stopPropagation();

        const { type, target: { value, className } } = event;

        switch(type) {
            case 'click': {
                if(className === 'filters__clear') {
                    this.resetFilters();
                } else {
                    this.clickHandler(value);
                    this.saveFiltersToStorage();
                }
                
                break;
            }
            case 'change': {
                this.changeHandler(value);
                this.saveFiltersToStorage();
                break;
            }
            default: {
                break;
            }
        }
    }

    clickHandler(value) {
        const { valueFiltersPage } = this.modelFiltres;

        let books = this.modelBooks.books;

        if(valueFiltersPage) {
            books = this.filtersService.filtersPage(valueFiltersPage, this.modelBooks.books);
        }

        this.modelFiltres.radioOptionFilters = value;
        const filterBooks = this.filtersService.orderByOption(value, books);

        this.clearRenderBooks();
        this.renderBooks(filterBooks);
    }

    changeHandler(value) {
        const pages = parseInt(value, 10);

        this.modelFiltres.valueFiltersPage = pages;
        const filterBooks = this.filtersService.filtersPage(pages, this.modelBooks.books);

        this.clearRenderBooks();
        this.renderBooks(filterBooks);
    }

    clearRenderBooks() {
        elements.books.innerHTML = '';
    }

    renderBooks(books) {
        books.forEach(book => {
            const bookView = new BookView(book);
            bookView.render();
        });

        this.showLightBox();
    }

    showLightBox() {
        const coverElementsListWithNodeList = [...document.querySelectorAll(selectors.COVER)];
    
        if (coverElementsListWithNodeList.length) {
            coverElementsListWithNodeList.forEach(element => {
                element.addEventListener('click', (event) => {
                    const coverLarge = event.target.closest(selectors.COVER).dataset.cover;
                    elements.lightbox.classList.add('lightbox--active');
    
                    const lightBoxView = new LightBoxView(coverLarge);
                    lightBoxView.render();
                });
            });
        }
    };

    saveFiltersToStorage() {
        const { radioOptionFilters, valueFiltersPage } = this.modelFiltres;

        this.storage.radioOptionFilters = radioOptionFilters;
        this.storage.valueFiltersPage = valueFiltersPage;
    }

    loadFiltersWithStorage() {
        const radioOptionFiltersWithStorage = this.storage.radioOptionFilters;
        const valueFiltersPageWithStorage = this.storage.valueFiltersPage || 0;

        if(parseInt(valueFiltersPageWithStorage, 10)) {
            this.changeHandler(valueFiltersPageWithStorage);

            elements.filterPages.value = valueFiltersPageWithStorage;
        }

        if(radioOptionFiltersWithStorage) {
            this.clickHandler(radioOptionFiltersWithStorage);

            const radioElementListWithNodeList = [...elements.sort];
            radioElementListWithNodeList.forEach(option => {
                if(option.value === radioOptionFiltersWithStorage) {
                    option.checked = true;
                }
            });
        }
    }

    resetInputsFilters() {
        elements.filterPages.value = '';

        const radioElementListWithNodeList = [...elements.sort];
        radioElementListWithNodeList.forEach(option => option.checked = false);
    }

    resetFilters() {
        this.storage.reset();

        this.modelFiltres.valueFiltersPage = 0;
        this.modelFiltres.radioOptionFilters = null;

        this.resetInputsFilters();
        this.clearRenderBooks();
        this.renderBooks(this.modelBooks.books);
    }
    
}

export default ControllerFiltres;