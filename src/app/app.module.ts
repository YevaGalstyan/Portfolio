import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

// Modules
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule} from 'ngx-google-analytics';
import {MatTooltipModule} from '@angular/material/tooltip';

// Components
import {ProjectsComponent} from './components/projects/projects.component';
import {EducationComponent} from './components/education/education.component';
import {MembershipsComponent} from './components/memberships/memberships.component';
import {ContactComponent} from './components/contact/contact.component';
import {HomeComponent} from './components/home/home.component';
import {ColophonComponent} from './components/colophon/colophon.component';
import {ProjectItemComponent} from './components/projects/project-item/project-item.component';
import {ProjectsModule} from './components/projects/projects.module';
import { MembershipItemComponent } from './components/memberships/membership-item/membership-item.component';

@NgModule({
    declarations: [
        AppComponent,
        ProjectsComponent,
        EducationComponent,
        MembershipsComponent,
        ContactComponent,
        HomeComponent,
        ColophonComponent,
        ProjectItemComponent,
        MembershipItemComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        BrowserAnimationsModule,
        NgxGoogleAnalyticsModule.forRoot('G-V8DGV3G31Z'),
        NgxGoogleAnalyticsRouterModule,
        MatTooltipModule,
        ProjectsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
