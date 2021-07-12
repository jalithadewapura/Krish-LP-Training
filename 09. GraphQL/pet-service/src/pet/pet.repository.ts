import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, isValidObjectId } from "mongoose";
import { CreatePetInput } from "./dto/create-pet.input";
import { UpdatePetInput } from "./dto/update-pet.input";
import { Pet } from "./entities/pet.entity";
import { PetDocument } from "./pet.schema";


@Injectable()
export class PetRepository {

    constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument> ) {}

    async create(createPetInput: CreatePetInput): Promise<Pet> {
        const newPet = new this.petModel(createPetInput);
        return await newPet.save();
    }

    async findAll(): Promise<Pet[]> {
        return await this.petModel.find().sort('name').populate('owner');
    }

    async findById(id: string): Promise<Pet> {
        if(isValidObjectId(id))
            return await this.petModel.findById(id).populate('owner');

    }

    async update(id: string, updatePetInput: UpdatePetInput): Promise<Pet> {
        if(isValidObjectId(id))
            return await this.petModel.findByIdAndUpdate(id, updatePetInput, {new: true});
    }

    async remove(id: string): Promise<Pet> {
        if(isValidObjectId(id))
            return await this.petModel.findByIdAndRemove(id).populate('owner');
    }
}