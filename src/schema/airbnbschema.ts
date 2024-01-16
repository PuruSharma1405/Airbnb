import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';


type ImageUrls = {
    thumbnail_url: string;
    medium_url: string;
    picture_url: string;
    xl_picture_url: string;
  };
@Schema({
    collection: 'listingsAndReviews',
    timestamps: true
})
export class ListingsAndReview extends Document {
    @Prop()
    _id: string
    @Prop()
    listing_url: string;

    @Prop()
    name: string;

    @Prop()
    summary: string;

    @Prop()
    space: string;

    @Prop()
    description: string;

    @Prop()
    neighborhood_overview: string;

    @Prop()
    notes: string;

    @Prop()
    transit: string;

    @Prop()
    access: string;

    @Prop()
    interaction: string;

    @Prop()
    house_rules: string;

    @Prop()
    property_type: string;

    @Prop()
    room_type: string;

    @Prop()
    bed_type: string;

    @Prop()
    minimum_nights: string;

    @Prop()
    maximum_nights: string;

    @Prop()
    cancellation_policy: string;

    @Prop()
    last_scraped: Date;

    @Prop()
    calendar_last_scraped: Date;

    @Prop()
    accommodates: number;

    @Prop()
    bedrooms: number;

    @Prop()
    beds: number;

    @Prop()
    number_of_reviews: number;

    @Prop()
    bathrooms: number;

    @Prop([String])
    amenities: string[];

    @Prop()
    price: number;

    @Prop()
    weekly_price: number

    @Prop()
    monthly_price: number

    @Prop()
    security_deposit: number;

    @Prop()
    cleaning_fee: number;

    @Prop()
    extra_people: number;

    @Prop()
    guests_included: number;

    @Prop({
        type: {
            thumbnail_url: String,
            medium_url: String,
            picture_url: String,
            xl_picture_url: String
        }
    })
    images: {
        thumbnail_url: string;
        medium_url: string;
        picture_url: string;
        xl_picture_url: string;
    }

    @Prop({
        type: {
            host_id: String,
            host_url: String,
            host_name: String,
            host_location: String,
            host_about: String,
            host_response_time: String,
            host_thumbnail_url: String,
            host_picture_url: String,
            host_neighbourhood: String,
            host_response_rate: Number,
            host_is_superhost: Boolean,
            host_has_profile_pic: Boolean,
            host_identity_verified: Boolean,
            host_listings_count: Number,
            host_total_listings_count: Number,

        }
    })
    host: {
        host_id: string;
        host_url: string;
        host_name: string;
        host_location: string;
        host_about: string;
        host_response_time: string;
        host_thumbnail_url: string;
        host_picture_url: string;
        host_neighbourhood: string;
        host_response_rate: number;
        host_is_superhost: boolean;
        host_has_profile_pic: boolean;
        host_identity_verified: boolean;
        host_listings_count: number;
        host_total_listings_count: number;

    };

    @Prop({
        type: {
            street: String,
            suburb: String,
            government_area: String,
            market: String,
            country: String,
            country_code: String,
            // location:{
            //     type: String,
            //     coordinates: [Number],
            //     is_location_exact: Boolean,
            // }
        }
    })
    address: {
        street: string;
        suburb: string;
        government_area: string;
        market: string;
        country: string;
        country_code: string;
        // location: {
        //     type: string;
        //     coordinates: number[];
        //     is_location_exact: boolean;
        // };
    };

    @Prop({
        type: {
            availability_30: Number,
            availability_60: Number,
            availability_90: Number,
            availability_365: Number
        }
    })
    availability: {
        availability_30: number,
        availability_60: number,
        availability_90: number,
        availability_365: number
    }

    @Prop({
        type: {
            review_scores_accuracy: Number,
            review_scores_cleanliness: Number,
            review_scores_checkin: Number,
            review_scores_communication: Number,
            review_scores_location: Number,
            review_scores_value: Number,
            review_scores_rating: Number,
        },
    })
    review_scores: {
        review_scores_accuracy: number;
        review_scores_cleanliness: number;
        review_scores_checkin: number;
        review_scores_communication: number;
        review_scores_location: number;
        review_scores_value: number;
        review_scores_rating: number;
    };
}

export const ListingSchema = SchemaFactory.createForClass(ListingsAndReview);

export const LISTING_MODEL = ListingsAndReview.name