import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

// Components
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CardComponent} from './card/card.component';
import {ScrollToTopComponent} from './scroll-to-top/scroll-to-top.component';
import {PagingComponent} from './paging/paging.component';


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        CardComponent,
        ScrollToTopComponent,
        PagingComponent,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        CardComponent,
        ScrollToTopComponent,
        PagingComponent
    ],
    imports: [
        CommonModule,
        RouterLink,
        MatTooltipModule,
        RouterLinkActive
    ]
})
export class SharedModule {
}
