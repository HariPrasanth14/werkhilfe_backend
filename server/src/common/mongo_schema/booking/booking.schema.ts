import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type BookingDocument = Booking & Document;

@Schema({ timestamps: true })
export class Booking {

  @Prop({ type: Types.ObjectId, ref: "User", required: true })
  seeker_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "ProviderProfile", required: true })
  provider_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "ServiceCategory", required: true })
  service_category_id: Types.ObjectId;

  @Prop({ required: true })
  booking_date: Date;

  @Prop({ required: true })
  start_time: string;

  @Prop({ required: true })
  end_time: string;

  @Prop({ required: true })
  location: string;

  @Prop({
    required: true,
    enum: ["REQUESTED", "ACCEPTED", "REJECTED", "COMPLETED", "CANCELLED"],
    default: "REQUESTED"
  })
  status: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
