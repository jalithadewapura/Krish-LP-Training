import { OwnersRepository } from './owners.repository';
import { Module } from '@nestjs/common';
import { OwnersController } from './owners.controller';
import { OwnersService } from './owners.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Owner, ownerSchema } from './schema/owners.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Owner.name, schema: ownerSchema}])
  ],
  controllers: [
    OwnersController
  ],
  providers: [
    OwnersService, 
    OwnersRepository
  ]
})
export class OwnersModule {}
