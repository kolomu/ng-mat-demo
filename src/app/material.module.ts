import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';

const material = [
    MatExpansionModule,
    MatSidenavModule
];

@NgModule({
    imports: [...material],
    exports: [...material]
})
export class MaterialModule { }
