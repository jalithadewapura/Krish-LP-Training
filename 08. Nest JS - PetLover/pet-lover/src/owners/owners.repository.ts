import { Owner, OwnerDocument } from './schema/owners.schema';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { isValidObjectId, Model } from 'mongoose';
import { OwnerCreateDto } from './dto/owner-create.dto';
import { OwnerUpdateDto } from './dto/owner-update.dto';


@Injectable()
export class OwnersRepository {

    constructor(@InjectModel(Owner.name) private ownerModel: Model<OwnerDocument>) {}

    async findAll(): Promise<Owner[]> {
        return await this.ownerModel.find().sort('first_name');
    }

    async create(ownerCreateDto: OwnerCreateDto): Promise<Owner> {
        const newOwner = new this.ownerModel(ownerCreateDto);
        return await newOwner.save();
    }

    async findById(id: string): Promise<Owner> {
        if(isValidObjectId(id))
            return await this.ownerModel.findById(id);
    }

    async update(id: string, ownerUpdateDto: OwnerUpdateDto): Promise<Owner> {
        if(isValidObjectId(id))
            return await this.ownerModel.findByIdAndUpdate(id, ownerUpdateDto, {new: true});
    }

    async delete(id: string): Promise<Owner> {
        if(isValidObjectId(id))
            return await this.ownerModel.findByIdAndRemove(id);
    }
}

