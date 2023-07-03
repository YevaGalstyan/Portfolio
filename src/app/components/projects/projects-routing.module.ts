import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectsComponent} from './projects.component';
import {ProjectItemComponent} from './project-item/project-item.component';

const routes: Routes = [
    {
        path: '',
        component: ProjectsComponent
    },

    {
        path: ':name',
        component: ProjectItemComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsRoutingModule {
}
