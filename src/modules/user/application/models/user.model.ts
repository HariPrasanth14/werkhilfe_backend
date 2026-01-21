import { Column, Model, Table } from "sequelize-typescript";

@Table({ tableName: "users" })
export class user_model extends Model {
    @Column({ allowNull: false })
    name: string

    @Column({ allowNull: false, unique: true })
    email: string

    @Column({ allowNull: false })
    password: string

}