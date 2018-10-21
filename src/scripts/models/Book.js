class Book {
    constructor(cover, title, author, releaseDate, pages, link) {
        const listAuthor = author.split(' ');
        const listReleaseDate = releaseDate.split('/');

        this.cover = {
            large: cover.large,
            small: cover.small
        };
        this.title = title;
        this.author = {
            firstName: listAuthor[0],
            lastName: listAuthor[1]
        };
        this.releaseDate = {
            month: listReleaseDate[0],
            years: listReleaseDate[1]
        };
        this.pages = pages;
        this.link = link;
    }
}

export default Book;