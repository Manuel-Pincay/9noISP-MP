import { CreateClienteInput } from "./create-cliente.input";
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateClienteInput extends PartialType(CreateClienteInput) {
  @Field(() => ID, { nullable: true })
  id?: string;
}



