import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type CancellationDocument = Cancellation & Document;

@Schema({ timestamps: true })
export class Cancellation {

  @Prop({ type: Types.ObjectId, ref: "Booking", required: true })
  booking_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "User", required: true })
  cancelled_by: Types.ObjectId;

  @Prop({ required: true })
  reason: string;
}

export const CancellationSchema =
  SchemaFactory.createForClass(Cancellation);
