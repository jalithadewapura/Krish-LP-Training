import { OwnerCreateDto } from './dto/owner-create.dto';
import { OwnersRepository } from './owners.repository';
import { Injectable } from '@nestjs/common';
import { Owner } from './schema/owners.schema';
import { OwnerUpdateDto } from './dto/owner-update.dto';

@Injectable()
export class OwnersService {

    constructor(private ownerRepository: OwnersRepository) {}

    async getAllOwners(): Promise<Owner[]> {
        return await this.ownerRepository.findAll();
    }

    async getOwner(id: string): Promise<Owner> {
        return await this.ownerRepository.findById(id);
    }

    async createOwner(ownerCreateDto: OwnerCreateDto): Promise<Owner> {
        return await this.ownerRepository.create(ownerCreateDto);
    }

    async updateOwner(id: string, ownerUpdateDto: OwnerUpdateDto): Promise<Owner> {
        return await this.ownerRepository.update(id, ownerUpdateDto);
    }

    async deleteOwner(id: string): Promise<Owner> {
        return await this.ownerRepository.delete(id);
    }

}
