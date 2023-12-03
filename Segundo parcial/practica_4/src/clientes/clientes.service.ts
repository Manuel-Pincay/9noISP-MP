import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteInput, UpdateClienteInput } from './dto/inputs';
import { Client } from './entities/cliente.entity';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Transaccion } from './entities/transaccion.entity';

@Injectable()
export class ClientesService {

    constructor(
        @InjectModel(Client.name)
        private readonly clientesModel: Model<Client>,
        @InjectModel(Transaccion.name)
        private readonly transaccionModel: Model<Transaccion>
    ) { }

    async create(createClienteInput: CreateClienteInput): Promise<Client> {
        const newCliente = new this.clientesModel(createClienteInput)
        return await newCliente.save();
    }

    async findAll(): Promise<Client[]> {
        return this.clientesModel.find().exec()
    }

    async findAllActive(): Promise<Client[]> {
        return this.clientesModel.find({ estado: true }).exec();
    }


    async findOne(id: string): Promise<Client> {
        const cliente = await this.clientesModel.findById(id).populate('transacciones').exec();

        if (!cliente) throw new NotFoundException(`Not found`);
        return cliente;
    }

    async findOneIncludingInactive(id: string): Promise<Client> {
        return this.clientesModel.findById(id).populate('transacciones').exec();
    }

    async update(id: string, updateClienteInput: UpdateClienteInput): Promise<Client> {
        const { id: _, ...updateFields } = updateClienteInput;

        const cliente = await this.clientesModel.findByIdAndUpdate(id, updateFields, { new: true }).exec();

        if (!cliente) {
            throw new NotFoundException(`Client with ID ${id} not found`);
        }

        return cliente;
    }

    // async remove(id: string): Promise<Client> {
    //     const cliente = await this.clientesModel.findByIdAndDelete(id).exec();
    //     if (!cliente) {
    //         throw new NotFoundException(`Client with ID ${id} not found`);
    //     }
    //     return cliente.toObject();
    // }

    // marcar un registro como "eliminado" en lugar de eliminarlo físicamente de la base de datos.
    async remove(id: string): Promise<Client> {
        const cliente = await this.clientesModel.findByIdAndUpdate(
            id,
            { estado: false },
            { new: true }
        ).exec();

        if (!cliente) {
            throw new NotFoundException(`Client with ID ${id} not found`);
        }

        return cliente.toObject();
    }

    async createTransaccion(clienteId: string, monto: number): Promise<Transaccion> {
        const cliente = await this.clientesModel.findById(clienteId).exec();

        if (!cliente) {
            throw new NotFoundException(`Client with ID ${clienteId} not found`);
        }

        const nuevaTransaccion = new this.transaccionModel({ monto, cliente: clienteId });
        const transaccionCreada = await nuevaTransaccion.save();

        cliente.transacciones.push(transaccionCreada._id);
        await cliente.save();

        return transaccionCreada;
    }
}
