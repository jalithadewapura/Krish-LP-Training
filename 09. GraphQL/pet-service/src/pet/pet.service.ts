import { PetRepository } from './pet.repository';
import { Injectable } from '@nestjs/common';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Pet } from './pet.schema';

@Injectable()
export class PetService {

  constructor(private petRepository: PetRepository) {}

  async create(createPetInput: CreatePetInput) {
    return await this.petRepository.create(createPetInput);
  }

  async findAll() {
    return await this.petRepository.findAll();
  }

  async findOne(id: string) {
    return await this.petRepository.findById(id);
  }

  async update(id: string, updatePetInput: UpdatePetInput) {
    return await this.petRepository.update(id, updatePetInput);
  }

  async remove(id: string) {
    return await this.petRepository.remove(id);
  }
}
