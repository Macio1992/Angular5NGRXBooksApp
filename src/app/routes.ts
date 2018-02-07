import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    // {
    //     path: '', redirectTo: '/books', pathMatch: "full"
    // },
    // {
    //     path: '',
    //     component: AppComponent
    // },
    {
        path: 'books',
        loadChildren: './books/books.module#BooksModule'
    }
];