import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProjectsRoutingModule} from './projects-routing.module';
import { PositionItemComponent } from './position-item/position-item.component';


@NgModule({
    declarations: [
        PositionItemComponent
    ],
    exports: [
        PositionItemComponent
    ],
    imports: [
        CommonModule,
        ProjectsRoutingModule
    ]
})
export class ProjectsModule {
}
