import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerRoutingModule } from './owner-routing.module';

import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent, 
    CreateComponent, 
    UpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    OwnerRoutingModule
  ],
  exports: [ 
    ListComponent
  ]
})
export class OwnerModule { }
