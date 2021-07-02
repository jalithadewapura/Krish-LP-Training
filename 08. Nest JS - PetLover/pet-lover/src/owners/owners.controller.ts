import { OwnerCreateDto } from './dto/owner-create.dto';
import { OwnersService } from './owners.service';
import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { Owner } from './schema/owners.schema';
import { OwnerUpdateDto } from './dto/owner-update.dto';

@Controller('owners')
export class OwnersController {

    constructor(private ownersService: OwnersService) { }

    @Get()
    async getAllOwners(): Promise<Owner[]> {
        return this.ownersService.getAllOwners();
    }

    @Get('/:id')
    async getOwnerById(@Param('id') id: string): Promise<Owner> {
        const owner = await this.ownersService.getOwner(id);

        if(!owner)
            throw new NotFoundException('Owner does not exist.');

        return owner;
    }

    @Post()
    @UsePipes(ValidationPipe)
    async createOwner(@Body() ownerCreateDto: OwnerCreateDto): Promise<Owner> {
        return await this.ownersService.createOwner(ownerCreateDto);
    }

    @Put('/:id')
    @UsePipes(ValidationPipe)
    async updateOwner(@Param('id') id: string, @Body() ownerUpdateDto: OwnerUpdateDto): Promise<Owner> {
        const owner = await this.ownersService.updateOwner(id, ownerUpdateDto);

        if(!owner)
            throw new NotFoundException('Owner does not exist.');

        return owner;
    }

    @Delete('/:id')
    async deleteOwner(@Param('id') id: string): Promise<Owner> {
        const owner = await this.ownersService.deleteOwner(id);

        if(!owner)
            throw new NotFoundException('Owner does not exist.');

        return owner;
    }



}
