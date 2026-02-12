import { Table, Column, Model, DataType, AllowNull, Default } from "sequelize-typescript";

@Table({ tableName: "service_categories", timestamps: true })
export class ServiceCategoryModel extends Model {
  
  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  icon_url!: string;

  @AllowNull(false)
  @Column(DataType.BOOLEAN)
  is_active!: boolean;

  @Column(DataType.BOOLEAN)
  @Default(false)
  is_deleted!: boolean;
}
