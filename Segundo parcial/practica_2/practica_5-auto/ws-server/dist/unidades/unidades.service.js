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
exports.UnidadesService = void 0;
const common_1 = require("@nestjs/common");
const unidade_entity_1 = require("./entities/unidade.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let UnidadesService = class UnidadesService {
    constructor(unidadeRepository) {
        this.unidadeRepository = unidadeRepository;
        this.logger = new common_1.Logger('UnidadesService');
    }
    async create(createUnidadeInput) {
        try {
            const unidade = this.unidadeRepository.create(createUnidadeInput);
            await this.unidadeRepository.save(unidade);
            return unidade;
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
    async findOne(id) {
        const unidade = await this.unidadeRepository.findOneBy({ id });
        if (!unidade)
            throw new common_1.NotFoundException(`Unidad #${id} no encontrado`);
        return unidade;
    }
    async update(id, updateUnidadeInput) {
        const unidade = await this.unidadeRepository.preload({
            id: id,
            ...updateUnidadeInput
        });
        if (!unidade)
            throw new common_1.NotFoundException(`Repostaje con ID ${id} no encontrado`);
        try {
            await this.unidadeRepository.save(unidade);
            return unidade;
        }
        catch (error) {
            console.log(error);
        }
    }
    async remove(id) {
        const unidade = await this.findOne(id);
        unidade.deletedAt = new Date();
        await this.unidadeRepository.save(unidade);
        return `Esta acción elimina suavemente la unidad #${id}`;
    }
};
exports.UnidadesService = UnidadesService;
exports.UnidadesService = UnidadesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(unidade_entity_1.Unidade)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UnidadesService);
//# sourceMappingURL=unidades.service.js.map