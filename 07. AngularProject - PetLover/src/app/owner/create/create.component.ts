import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Owner } from '../models/owner.model';
import { OwnerService } from '../services/owner.service';

@Component({
  selector: 'app-owner-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private ownerService: OwnerService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    let owner: Owner = {
      id: this.ownerService.onGet().length +1,
      first_name: form.value.first_name,
      last_name: form.value.last_name,
      email: form.value.email,
      phone: form.value.phone 
    }

    this.ownerService.onAdd(owner);
    this.router.navigateByUrl('owners');
  }

}
