import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from '../models/owner.model';
import { OwnerService } from '../services/owner.service';

@Component({
  selector: 'app-owner-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  id:number = 0;
  owner:any;
  constructor(private router: Router, private ownerService: OwnerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as unknown as number;
    this.owner = this.ownerService.onGetOwner(this.id);
  }

  onSubmit(form: NgForm){

    let owner: Owner = {
      id: this.id,
      first_name: form.value.first_name,
      last_name: form.value.last_name,
      email: form.value.email,
      phone: form.value.phone
    }

    this.ownerService.onUpdate(owner);
    this.router.navigateByUrl('owners');
  }

}
