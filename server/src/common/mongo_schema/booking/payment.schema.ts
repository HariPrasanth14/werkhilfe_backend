import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type PaymentDocument = Payment & Document;

@Schema({ timestamps: true })
export class Payment {

  @Prop({ type: Types.ObjectId, ref: "Booking", required: true })
  booking_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "User", required: true })
  paid_by: Types.ObjectId;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true, enum: ["ONLINE", "CASH"] })
  payment_method: string;

  @Prop({
    required: true,
    enum: ["PENDING", "SUCCESS", "FAILED", "REFUNDED"],
    default: "PENDING"
  })
  payment_status: string;

  @Prop()
  transaction_ref: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
