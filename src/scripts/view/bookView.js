import {elements} from "../elements";

class BookView {
    constructor(book) {
        this.book = book;
    }

    render() {
        const { cover, title, author, releaseDate, pages, link} = this.book;

        const markup = `
            <li class="book">
                <div class="book_wrapper_counter">
                    <div class="book__wrapper">
                        <div class="book__cover" data-cover="${cover.large}">
                            <img src="${cover.small}">
                        </div>
                        
                        <!-- book__description -->
                        <div class="book__description">
                            <div class="book__title">
                                <span>${title}</span>
                            </div>
                
                            <div class="book__line"></div>
                
                            <div class="book__author">
                                <span>By ${author.firstName} ${author.lastName}</span>
                            </div>
                
                            <div class="book__details">
                                <div class="book__release">
                                    <span>Release Date: ${releaseDate.month}/${releaseDate.years}</span>
                                </div>
                
                                <div class="book__pages">
                                    <span>Pages: ${pages}</span>
                                </div>
                
                                <div class="book__wrapper-link">
                                    <span>Link: <a href="${link}" class="book__link" target="_blank">shop</a></span>
                                </div>
                            </div>
                        </div>
                        <!-- /book__description -->
                    </div>
                </div>
            </li>
        `;

        elements.books.insertAdjacentHTML('beforeend', markup);
    }
}

export default BookView;