import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OwnerModule } from './owner/owner.module';
import { FormsModule } from '@angular/forms';
import { PetModule } from './pet/pet.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    OwnerModule,
    PetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
