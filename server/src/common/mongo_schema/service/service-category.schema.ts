import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ServiceCategoryDocument = ServiceCategory & Document;

@Schema({ timestamps: true })
export class ServiceCategory {

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  icon_url: string;

  @Prop({ default: true })
  is_active: boolean;

  @Prop({default:false})
  is_deleted:boolean
}

export const ServiceCategorySchema =
  SchemaFactory.createForClass(ServiceCategory);
