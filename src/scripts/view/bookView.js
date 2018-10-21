import {elements} from "../elements";


export const clearBooks = () => {
    elements.books.innerHTML = '';
};

export const renderBooks = (books) => {
    books.forEach(book => {
        renderBook(book);
    });
};

export const renderBook = (book) => {
    const markup = `
        <li class="book">
            <div class="book__wrapper">
                <div class="book__cover" data-cover="${book.cover.large}">
                      <img src="${book.cover.small}">
                </div>
        
                <div class="book__description">
                    <div class="book__title">
                        <span>${book.title}</span>
                    </div>
        
                    <div class="book__line"></div>
        
                    <div class="book__author">
                        <span>By ${book.author.firstName} ${book.author.lastName}</span>
                    </div>
        
                    <div class="book__details">
                        <div class="book__release">
                            <span>Release Date: ${book.releaseDate.month}/${book.releaseDate.years}</span>
                        </div>
        
                        <div class="book__pages">
                            <span>Pages: ${book.pages}</span>
                        </div>
        
                        <div class="book__wrapper-link">
                            <span>Link: <a href="${book.link}" class="book__link" target="_blank">shop</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    `;

    elements.books.insertAdjacentHTML('beforeend', markup);
};