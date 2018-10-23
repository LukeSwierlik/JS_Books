class Book {
    constructor(cover, title, author, releaseDate, pages, link) {
        const [firstName, lastName] = author.split(' ');
        const [month, years] = releaseDate.split('/');

        const { large, small } = cover;

        this.cover = {
            large,
            small
        };
        this.title = title;
        this.author = {
            firstName,
            lastName,
        };
        this.releaseDate = {
            month,
            years
        };
        this.pages = pages;
        this.link = link;
    }
}

export default Book;