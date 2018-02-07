import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout';
import { MenuComponent } from './menu/menu';
import { RouterModule } from '@angular/router';

export const COMPONENTS = [
    LayoutComponent,
    MenuComponent,
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class ComponentsModule {}