import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { AirbnbService } from './airbnb.service';
import { CreateListingDto } from 'src/dto/create_airbnbListing-dto';
import { ListingsAndReview } from 'src/schema/airbnbschema';

@Controller('airbnb')
export class AirbnbController {
    constructor(private airbnbService : AirbnbService){}

    @Get()
    async getAllListing(): Promise<ListingsAndReview[]>{
        return await this.airbnbService.getAllListing()
    }

    @Get('/:id')
    async getListingById(@Param('id') id : string): Promise<ListingsAndReview[]>{
        return await this.airbnbService.getListingById(id)
    }

    @Get('/s1/search')
    async getListing(
        @Query('propertyType') propertyType : string,
        @Query('roomType') roomType : string,
        @Query('bedrooms') bedroom : number,
    ): Promise<ListingsAndReview[]>{
        return await this.airbnbService.getListing(propertyType,roomType,bedroom)
    }

    @Post()
    async createListing(
        @Body() createListing : CreateListingDto
    ): Promise<ListingsAndReview>{
        return await this.airbnbService.createListing(createListing)
    }

    @Put('/update/:id')
    async updateListing(
        @Param('id') id : string,
        @Body() updateListing : CreateListingDto
    ){
        return await this.airbnbService.updateListing(id ,updateListing)
    }

    @Delete('/delete/:id')
    async deleteListing(
        @Param('id') id : string
    ): Promise<ListingsAndReview>{
        return await this.airbnbService.deleteListing(id)
    }   
}
