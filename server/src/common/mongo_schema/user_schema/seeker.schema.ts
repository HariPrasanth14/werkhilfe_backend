import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type seekerDocument = Seeker & Document

@Schema({ timestamps: true })
export class Seeker {
    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    email: string

    @Prop({ required: true })
    password: string

    @Prop({ required: true })
    phone: string

    @Prop({ required: true })
    user_type: string
}

export const SeekerSchema = SchemaFactory.createForClass(Seeker)
