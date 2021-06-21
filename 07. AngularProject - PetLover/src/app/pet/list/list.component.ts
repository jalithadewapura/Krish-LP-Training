import { Component, OnInit } from '@angular/core';
import { Pet } from '../models/pet.model';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  pets: Pet[] = [];

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.pets = this.petService.onGet();
  }

  onDelete(id: number) {
    this.petService.onDelete(id);
  }

}
