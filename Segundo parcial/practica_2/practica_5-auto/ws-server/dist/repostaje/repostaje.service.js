"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepostajeService = void 0;
const common_1 = require("@nestjs/common");
const repostaje_entity_1 = require("./entities/repostaje.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let RepostajeService = class RepostajeService {
    constructor(repostajeRepository) {
        this.repostajeRepository = repostajeRepository;
        this.logger = new common_1.Logger('RepostajeService');
    }
    async create(createRepostajeInput) {
        try {
            const repostaje = this.repostajeRepository.create(createRepostajeInput);
            await this.repostajeRepository.save(repostaje);
            return repostaje;
        }
        catch (error) {
            console.log(error);
            if (error.code === '23505')
                throw new common_1.BadRequestException(error.detail);
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('Error no esperado');
        }
    }
    findAll() {
        return `Busca algo mas especifico flaco`;
    }
    async findOne(REPOSTAJE_ID) {
        const repostaje = await this.repostajeRepository.findOneBy({ REPOSTAJE_ID });
        if (!repostaje)
            throw new common_1.NotFoundException(`Repostaje ${REPOSTAJE_ID} no encontrado`);
        return repostaje;
    }
    async update(REPOSTAJE_ID, updateRepostajeInput) {
        const repostaje = await this.repostajeRepository.preload({
            REPOSTAJE_ID: REPOSTAJE_ID,
            ...updateRepostajeInput
        });
        if (!repostaje)
            throw new common_1.NotFoundException(`Repostaje con ID ${REPOSTAJE_ID} no encontrado`);
        try {
            await this.repostajeRepository.save(repostaje);
            return repostaje;
        }
        catch (error) {
            console.log(error);
        }
    }
    async remove(REPOSTAJE_ID) {
        const repostaje = await this.findOne(REPOSTAJE_ID);
        await this.repostajeRepository.remove(repostaje);
        return `This action removes a #${REPOSTAJE_ID} repostaje`;
    }
};
exports.RepostajeService = RepostajeService;
exports.RepostajeService = RepostajeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(repostaje_entity_1.Repostaje)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], RepostajeService);
//# sourceMappingURL=repostaje.service.js.map