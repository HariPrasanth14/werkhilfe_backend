import { Table, Column, Model, DataType, AllowNull, ForeignKey } from "sequelize-typescript";
import { Provider_model } from "../user_model/provider.model";
import { ServiceCategoryModel } from "../service_model/service_categories.model";

@Table({ tableName: "provider_services", timestamps: true })
export class ProviderService extends Model {

  @ForeignKey(() => Provider_model)
  @AllowNull(false)
  @Column(DataType.BIGINT)
  provider_id!: number;

  @ForeignKey(() => ServiceCategoryModel)
  @AllowNull(false)
  @Column(DataType.BIGINT)
  service_category_id!: number;

  @AllowNull(false)
  @Column(DataType.ENUM("HOURLY", "FIXED"))
  price_type!: string;

  @AllowNull(false)
  @Column(DataType.DECIMAL(10, 2))
  price!: number;
}
