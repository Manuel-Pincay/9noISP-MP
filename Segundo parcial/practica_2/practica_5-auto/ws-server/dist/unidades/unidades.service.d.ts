import { CreateUnidadeInput } from './dto/create-unidade.dto';
import { UpdateUnidadeInput } from './dto/update-unidade.dto';
import { Unidade } from './entities/unidade.entity';
import { Repository } from 'typeorm';
export declare class UnidadesService {
    private readonly unidadeRepository;
    private readonly logger;
    constructor(unidadeRepository: Repository<Unidade>);
    create(createUnidadeInput: CreateUnidadeInput): Promise<any>;
    findAll(): string;
    findOne(id: number): Promise<Unidade>;
    update(id: number, updateUnidadeInput: UpdateUnidadeInput): Promise<Unidade>;
    remove(id: number): Promise<string>;
}
