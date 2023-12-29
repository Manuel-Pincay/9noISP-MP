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
exports.RepostajeResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const repostaje_service_1 = require("./repostaje.service");
const create_repostaje_dto_1 = require("./dto/create-repostaje.dto");
const update_repostaje_dto_1 = require("./dto/update-repostaje.dto");
const common_1 = require("@nestjs/common");
const repostaje_entity_1 = require("./entities/repostaje.entity");
let RepostajeResolver = class RepostajeResolver {
    constructor(repostajeService) {
        this.repostajeService = repostajeService;
    }
    async createRepostaje(CreateRepostajeInput) {
        return this.repostajeService.create(CreateRepostajeInput);
    }
    async repostajes() {
        return this.repostajeService.findAll();
    }
    async repostaje(REPOSTAJE_ID) {
        try {
            const repostaje = await this.repostajeService.findOne(REPOSTAJE_ID);
            if (!repostaje) {
                throw new common_1.NotFoundException('Repostaje no encontrado');
            }
            return repostaje;
        }
        catch (error) {
            throw new common_1.NotFoundException('Repostaje no encontrado');
        }
    }
    async updateRepostaje(REPOSTAJE_ID, updateRepostajeInput) {
        try {
            const repostaje = await this.repostajeService.update(REPOSTAJE_ID, updateRepostajeInput);
            return repostaje;
        }
        catch (error) {
            throw new common_1.NotFoundException('No se pudo actualizar el repostaje');
        }
    }
    async removeRepostaje(REPOSTAJE_ID) {
        try {
            await this.repostajeService.remove(REPOSTAJE_ID);
            return true;
        }
        catch (error) {
            throw new common_1.NotFoundException('No se pudo eliminar el repostaje');
        }
    }
};
exports.RepostajeResolver = RepostajeResolver;
__decorate([
    (0, graphql_1.Mutation)(() => repostaje_entity_1.Repostaje),
    __param(0, (0, graphql_1.Args)('createRepostajeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_repostaje_dto_1.CreateRepostajeInput]),
    __metadata("design:returntype", Promise)
], RepostajeResolver.prototype, "createRepostaje", null);
__decorate([
    (0, graphql_1.Query)(() => [repostaje_entity_1.Repostaje]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RepostajeResolver.prototype, "repostajes", null);
__decorate([
    (0, graphql_1.Query)(() => repostaje_entity_1.Repostaje),
    __param(0, (0, graphql_1.Args)('REPOSTAJE_ID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RepostajeResolver.prototype, "repostaje", null);
__decorate([
    (0, graphql_1.Mutation)(() => repostaje_entity_1.Repostaje),
    __param(0, (0, graphql_1.Args)('REPOSTAJE_ID')),
    __param(1, (0, graphql_1.Args)('updateRepostajeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_repostaje_dto_1.UpdateRepostajeInput]),
    __metadata("design:returntype", Promise)
], RepostajeResolver.prototype, "updateRepostaje", null);
__decorate([
    (0, graphql_1.Mutation)(() => repostaje_entity_1.Repostaje),
    __param(0, (0, graphql_1.Args)('REPOSTAJE_ID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RepostajeResolver.prototype, "removeRepostaje", null);
exports.RepostajeResolver = RepostajeResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [repostaje_service_1.RepostajeService])
], RepostajeResolver);
//# sourceMappingURL=repostaje.resolver.js.map