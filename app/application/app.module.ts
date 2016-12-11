import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';
import {BooksList} from "../components/books-list/books-list";
import {BooksService} from "../services/books/books.service";
import {Footer} from "../components/footer/footer";
import {Navbar} from "../components/navbar/navbar";
import {Search} from "../components/search/search";
@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, BooksList, Footer, Navbar, Search],
    bootstrap: [AppComponent],
    providers: [BooksService]
})
export class AppModule {
}
