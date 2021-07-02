import { MONGO_CONNECTION } from './app.properties';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetsModule } from './pets/pets.module';
import { OwnersModule } from './owners/owners.module';

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_CONNECTION), 
    PetsModule, 
    OwnersModule
  ],

})
export class AppModule {}
