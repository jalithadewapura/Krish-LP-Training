import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../models/pet.model';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pet-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  id: number = 0;
  pet:any;
  
  constructor(private petSerive: PetService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as unknown as number;
    this.pet = this.petSerive.onGetPet(this.id);
  }

  onSubmit(form: NgForm) {
    let pet: Pet = {
      id: this.id,
      name: form.value.name,
      age: form.value.age,
      type: form.value.type,
      gender: form.value.gender,
      owner: form.value.owner
    };
    this.petSerive.onUpdate(pet);
    this.router.navigateByUrl('pets');
    

  }

}
