import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, isValidObjectId } from "mongoose";
import { CreatePetInput } from "./dto/create-pet.input";
import { UpdatePetInput } from "./dto/update-pet.input";
import { PetDocument, Pet} from "./pet.schema";


@Injectable()
export class PetRepository {

    constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument> ) {}

    async create(createPetInput: CreatePetInput): Promise<Pet> {
        const newPet = new this.petModel(createPetInput);
        return await newPet.save();
    }

    async findAll(): Promise<Pet[]> {
        return await this.petModel.find().sort('name');
    }

    async findById(id: string): Promise<Pet> {
        if(isValidObjectId(id))
            return await this.petModel.findById(id);

    }

    async findOfOnwer(ownerId: string): Promise<Pet[]> {
        if(isValidObjectId(ownerId))
            return await this.petModel.find({ownerId: ownerId});
    }

    async update(id: string, updatePetInput: UpdatePetInput): Promise<Pet> {
        if(isValidObjectId(id))
            return await this.petModel.findByIdAndUpdate(id, updatePetInput, {new: true});
    }

    async remove(id: string): Promise<Pet> {
        if(isValidObjectId(id))
            return await this.petModel.findByIdAndRemove(id);
    }
}