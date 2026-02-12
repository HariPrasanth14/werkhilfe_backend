import { Table, Column, Model, DataType, AllowNull, ForeignKey } from "sequelize-typescript";
import { Booking } from "../booking/booking.model";
import { User } from "src/common/mongo_schema/user_schema/user.scheme";
import { user_model } from "../user_model/user.model";
import { Provider_model } from "../user_model/provider.model";
 

@Table({ tableName: "reviews", timestamps: true })
export class Review extends Model {

  @ForeignKey(() => Booking)
  @AllowNull(false)
  @Column(DataType.BIGINT)
  booking_id!: number;

  @ForeignKey(() => Provider_model)
  @AllowNull(false)
  @Column(DataType.BIGINT)
  provider_id!: number;

  @ForeignKey(() => user_model)
  @AllowNull(false)
  @Column(DataType.BIGINT)
  seeker_id!: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  rating!: number;

  @AllowNull(true)
  @Column(DataType.TEXT)
  comment!: string;
}
