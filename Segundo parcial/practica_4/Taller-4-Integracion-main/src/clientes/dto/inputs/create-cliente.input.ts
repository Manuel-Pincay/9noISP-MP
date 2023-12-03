import { InputType, Int, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, IsPositive } from "class-validator";

@InputType()
export class CreateClienteInput {

    @Field(() => String)
    @IsNotEmpty()
    name_client: string;

    @Field(() => String)
    @IsNotEmpty()
    direction: string;

    @Field(() => Int)
    @IsPositive()
    phone: number;

    @Field(() => String)
    @IsNotEmpty()
    id_city: string;

    @Field(() => String)
    @IsNotEmpty()
    id_client_type: string;

    @Field(() => String)
    @IsNotEmpty()
    ci_client: string;

    @Field(() => Boolean)
    @IsOptional()
    estado: boolean;
}
