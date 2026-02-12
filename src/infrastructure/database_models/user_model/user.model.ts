import { AllowNull, Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: "users" })
export class user_model extends Model {
    @Column({ allowNull: false })
    name: string

    @Column({ allowNull: false, type: DataType.ENUM("seeker", "provider") })
    user_type: string

    @Column({ allowNull: false, unique: true })
    email: string

    @Column({ allowNull: false })
    password: string

}