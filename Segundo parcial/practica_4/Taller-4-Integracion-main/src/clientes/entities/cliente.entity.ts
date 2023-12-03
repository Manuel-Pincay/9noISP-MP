import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { Transaccion } from './transaccion.entity';

@ObjectType()
@Schema()
export class Client extends Document {
    @Field()
    @Prop()
    name_client: string;

    @Field()
    @Prop()
    direction: string;

    @Field(() => Int)
    @Prop()
    phone: number;

    @Field()
    @Prop()
    id_city: string;

    @Field()
    @Prop()
    id_client_type: string;

    @Field()
    @Prop()
    ci_client: string;

    @Field(() => Boolean)
    @Prop({ default: true })
    estado: boolean;

    @Field(() => [Transaccion], { nullable: true })
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaccion' }] })
    transacciones?: Types.Array<Transaccion>;


}

export const ClientSchema = SchemaFactory.createForClass(Client);
