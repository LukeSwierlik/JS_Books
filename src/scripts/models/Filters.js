class Filters {
    constructor() {
        this._valueFiltersPage = 0;
        this._radioOptionFilters = null;
    }

    get valueFiltersPage() {
        return this._valueFiltersPage;
    }

    set valueFiltersPage(value) {
        this._valueFiltersPage = value;
    }

    get radioOptionFilters() {
        return this._radioOptionFilters;
    }

    set radioOptionFilters(value) {
        this._radioOptionFilters = value;
    }
}

export default Filters;