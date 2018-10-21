import { selectors, elementsName } from "./constants/constants";

const documentQuerySelector = (selector) => {
    return document.querySelector(selector);
};

const documentGetElementsByName = (elementName) => {
    return document.getElementsByName(elementName);
};

export const elements = {
    books: documentQuerySelector(selectors.BOOKS),
    filterPages: documentQuerySelector(selectors.FILTER_PAGES),
    sort: documentGetElementsByName(elementsName.SORT),
    lightbox: documentQuerySelector(selectors.LIGHTBOX),
    cover: documentQuerySelector(selectors.COVER),
    filtersClear: documentQuerySelector(selectors.FILTERS_CLEAR),
    lightboxClose: documentQuerySelector(selectors.LIGHTBOX_CLOSE)
};
