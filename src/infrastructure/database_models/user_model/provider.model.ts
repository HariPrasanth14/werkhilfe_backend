import {
    Table,
    Column,
    Model,
    DataType
  } from "sequelize-typescript";
  
  @Table({
    tableName: "providers",
    timestamps: true
  })
  export class Provider_model extends Model {
  
    @Column({
      allowNull: false
    })
    user_id: string;
  
    @Column({
      allowNull: false
    })
    service_type: string;
    @Column({
      allowNull: false
    })
    service_id: number;
  
    @Column({
      allowNull: false,
      type: DataType.INTEGER
    })
    experience_years: number;
  
    @Column({
      allowNull: false,
      type: DataType.INTEGER
    })
    price_per_hour: number;
  
    @Column({
      allowNull: false,
      defaultValue: true
    })
    is_available: boolean;
  
    // 📍 Location (FINAL)
    @Column({
      allowNull: false
    })
    state: string;
  
    @Column({
      allowNull: false
    })
    district: string;
  
    @Column({
      allowNull: false
    })
    city: string;
  
    @Column({
      defaultValue: 0,
      type: DataType.FLOAT
    })
    rating: number;
  
    @Column({
      defaultValue: 0,
      type: DataType.INTEGER
    })
    total_jobs: number;
  }
  