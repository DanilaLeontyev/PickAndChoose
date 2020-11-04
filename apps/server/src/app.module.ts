import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: join(process.cwd(), '../../schema.gql'),
    })
  ]
})
export class AppModule { }
