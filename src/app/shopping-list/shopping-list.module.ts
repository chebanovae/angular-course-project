import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListEditorComponent } from './shopping-list-editor/shopping-list-editor.component';
import { ShoppingRoutingModule } from './shopping-list-routing.module';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingListEditorComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ShoppingRoutingModule
    ]
})
export class ShoppingListModule {
}
