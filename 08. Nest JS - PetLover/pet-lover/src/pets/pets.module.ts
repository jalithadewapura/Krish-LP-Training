import { PetSchema, Pet } from './schema/pet.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { PetRepository } from './repository/pet.repository';
import { Module } from '@nestjs/common';
import { PetsController } from './controller/pets.controller';
import { PetsService } from './service/pets.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Pet.name, schema: PetSchema}])
  ],
  controllers: [
    PetsController
  ],
  providers: [
    PetsService,
    PetRepository
  ]
})
export class PetsModule {}
