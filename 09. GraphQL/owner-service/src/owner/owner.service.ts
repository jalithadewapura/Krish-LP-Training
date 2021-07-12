import { OwnerRepository } from './owner.repository';
import { Owner } from './owner.schema';
import { Injectable } from '@nestjs/common';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';

@Injectable()
export class OwnerService {

  constructor(private ownerRepository: OwnerRepository){}

  async create(createOwnerInput: CreateOwnerInput): Promise<Owner> {
    return await this.ownerRepository.create(createOwnerInput);
  }

  async findAll(): Promise<Owner[]> {
    return await this.ownerRepository.findAll();
  }

  async findOne(id: string): Promise<Owner> {
    return await this.ownerRepository.findById(id);
  }

  async update(id: string, updateOwnerInput: UpdateOwnerInput): Promise<Owner> {
    return await this.ownerRepository.update(id, updateOwnerInput);
  }

  async remove(id: string): Promise<Owner> {
    return await this.ownerRepository.delete(id);
  }
}
