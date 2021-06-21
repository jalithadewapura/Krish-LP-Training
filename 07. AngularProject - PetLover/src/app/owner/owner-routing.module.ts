import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
    { path: 'owners', component: ListComponent},
    { path: 'owner/create', component: CreateComponent},
    { path: 'owner/update/:id', component: UpdateComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class OwnerRoutingModule { }