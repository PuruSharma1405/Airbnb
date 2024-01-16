import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { off } from 'node:process';
import { skip } from 'node:test';
import { CreateListingDto } from 'src/dto/create_airbnbListing-dto';
import { LISTING_MODEL, ListingsAndReview } from 'src/schema/airbnbschema';

@Injectable()
export class AirbnbService {
    constructor(
        @InjectModel(LISTING_MODEL)
        private listingModel: mongoose.Model<ListingsAndReview>
    ) { }

    async getAllListing () : Promise<ListingsAndReview[]>{
        return await this.listingModel.find({}, {
            name: 1,
            room_type: 1,
            description : 1,
            property_type: 1,
            bedrooms: 1,
            amenities: 1,
            beds: 1,
            bathrooms: 1,
            price: 1,
            guests_included : 1, 
            'host.host_id': 1,
            'host.host_name': 1,
            'host.host_location' : 1,
            'host.host_is_superhost' : 1,
            'images.picture_url' : 1,
            address : 1
        })
    }

    async getListingById (id : string) : Promise<ListingsAndReview[]>{
        return await this.listingModel.find({_id : id}, {
            name: 1,
            room_type: 1,
            property_type: 1,
            bedrooms: 1,
            amenities: 1,
            beds: 1,
            bathrooms: 1,
            price: 1,
            guests_included : 1, 
            'host.host_id': 1,
            'host.host_name': 1,
            'host.host_location' : 1,
            'host.host_is_superhost' : 1,
            address : 1,
            review_scores : 1
        })
    }

    async getListing(
        property: string,
        room: string,
        bedroom: number
    ) : Promise<ListingsAndReview[]>{
        
        return await this.listingModel.find(
            { property_type : property,
              room_type : room,
              bedrooms : bedroom},
            {
                name: 1,
                room_type: 1,
                property_type: 1,
                bedrooms: 1,
                amenities: 1,
                beds: 1,
                bathrooms: 1,
                price: 1,
                guests_included : 1,
                'host.host_id': 1,
                'host.host_name': 1,
                'host.host_location' : 1,
                'host.host_is_superhost' : 1
            })
    }

    async createListing (createListing : CreateListingDto) : Promise<ListingsAndReview>{
        return await this.listingModel.create(createListing)
    }

    async updateListing(id: string ,updateListing : CreateListingDto) : Promise<ListingsAndReview>{
        return await this.listingModel.findOneAndUpdate(
            {_id : id},
            {$set : updateListing},
            { new: true })
    }

    async deleteListing (id : string) : Promise<any>{
        return await this.listingModel.findOneAndDelete({_id : id})
    }
}
