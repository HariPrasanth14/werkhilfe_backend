import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type ProviderServiceDocument = ProviderService & Document;

@Schema({ timestamps: true })
export class ProviderService {

  @Prop({ type: Types.ObjectId, ref: "ProviderProfile", required: true })
  provider_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "ServiceCategory", required: true })
  service_category_id: Types.ObjectId;

  @Prop({ required: true, enum: ["HOURLY", "FIXED"] })
  price_type: string;

  @Prop({ required: true })
  price: number;
}

export const ProviderServiceSchema =
  SchemaFactory.createForClass(ProviderService);
