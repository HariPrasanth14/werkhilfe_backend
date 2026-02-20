import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProviderDocument = Provider & Document;

@Schema({ timestamps: true })
export class Provider {

  @Prop({ required: false, index: true })
  user_id: string;

  @Prop({ required: false })
  service_type: string;
  @Prop({ required: false })
  service_id: number;

  @Prop({ required: false, type: Number })
  experience_years: number;

  @Prop({ required: false, type: Number })
  price_per_hour: number;

  @Prop({ required: false, default: false })
  is_available: boolean;

  @Prop({ required: false })
  state: string;

  @Prop({ required: false })
  district: string;

  @Prop({ required: false })
  city: string;

  @Prop({ default: 0 })
  rating: number;

  @Prop({ default: 0 })
  total_jobs: number;
}

export const ProviderSchema = SchemaFactory.createForClass(Provider);
