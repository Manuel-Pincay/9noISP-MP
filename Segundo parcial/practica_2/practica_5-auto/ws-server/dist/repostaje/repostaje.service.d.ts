import { CreateRepostajeInput } from './dto/create-repostaje.dto';
import { UpdateRepostajeInput } from './dto/update-repostaje.dto';
import { Repostaje } from './entities/repostaje.entity';
import { Repository } from 'typeorm';
export declare class RepostajeService {
    private readonly repostajeRepository;
    private readonly logger;
    constructor(repostajeRepository: Repository<Repostaje>);
    create(createRepostajeInput: CreateRepostajeInput): Promise<any>;
    findAll(): string;
    findOne(REPOSTAJE_ID: number): Promise<Repostaje>;
    update(REPOSTAJE_ID: number, updateRepostajeInput: UpdateRepostajeInput): Promise<Repostaje>;
    remove(REPOSTAJE_ID: number): Promise<string>;
}
