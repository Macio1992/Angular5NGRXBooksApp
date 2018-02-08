import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BooksComponent } from "./components/books-main/books-main";
import { BooksService } from "./services/books.service";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers/reducers';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './effects/books.effects';
import { BookSearchComponent } from "./components/book-search/book-search";
import { FormsModule } from "@angular/forms";
import { BookComponent } from "./components/book/book";
import { BooksListComponent } from "./components/books-list/books-list";
import { PaginationComponent } from "./components/pagination/pagination";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: BooksComponent }
        ]),
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([BooksEffects])
    ],
    declarations: [
        BooksComponent,
        BookSearchComponent,
        BookComponent,
        BooksListComponent,
        PaginationComponent
    ],
    providers: [BooksService]
})

export class BooksModule {}