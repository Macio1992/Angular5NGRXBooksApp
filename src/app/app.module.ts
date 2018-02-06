import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { reducers, metaReducers } from './reducers/reducers';
import { BooksService } from './services/books.service';

import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './effects/books.effects';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from './components/books.component';
import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([BooksEffects]),
    RouterModule.forRoot(routes)
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }