import { Injectable } from '@angular/core';
import { Owner } from '../models/owner.model';
import owners from '../data/owners.json';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  owners: Owner[] = owners;

  constructor() { }

  onGet() {
    return this.owners;
  }

  onGetOwner(id: Number) {
    return this.owners.find(o => o.id == id);
  }

  onAdd(owner: Owner) {
    this.owners.push(owner);
  }

  onUpdate(owner: Owner) {
    let ownerIndex = this.owners.findIndex(o => o.id == owner.id);
    owners[ownerIndex] = owner;
  }

  onDelete(id: Number) {
    let ownerIndex = this.owners.findIndex(o => o.id == id);
    this.owners.splice(ownerIndex, 1);
  }
}
