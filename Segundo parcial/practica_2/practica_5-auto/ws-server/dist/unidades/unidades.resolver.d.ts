import { UnidadesService } from './unidades.service';
import { CreateUnidadeInput } from './dto/create-unidade.dto';
import { UpdateUnidadeInput } from './dto/update-unidade.dto';
import { Unidade } from './entities/unidade.entity';
export declare class UnidadeResolver {
    private readonly unidadesService;
    constructor(unidadesService: UnidadesService);
    createUnidade(CreateUnidadeInput: CreateUnidadeInput): Promise<any>;
    unidade(): Promise<string>;
    unidades(id: number): Promise<Unidade>;
    updateUnidade(id: number, updateUnidadeInput: UpdateUnidadeInput): Promise<Unidade>;
    removeUnidade(id: number): Promise<boolean>;
}
