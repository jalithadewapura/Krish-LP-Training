import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Gender } from "./entities/pet.entity";

export type PetDocument = Pet & Document;

@Schema()
export class Pet {
    @Prop({required: true})
    name: string;
    @Prop()
    age: number;
    @Prop()
    type: string;
    @Prop()
    gender: Gender;
    @Prop()
    ownerId: string;
}

export const PetSchema = SchemaFactory.createForClass(Pet);