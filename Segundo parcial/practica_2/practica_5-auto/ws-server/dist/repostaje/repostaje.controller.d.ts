import { RepostajeService } from './repostaje.service';
import { CreateRepostajeInput } from './dto/create-repostaje.dto';
import { UpdateRepostajeInput } from './dto/update-repostaje.dto';
export declare class RepostajeController {
    private readonly repostajeService;
    constructor(repostajeService: RepostajeService);
    create(createRepostajeDto: CreateRepostajeInput): Promise<any>;
    findAll(): string;
    findOne(REPOSTAJE_ID: number): Promise<import("./entities/repostaje.entity").Repostaje>;
    update(REPOSTAJE_ID: number, UpdateRepostajeInput: UpdateRepostajeInput): Promise<{
        message: string;
        repostaje: import("./entities/repostaje.entity").Repostaje;
    }>;
    remove(REPOSTAJE_ID: number): Promise<{
        message: string;
    }>;
}
