import { PetRepository } from './pet.repository';
import { Injectable } from '@nestjs/common';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';

@Injectable()
export class PetService {

  constructor(private petRepository: PetRepository) {}

  async create(createPetInput: CreatePetInput) {
    return await this.petRepository.create(createPetInput);
  }

  async findAll() {
    return await this.petRepository.findAll();
  }

  findOne(id: string) {
    return this.petRepository.findById(id);
  }

  update(id: string, updatePetInput: UpdatePetInput) {
    return this.petRepository.update(id, updatePetInput);
  }

  remove(id: string) {
    return this.petRepository.remove(id);
  }
}
