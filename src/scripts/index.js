import '../sass/main.scss';
import ControllerBook from './controller/ControllerBook';
import booksData from "../books.json";
import ModelBooks from "./models/Books";
import FiltersService from './service/FiltersService';
import ModelFiltres from './models/Filters';
import ControllerFiltres from './controller/ControllerFiltres';
import FiltersView from './view/filtersView';
import StorageService from './service/StorageService';


// BOOK
const modelBooks = new ModelBooks();
const controllerBook = new ControllerBook(modelBooks);

const storage = new StorageService(sessionStorage);


window.addEventListener('load', () => {
    controllerBook.loadBooksWithJSON(booksData);

    // FILTRES
    const filtersService = new FiltersService();

    const modelFiltres = new ModelFiltres();
    const controllerFiltres = new ControllerFiltres(modelFiltres, filtersService, modelBooks, storage);
    const viewFiltres = new FiltersView(controllerFiltres);

    controllerFiltres.renderBooks(modelBooks.books);
    controllerFiltres.loadFiltersWithStorage();


    viewFiltres.init();
});



