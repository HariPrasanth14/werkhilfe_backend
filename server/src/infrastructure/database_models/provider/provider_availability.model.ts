import { Table, Column, Model, DataType, AllowNull, ForeignKey } from "sequelize-typescript";
import { Provider_model } from "../user_model/provider.model";
 
@Table({ tableName: "provider_availability", timestamps: false })
export class ProviderAvailability extends Model {

  @ForeignKey(() => Provider_model)
  @AllowNull(false)
  @Column(DataType.BIGINT)
  provider_id!: number;

  @AllowNull(false)
  @Column(DataType.ENUM("MON","TUE","WED","THU","FRI","SAT","SUN"))
  day_of_week!: string;

  @AllowNull(false)
  @Column(DataType.TIME)
  start_time!: string;

  @AllowNull(false)
  @Column(DataType.TIME)
  end_time!: string;
}
