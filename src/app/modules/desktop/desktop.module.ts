import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesktopRoutingModule } from './desktop-routing.module';
import {ProjectsComponent} from './components/projects/projects.component';
import {EducationComponent} from './components/education/education.component';
import {MembershipsComponent} from './components/memberships/memberships.component';
import {ContactComponent} from './components/contact/contact.component';
import {HomeComponent} from './components/home/home.component';
import {ColophonComponent} from './components/colophon/colophon.component';
import {ProjectItemComponent} from './components/projects/project-item/project-item.component';
import {MembershipItemComponent} from './components/memberships/membership-item/membership-item.component';
import {SharedModule} from '../../shared/shared.module';
import {ProjectsModule} from './components/projects/projects.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import {DesktopComponent} from './desktop.component';

@NgModule({
  declarations: [
    DesktopComponent,
    ProjectsComponent,
    EducationComponent,
    MembershipsComponent,
    ContactComponent,
    HomeComponent,
    ColophonComponent,
    ProjectItemComponent,
    MembershipItemComponent,
  ],
  imports: [
    CommonModule,
    DesktopRoutingModule,
    SharedModule,
    ProjectsModule,
    MatTooltipModule
  ]
})
export class DesktopModule { }
