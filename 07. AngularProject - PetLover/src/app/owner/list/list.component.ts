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


  filteredOwners: Owner[] = [];

  private _nameFilter: string = '';

  set nameFilter(value: string) {
    this.filterByName();
    this._nameFilter = value;
  }

  get nameFilter(): string {
    return this._nameFilter;
  }

  constructor(private ownerService: OwnerService) { }

  ngOnInit(): void {
    this.filteredOwners = this.ownerService.onGet();
  }

  onDelete(id: number) {
    this.ownerService.onDelete(id);
  }

  filterByName() {
    this.filteredOwners = this.ownerService.onGet().filter( owner => owner.first_name.includes(this.nameFilter));
  }

}
