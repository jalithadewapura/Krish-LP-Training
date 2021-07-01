import { PetCreateDto } from '../dto/pet-create.dto';
import { PetUpdateDto } from '../dto/pet-update.dto';
import { PetSearchDto } from '../dto/pet-search.dto';
import { PetsService } from '../service/pets.service';
import { Pet } from '../schema/pet.schema';
import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query, UsePipes } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';

@Controller('pets')
export class PetsController {

    constructor(private petsSevice: PetsService) {}

    @Get()
    async getAllPets( @Query() param: PetSearchDto ): Promise<Pet[]> {
        if(Object.keys(param).length)
            return this.petsSevice.searchPet(param);

        return await this.petsSevice.getAllPets();
    }

    @Get('/:id')
    async getPetById(@Param('id') id: string): Promise<Pet> {
        const pet = await this.petsSevice.getPetById(id);

        if(!pet)
            throw new NotFoundException('Pet does not exist.');

        return pet;
    }

    @Post()
    @UsePipes(ValidationPipe)
    async createPet(@Body() petCreateDto: PetCreateDto): Promise<Pet> {
            return await this.petsSevice.createPet(petCreateDto);
  

    }

    @Put(':id')
    @UsePipes(ValidationPipe)
    async updatePet( @Param('id') id: string, @Body() updatePetDto: PetUpdateDto ): Promise<Pet> {
        const pet = await this.petsSevice.updatePet(id, updatePetDto);
        if(!pet)
            throw new NotFoundException('Pet does not exist.');

        return pet;
        
    }

    @Delete(':id')
    async deletePet(@Param('id')id: string): Promise<Pet> {
        const pet = await this.petsSevice.deletePet(id);

        if(!pet)
            throw new NotFoundException('Pet does not exist.');

        return pet;
    }
}

