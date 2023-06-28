import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    MatTooltipModule,
    RouterLinkActive
  ]
})
export class SharedModule { }
