// export const SubscriptionSchema=({
    // id: String,
    // email: String,
    // firstName: String,
    // gender: String,
    // consent: Boolean,
    // dateOfBirth: Date
// })

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

    
export type SubscriptionDocument = Subscription & Document;

@Schema()
export class Subscription{

    @Prop()
    id: string
    @Prop({required: true})
    email: string
    @Prop()
    firstName: string
    @Prop()
    gender: string
    @Prop({required: true})
    consent: boolean
    @Prop({required: true})
    dateOfBirth: Date
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);