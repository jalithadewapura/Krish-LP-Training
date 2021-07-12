import { Owner, OwnerDocument } from './owner.schema';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { isValidObjectId, Model } from 'mongoose';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';


@Injectable()
export class OwnerRepository {

    constructor(@InjectModel(Owner.name) private ownerModel: Model<OwnerDocument>) {}

    async findAll(): Promise<Owner[]> {
        return await this.ownerModel.find().sort('first_name');
    }

    async create(createOwnerDto: CreateOwnerInput): Promise<Owner> {
        const newOwner = new this.ownerModel(createOwnerDto);
        return await newOwner.save();
    }

    async findById(id: string): Promise<Owner> {
        if(isValidObjectId(id))
            return await this.ownerModel.findById(id);
    }

    async update(id: string, updateOwnerDto: UpdateOwnerInput): Promise<Owner> {
        if(isValidObjectId(id))
            return await this.ownerModel.findByIdAndUpdate(id, updateOwnerDto, {new: true});
    }

    async delete(id: string): Promise<Owner> {
        if(isValidObjectId(id))
            return await this.ownerModel.findByIdAndRemove(id);
    }
}