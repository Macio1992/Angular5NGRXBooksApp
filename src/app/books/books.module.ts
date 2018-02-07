import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BooksComponent } from "./components/books.component";
import { BooksService } from "./services/books.service";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers/reducers';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './effects/books.effects';
import { BookSearch } from "./components/book-search";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: BooksComponent }
        ]),
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([BooksEffects]),
    ],
    declarations: [
        BooksComponent,
        BookSearch
    ],
    providers: [BooksService]
})

export class BooksModule {}