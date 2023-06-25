import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ProjectsComponent} from './projects/projects.component';
import {EducationComponent} from './education/education.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
    {path: '', redirectTo: 'about', pathMatch: 'full'},

    {path: 'about', component: AboutComponent},
    {path: 'work', component: ProjectsComponent},
    {path: 'education', component: EducationComponent},
    {path: 'contact', component: ContactComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
