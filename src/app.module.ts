import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot();
@Module({
  imports: [UsersModule, MongooseModule.forRoot(process.env.MONGO_URL)],
  controllers: [],
  providers: [],
})
export class AppModule {}
