"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var books_service_1 = require("../../services/books/books.service");
var BooksList = (function () {
    /**
     * Constructor
     * @param _booksService
     */
    function BooksList(_booksService) {
        this._booksService = _booksService;
        this.books = this._booksService.getAll();
    }
    BooksList = __decorate([
        core_1.Component({
            selector: 'books-list',
            templateUrl: '/app/components/books-list/books-list.html'
        }), 
        __metadata('design:paramtypes', [books_service_1.BooksService])
    ], BooksList);
    return BooksList;
}());
exports.BooksList = BooksList;
//# sourceMappingURL=books-list.js.map