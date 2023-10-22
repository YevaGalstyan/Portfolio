import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {EducationComponent} from './components/education/education.component';
import {ContactComponent} from './components/contact/contact.component';
import {MembershipsComponent} from './components/memberships/memberships.component';
import {ColophonComponent} from './components/colophon/colophon.component';
import {DesktopComponent} from './desktop.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {
    path: '',
    component: DesktopComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'work', component: ProjectsComponent},

      {
        path: 'work',
        loadChildren: () => import('./components/projects/projects.module').then(m => m.ProjectsModule)
      },

      {path: 'education', component: EducationComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'memberships', component: MembershipsComponent},
      {path: 'colophon', component: ColophonComponent},

      {path: '**', redirectTo: 'home'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesktopRoutingModule { }
