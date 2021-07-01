import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Gender } from "../pet.enum";

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
    @Prop()
    owner: string;
}

export const PetSchema = SchemaFactory.createForClass(Pet);