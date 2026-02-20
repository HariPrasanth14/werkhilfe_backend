import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type ProviderAvailabilityDocument =
  ProviderAvailability & Document;

@Schema({ timestamps: false })
export class ProviderAvailability {

  @Prop({ type: Types.ObjectId, ref: "ProviderProfile", required: true })
  provider_id: Types.ObjectId;

  @Prop({ required: true, enum: ["MON","TUE","WED","THU","FRI","SAT","SUN"] })
  day_of_week: string;

  @Prop({ required: true })
  start_time: string;

  @Prop({ required: true })
  end_time: string;
}

export const ProviderAvailabilitySchema =
  SchemaFactory.createForClass(ProviderAvailability);
