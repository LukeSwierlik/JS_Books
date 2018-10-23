class StorageService {
    constructor(storage) {
        this.storage = storage;
    }

    get radioOptionFilters() {
        return this.storage.getItem('radioOptionFilters');
    }

    get valueFiltersPage() {
        return this.storage.getItem('valueFiltersPage');
    }

    set radioOptionFilters(radioOptionFilters) {
        this.storage.setItem('radioOptionFilters', radioOptionFilters);
    }

    set valueFiltersPage(valueFiltersPage) {
        this.storage.setItem('valueFiltersPage', valueFiltersPage);
    }

    reset() {
        this.storage.removeItem('radioOptionFilters');
        this.storage.removeItem('valueFiltersPage');
    }
}

export default StorageService;