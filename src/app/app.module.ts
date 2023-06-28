import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {EducationComponent} from './components/education/education.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MembershipsComponent} from './components/memberships/memberships.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ColophonComponent } from './components/colophon/colophon.component';
import {NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule} from 'ngx-google-analytics';

@NgModule({
    declarations: [
        AppComponent,
        ProjectsComponent,
        EducationComponent,
        MembershipsComponent,
        ContactComponent,
        HomeComponent,
        ColophonComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        BrowserAnimationsModule,
        NgxGoogleAnalyticsModule.forRoot('G-V8DGV3G31Z'),
        NgxGoogleAnalyticsRouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
