import { MONGO_CONNECTION } from './app.properties';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { OwnerModule } from './owner/owner.module';


@Module({
  imports: [
    MongooseModule.forRoot(MONGO_CONNECTION),
    GraphQLFederationModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql')
    }),
    OwnerModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
