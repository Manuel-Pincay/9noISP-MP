import { RepostajeService } from './repostaje.service';
import { CreateRepostajeInput } from './dto/create-repostaje.dto';
import { UpdateRepostajeInput } from './dto/update-repostaje.dto';
import { Repostaje } from './entities/repostaje.entity';
export declare class RepostajeResolver {
    private readonly repostajeService;
    constructor(repostajeService: RepostajeService);
    createRepostaje(CreateRepostajeInput: CreateRepostajeInput): Promise<any>;
    repostajes(): Promise<string>;
    repostaje(REPOSTAJE_ID: number): Promise<Repostaje>;
    updateRepostaje(REPOSTAJE_ID: number, updateRepostajeInput: UpdateRepostajeInput): Promise<Repostaje>;
    removeRepostaje(REPOSTAJE_ID: number): Promise<boolean>;
}
