import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerResolver } from './owner.resolver';
import { OwnerRepository } from './owner.repository';
import { Owner, ownerSchema } from './owner.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Owner.name, schema: ownerSchema}])
  ],
  providers: [
    OwnerResolver, 
    OwnerService, 
    OwnerRepository
  ]
})
export class OwnerModule {}
