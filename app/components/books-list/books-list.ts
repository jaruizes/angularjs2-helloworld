import {Component} from '@angular/core';
import {BooksService} from "../../services/books/books.service";
import {Book} from "../../model/book";


@Component({
    selector: 'books-list',
    templateUrl: '/app/components/books-list/books-list.html'
})

export class BooksList {
    // Array of books. Filled it from BooksService
    private books:Book[];

    /**
     * Constructor
     * @param _booksService
     */
    constructor(private _booksService: BooksService) {
        this.books = this._booksService.getAll();
    }
}
