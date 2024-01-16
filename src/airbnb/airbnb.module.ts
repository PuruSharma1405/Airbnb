import { Module } from '@nestjs/common';
import { AirbnbController } from './airbnb.controller';
import { AirbnbService } from './airbnb.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LISTING_MODEL, ListingSchema } from 'src/schema/airbnbschema';

@Module({
  imports : [MongooseModule.forFeature([{name : LISTING_MODEL , schema : ListingSchema}])],
  controllers: [AirbnbController],
  providers: [AirbnbService]
})
export class AirbnbModule {}
