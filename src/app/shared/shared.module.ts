import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './directive/dropdown.directive';
import { ReversePipe } from './reverse.pipe';

@NgModule({
    declarations : [
        DropdownDirective,
        ReversePipe
    ],
    exports: [
        CommonModule,
        DropdownDirective
    ]
})
export class SharedModule {
}
