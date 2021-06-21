import { Injectable } from '@angular/core';
import { Pet } from '../models/pet.model';
import pets from '../data/pets.json';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  pets: Pet[] = pets;
  constructor() { }

  onGet() {
    return this.pets;
  }

  onGetPet(id: number) {
    return this.pets.find(p => p.id == id);
  }

  onAdd(pet: Pet) {
    this.pets.push(pet);
  }

  onUpdate(pet: Pet) {
    let petIndex = this.pets.findIndex(p => p.id == pet.id);
    this.pets[petIndex] = pet;
  }

  onDelete(id: number) {
    let petIndex = this.pets.findIndex(p => p.id == id);
    this.pets.splice(petIndex, 1);
  }
}
