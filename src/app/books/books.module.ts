import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "./theme/components/index";
import { RouterModule } from "@angular/router";
import { BooksComponent } from "./components/books.component";
import { BooksService } from "./services/books.service";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers/reducers';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './effects/books.effects';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        RouterModule.forChild([
            { path: 'find', component: BooksComponent }
        ]),
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([BooksEffects]),
    ],
    declarations: [
        BooksComponent
    ],
    providers: [BooksService]
})

export class BooksModule {}