import { PetRepository } from '../repository/pet.repository';
import { PetCreateDto } from '../dto/pet-create.dto';
import { Pet } from '../schema/pet.schema';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PetSearchDto } from '../dto/pet-search.dto';
import { PetUpdateDto } from '../dto/pet-update.dto';

@Injectable()
export class PetsService {

    constructor(private petRepository: PetRepository) {}

    async getAllPets(): Promise<Pet[]> {
        return await this.petRepository.findAll();
    }

    async getPetById(id: string): Promise<Pet> {
        return await this.petRepository.findById(id);
    }

    async createPet(petCreateDto: PetCreateDto): Promise<Pet> {
        return await this.petRepository.create(petCreateDto);
    }

    async searchPet(petSearchDto: PetSearchDto): Promise<Pet[]> {
        const { name } = petSearchDto;
        let pets = await this.getAllPets();
        if(name)
            pets = pets.filter( pet => pet.name.toLowerCase().includes(name.toLowerCase()));
    
        return pets;
    }

    async updatePet(id: string, petUpdateDto: PetUpdateDto): Promise<Pet> {
        return this.petRepository.update(id, petUpdateDto);
    }


    async deletePet(id: string): Promise<Pet> {
        return this.petRepository.delete(id);
    }   
}
