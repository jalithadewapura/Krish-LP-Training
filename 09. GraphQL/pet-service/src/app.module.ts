import { Owner } from './pet/entities/owner.entity';
import { Module } from '@nestjs/common';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { MONGO_CONNECTION } from './app.properties';
import { PetModule } from './pet/pet.module';

@Module({
  imports: [
    PetModule,
    GraphQLFederationModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
      buildSchemaOptions: {
        orphanedTypes: [Owner]
      }
    }),
    MongooseModule.forRoot(MONGO_CONNECTION)
  ],
  controllers: [],
  providers: []
})

export class AppModule {}


