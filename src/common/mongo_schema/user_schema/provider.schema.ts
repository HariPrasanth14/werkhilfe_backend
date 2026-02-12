import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProviderDocument = Provider & Document;

@Schema({ timestamps: true })
export class Provider {

  @Prop({ required: true, index: true })
  user_id: string;

  @Prop({ required: true })
  service_type: string;
  @Prop({ required: true })
  service_id: number;

  @Prop({ required: true, type: Number })
  experience_years: number;

  @Prop({ required: true, type: Number })
  price_per_hour: number;

  @Prop({ required: true, default: true })
  is_available: boolean;

  @Prop({ required: true })
  state: string;

  @Prop({ required: true })
  district: string;

  @Prop({ required: true })
  city: string;

  @Prop({ default: 0 })
  rating: number;

  @Prop({ default: 0 })
  total_jobs: number;
}

export const ProviderSchema = SchemaFactory.createForClass(Provider);
