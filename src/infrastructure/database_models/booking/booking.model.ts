import { Table, Column, Model, DataType, AllowNull, ForeignKey } from "sequelize-typescript";
import { User } from "src/common/mongo_schema/user_schema/user.scheme";
import { Provider_model } from "../user_model/provider.model";
import { ServiceCategoryModel } from "../service_model/service_categories.model";
import { user_model } from "../user_model/user.model";
@Table({ tableName: "bookings", timestamps: true })
export class Booking extends Model {

  @ForeignKey(() => user_model)
  @AllowNull(false)
  @Column(DataType.BIGINT)
  seeker_id!: number;

  @ForeignKey(() => Provider_model)
  @AllowNull(false)
  @Column(DataType.BIGINT)
  provider_id!: number;

  @ForeignKey(() => ServiceCategoryModel)
  @AllowNull(false)
  @Column(DataType.BIGINT)
  service_category_id!: number;

  @AllowNull(false)
  @Column(DataType.DATE)
  booking_date!: string;

  @AllowNull(false)
  @Column(DataType.TIME)
  start_time!: string;

  @AllowNull(false)
  @Column(DataType.TIME)
  end_time!: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  location!: string;

  @AllowNull(false)
  @Column(DataType.ENUM(
    "REQUESTED",
    "ACCEPTED",
    "REJECTED",
    "COMPLETED",
    "CANCELLED"
  ))
  status!: string;
}
