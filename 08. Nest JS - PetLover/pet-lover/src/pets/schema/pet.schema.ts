import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Owner } from "src/owners/schema/owners.schema";
import { Gender } from "../pet.enum";
import * as mongoose from 'mongoose';

export type PetDocument = Pet & Document;

@Schema()
export class Pet {
    @Prop()
    id: string;
    @Prop({required: true})
    name: string;
    @Prop()
    age: number;
    @Prop()
    type: string;
    @Prop()
    gender: Gender;
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Owner'})
    owner: Owner;
}

export const PetSchema = SchemaFactory.createForClass(Pet);