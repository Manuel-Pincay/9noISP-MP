import { UnidadesService } from './unidades.service';
import { CreateUnidadeInput } from './dto/create-unidade.dto';
import { UpdateUnidadeInput } from './dto/update-unidade.dto';
export declare class UnidadesController {
    private readonly unidadesService;
    constructor(unidadesService: UnidadesService);
    create(createUnidadeDto: CreateUnidadeInput): Promise<any>;
    findOne(id: number): Promise<import("./entities/unidade.entity").Unidade>;
    update(id: number, UpdateUnidadesInput: UpdateUnidadeInput): Promise<{
        message: string;
        unidades: import("./entities/unidade.entity").Unidade;
    }>;
}
