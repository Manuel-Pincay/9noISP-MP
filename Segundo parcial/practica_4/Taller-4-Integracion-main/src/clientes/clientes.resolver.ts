import { Resolver, Query, Mutation, Args, ID, Int, ResolveProperty } from '@nestjs/graphql';
import { ClientesService } from './clientes.service';
import { Client } from './entities/cliente.entity';
import { UpdateClienteInput, CreateClienteInput } from './dto/inputs';
import { ParseUUIDPipe, NotFoundException } from '@nestjs/common';
import { Transaccion } from './entities/transaccion.entity';

@Resolver(() => Client)
export class ClientesResolver {
    constructor(private readonly clientesService: ClientesService) { }

    @Mutation(() => Client)
    async createCliente(@Args('createClienteInput') createClienteInput: CreateClienteInput): Promise<Client> {
        const createdCliente = await this.clientesService.create(createClienteInput);
        return createdCliente;
    }


    @ResolveProperty('createCliente', () => Client)
    async getCreateCliente(@Args('id', { type: () => ID }, ParseUUIDPipe) id: string): Promise<Client> {
        return this.clientesService.findOne(id);
    }

    // @Query(() => [Client], { name: 'clientes' })
    // async findAll(): Promise<Client[]> {
    //     return this.clientesService.findAll()
    // }

    @Query(() => [Client], { name: 'clientes' })
    async findAll(): Promise<Client[]> {
        //Clientes Activos
        return this.clientesService.findAllActive();
    }


    // @Query(() => Client, { name: 'cliente' })
    // async findOne(@Args('id', { type: () => ID }) id: string): Promise<Client> {
    //     const cliente = await this.clientesService.findOne(id);
    //     if (!cliente) {
    //         throw new NotFoundException(`Client with ID ${id} not found`);
    //     }
    //     return cliente;
    // }

    @Query(() => Client, { name: 'cliente' })
    async findOne(@Args('id', { type: () => ID }) id: string): Promise<Client> {
        const cliente = await this.clientesService.findOneIncludingInactive(id);
        if (!cliente) {
            throw new NotFoundException(`Client with ID ${id} not found`);
        }
        return cliente;
    }

    @Mutation(() => Client)
    async updateCliente(
        @Args('id', { type: () => ID }) id: string,
        @Args('updateClienteInput') updateClienteInput: UpdateClienteInput,
    ): Promise<Client> {
        const updatedCliente = await this.clientesService.update(id, updateClienteInput);
        if (!updatedCliente) {
            throw new NotFoundException(`Client with ID ${id} not found`);
        }
        return updatedCliente;
    }

    @Mutation(() => Client)
    async removeCliente(@Args('id', { type: () => ID }) id: string): Promise<Client> {
        const deletedCliente = await this.clientesService.remove(id)
        if (!deletedCliente) {
            throw new NotFoundException(`Client with ID ${id} not found`);
        }
        return deletedCliente
    }

    @Mutation(() => Transaccion)
    async createTransaccion(
        @Args('clienteId', { type: () => ID }) clienteId: string,
        @Args('monto', { type: () => Int }) monto: number,
    ): Promise<Transaccion> {
        return this.clientesService.createTransaccion(clienteId, monto);
    }
}
