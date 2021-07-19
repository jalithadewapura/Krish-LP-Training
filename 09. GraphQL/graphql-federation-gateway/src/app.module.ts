import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';


@Module({
  imports: [GraphQLGatewayModule.forRoot({
    server: {
      cors: true,
    },
    gateway: {
      serviceList: [
        { name: "owners", url: "http://localhost:3000/graphql" },
        { name: "pets", url: "http://localhost:3001/graphql" }
      ]
    }
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
