import {
    Table,
    Column,
    Model,
    DataType,
    AllowNull,
    ForeignKey
  } from "sequelize-typescript";
import { Booking } from "./booking.model";
import { User } from "src/common/mongo_schema/user_schema/user.scheme";
import { user_model } from "../user_model/user.model";
  
  
  @Table({ tableName: "payments", timestamps: true })
  export class Payment extends Model {
  
    @ForeignKey(() => Booking)
    @AllowNull(false)
    @Column(DataType.BIGINT)
    booking_id!: number;
  
    @ForeignKey(() => user_model)
    @AllowNull(false)
    @Column(DataType.BIGINT)
    paid_by!: number; // seeker user_id
  
    @AllowNull(false)
    @Column(DataType.DECIMAL(10, 2))
    amount!: number;
  
    @AllowNull(false)
    @Column(DataType.ENUM(
      "ONLINE",
      "CASH"
    ))
    payment_method!: string;
  
    @AllowNull(false)
    @Column(DataType.ENUM(
      "PENDING",
      "SUCCESS",
      "FAILED",
      "REFUNDED"
    ))
    payment_status!: string;
  
    @AllowNull(true)
    @Column(DataType.STRING)
    transaction_ref!: string; // Razorpay / Stripe ID
  }
  