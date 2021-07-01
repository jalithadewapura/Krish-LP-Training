import { PetUpdateDto } from '../dto/pet-update.dto';
import { PetCreateDto } from '../dto/pet-create.dto';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, isValidObjectId } from "mongoose";

import { Pet, PetDocument } from "../schema/pet.schema";

@Injectable()
export class PetRepository {

    constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument> ) {}

    async create(petCreateDTO: PetCreateDto): Promise<Pet> {
        const newPet = new this.petModel(petCreateDTO);
        return await newPet.save();
    }

    async findAll(): Promise<Pet[]> {
        return await this.petModel.find();
    }

    async findById(id: string): Promise<Pet> {
        if(isValidObjectId(id))
            return await this.petModel.findById(id);

    }

    async update(id: string, petUpdateDto: PetUpdateDto): Promise<Pet> {
        if(isValidObjectId(id))
            return await this.petModel.findByIdAndUpdate(id, petUpdateDto, {new: true});
    }

    async delete(id: string): Promise<Pet> {
        if(isValidObjectId(id))
            return await this.petModel.findByIdAndRemove(id);
    }
}