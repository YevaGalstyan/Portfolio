import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardComponent
  ],
    exports: [
        HeaderComponent,
        FooterComponent,
        CardComponent
    ],
  imports: [
    CommonModule,
    RouterLink,
    MatTooltipModule,
    RouterLinkActive
  ]
})
export class SharedModule { }
