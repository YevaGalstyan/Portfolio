import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Components
import {ProjectsComponent} from './components/projects/projects.component';
import {EducationComponent} from './components/education/education.component';
import {ContactComponent} from './components/contact/contact.component';
import {HomeComponent} from './components/home/home.component';
import {MembershipsComponent} from './components/memberships/memberships.component';
import {ColophonComponent} from './components/colophon/colophon.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},

    {path: 'home', component: HomeComponent},
    {path: 'work', component: ProjectsComponent},
    {path: 'education', component: EducationComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'memberships', component: MembershipsComponent},
    {path: 'colophon', component: ColophonComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
