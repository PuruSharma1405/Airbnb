import { Module } from '@nestjs/common';
import { AirbnbModule } from './airbnb/airbnb.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal : true}),
    MongooseModule.forRoot(process.env.DATABASE_URL)
    ,AirbnbModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
