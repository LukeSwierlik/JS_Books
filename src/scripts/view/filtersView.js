import {elements} from '../elements';

class FiltersView {
    constructor(controller) {
        this.controller = controller;
        this.inputFiltersPages = elements.filterPages;
        this.buttonClear = elements.filtersClear;
    }

    formGroupListener() {
        const radioElementListWithNodeList = [...elements.sort];

        radioElementListWithNodeList.forEach(option => {
            option.addEventListener('click', this.controller);
        });
    }

    inputFiltersPagesListener() {
        this.inputFiltersPages.addEventListener('change', this.controller);
    }

    buttonClearListener() {
        this.buttonClear.addEventListener('click', this.controller);
    }

    init() {
        this.formGroupListener();
        this.inputFiltersPagesListener();
        this.buttonClearListener();
    }
}

export default FiltersView;