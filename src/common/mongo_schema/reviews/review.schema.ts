import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type ReviewDocument = Review & Document;

@Schema({ timestamps: true })
export class Review {

  @Prop({ type: Types.ObjectId, ref: "Booking", required: true })
  booking_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "ProviderProfile", required: true })
  provider_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "User", required: true })
  seeker_id: Types.ObjectId;

  @Prop({ required: true, min: 1, max: 5 })
  rating: number;

  @Prop()
  comment: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
