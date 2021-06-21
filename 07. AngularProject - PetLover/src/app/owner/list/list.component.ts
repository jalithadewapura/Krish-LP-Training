import { Component, OnInit } from '@angular/core';
import owners from '../data/owners.json';
import { Owner } from '../models/owner.model';
import { OwnerService } from '../services/owner.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  owners: Owner[] = [];

  constructor(private ownerService: OwnerService) { }

  ngOnInit(): void {
    this.owners = this.ownerService.onGet();
  }

  onDelete(id: number) {
    this.ownerService.onDelete(id);
  }

}
