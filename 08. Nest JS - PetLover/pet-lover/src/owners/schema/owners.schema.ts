import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type OwnerDocument = Owner & Document;

@Schema()
export class Owner {
    @Prop()
    id: string;
    @Prop({required: true})
    first_name: string; 
    @Prop({required: true})
    last_name: string;
    @Prop()
    email: string;
    @Prop()
    phone: number;
}

export const ownerSchema = SchemaFactory.createForClass(Owner);