import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetResolver } from './pet.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Pet } from './entities/pet.entity';
import { PetSchema } from './pet.schema';
import { PetRepository } from './pet.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Pet.name, schema: PetSchema}])
  ],
  providers: [
    PetResolver, 
    PetService,
    PetRepository
  ]
})
export class PetModule {}
