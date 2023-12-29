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
exports.UnidadeResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const unidades_service_1 = require("./unidades.service");
const create_unidade_dto_1 = require("./dto/create-unidade.dto");
const update_unidade_dto_1 = require("./dto/update-unidade.dto");
const common_1 = require("@nestjs/common");
const unidade_entity_1 = require("./entities/unidade.entity");
let UnidadeResolver = class UnidadeResolver {
    constructor(unidadesService) {
        this.unidadesService = unidadesService;
    }
    async createUnidade(CreateUnidadeInput) {
        return this.unidadesService.create(CreateUnidadeInput);
    }
    async unidade() {
        return this.unidadesService.findAll();
    }
    async unidades(id) {
        try {
            const unidade = await this.unidadesService.findOne(id);
            if (!unidade) {
                throw new common_1.NotFoundException('Unidade no encontrado');
            }
            return unidade;
        }
        catch (error) {
            throw new common_1.NotFoundException('Unidade no encontrado');
        }
    }
    async updateUnidade(id, updateUnidadeInput) {
        try {
            const unidade = await this.unidadesService.update(id, updateUnidadeInput);
            return unidade;
        }
        catch (error) {
            throw new common_1.NotFoundException('No se pudo actualizar la unidad');
        }
    }
    async removeUnidade(id) {
        try {
            await this.unidadesService.remove(id);
            return true;
        }
        catch (error) {
            throw new common_1.NotFoundException('No se pudo eliminar la unidad');
        }
    }
};
exports.UnidadeResolver = UnidadeResolver;
__decorate([
    (0, graphql_1.Mutation)(() => unidade_entity_1.Unidade),
    __param(0, (0, graphql_1.Args)('createUnidadeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_unidade_dto_1.CreateUnidadeInput]),
    __metadata("design:returntype", Promise)
], UnidadeResolver.prototype, "createUnidade", null);
__decorate([
    (0, graphql_1.Query)(() => [unidade_entity_1.Unidade]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UnidadeResolver.prototype, "unidade", null);
__decorate([
    (0, graphql_1.Query)(() => unidade_entity_1.Unidade),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UnidadeResolver.prototype, "unidades", null);
__decorate([
    (0, graphql_1.Mutation)(() => unidade_entity_1.Unidade),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('updateUnidadeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_unidade_dto_1.UpdateUnidadeInput]),
    __metadata("design:returntype", Promise)
], UnidadeResolver.prototype, "updateUnidade", null);
__decorate([
    (0, graphql_1.Mutation)(() => unidade_entity_1.Unidade),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UnidadeResolver.prototype, "removeUnidade", null);
exports.UnidadeResolver = UnidadeResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [unidades_service_1.UnidadesService])
], UnidadeResolver);
//# sourceMappingURL=unidades.resolver.js.map