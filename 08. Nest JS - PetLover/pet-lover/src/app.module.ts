import { MONGO_CONNECTION } from './app.properties';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [
    PetsModule, 
    MongooseModule.forRoot(MONGO_CONNECTION)
  ],

})
export class AppModule {}
