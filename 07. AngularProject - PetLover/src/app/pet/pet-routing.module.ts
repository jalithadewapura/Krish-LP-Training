import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
    { path: 'pets', component: ListComponent},
    { path: 'pet/create', component: CreateComponent},
    { path: 'pet/update/:id', component: UpdateComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PetRoutingModule { }