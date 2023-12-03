import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesResolver } from './clientes.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientSchema } from './entities/cliente.entity'
import { Transaccion, TransaccionSchema } from './entities/transaccion.entity';


@Module({
  providers: [ClientesService, ClientesResolver],
  imports: [
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }, { name: Transaccion.name, schema: TransaccionSchema },])
  ],
  exports: [ClientesService, MongooseModule],
})
export class ClientesModule { }
