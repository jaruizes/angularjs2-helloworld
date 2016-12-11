import {Book} from "../../model/book";

export class BooksService{
  private _books: Book[];

  constructor() {
    this._books = [
      {id:1, isbn: 'ISBN001', title:'Title 1', author:'Author 1'},
      {id:2, isbn: 'ISBN002', title:'Title 2', author:'Author 2'},
      {id:3, isbn: 'ISBN003', title:'Title 3', author:'Author 3'},
      {id:4, isbn: 'ISBN004', title:'Title 4', author:'Author 4'},
      {id:5, isbn: 'ISBN005', title:'Title 5', author:'Author 5'}
    ];
  }

  getAll() : Book[] {
    return this._books;
  }

  add(book: Book) {
    this._books.push(book);
  }

}
