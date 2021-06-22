import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { PetRoutingModule } from './pet-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListComponent, 
    CreateComponent, 
    UpdateComponent],
  imports: [
    CommonModule,
    FormsModule,
    PetRoutingModule
  ],
  exports: [
    PetRoutingModule
  ]
})
export class PetModule { }
