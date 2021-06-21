import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Pet } from '../models/pet.model';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pet-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private petService: PetService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    let length = this.petService.onGet().length;
    let previousElement = this.petService.pets[length - 1];
    let id = previousElement.id + 1;
    let pet: Pet = {
      id: id,
      name: form.value.name,
      age: form.value.age,
      type: form.value.type,
      gender: form.value.gender,
      owner: form.value.owner
    }
    this.petService.pets.push(pet);
    this.router.navigateByUrl('pets');
  }



}
