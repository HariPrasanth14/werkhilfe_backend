import { Column, Model, Table } from "sequelize-typescript";
import { Col } from "sequelize/lib/utils";

@Table({ tableName: "Seeker" })
export class seekerModel extends Model{
    @Column({ allowNull: false })
    name: string

    @Column({ allowNull: false, unique: true })
    email: string

    @Column({ allowNull: false })
    password: string    

    @Column({ allowNull: false })
    phone: string

    @Column({ allowNull: false })
    user_type: string
}