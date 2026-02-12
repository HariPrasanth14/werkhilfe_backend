import { Table, Column, Model, DataType, AllowNull, ForeignKey } from "sequelize-typescript";
import { Booking } from "./booking.model";
import { User } from "src/common/mongo_schema/user_schema/user.scheme";
import { user_model } from "../user_model/user.model";

@Table({ tableName: "cancellations", timestamps: true })
export class Cancellation extends Model {

  @ForeignKey(() => Booking)
  @AllowNull(false)
  @Column(DataType.BIGINT)
  booking_id!: number;

  @ForeignKey(() => user_model)
  @AllowNull(false)
  @Column(DataType.BIGINT)
  cancelled_by!: number; // seeker or provider

  @AllowNull(false)
  @Column(DataType.TEXT)
  reason!: string;
}
