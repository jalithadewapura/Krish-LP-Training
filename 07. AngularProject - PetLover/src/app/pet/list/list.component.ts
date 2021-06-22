import { Component, OnInit } from '@angular/core';
import { Pet } from '../models/pet.model';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  filteredPets!: Pet[];
  private _nameFilter: string = '';

  set nameFilter(value: string) {
    this.filterByName();
    this._nameFilter = value;
  }

  get nameFilter(): string {
    return this._nameFilter;
  }

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.filteredPets = this.petService.onGet();
  }

  onDelete(id: number) {
    this.petService.onDelete(id);
  }

  filterByName() {
    this.filteredPets = this.petService.onGet().filter(pet => pet.name.includes(this.nameFilter));
  }

}
