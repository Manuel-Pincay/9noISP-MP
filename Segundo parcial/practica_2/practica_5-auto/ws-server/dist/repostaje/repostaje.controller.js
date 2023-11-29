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
exports.RepostajeController = void 0;
const common_1 = require("@nestjs/common");
const repostaje_service_1 = require("./repostaje.service");
const create_repostaje_dto_1 = require("./dto/create-repostaje.dto");
const update_repostaje_dto_1 = require("./dto/update-repostaje.dto");
let RepostajeController = class RepostajeController {
    constructor(repostajeService) {
        this.repostajeService = repostajeService;
    }
    create(createRepostajeDto) {
        return this.repostajeService.create(createRepostajeDto);
    }
    findAll() {
        return this.repostajeService.findAll();
    }
    async findOne(REPOSTAJE_ID) {
        try {
            const repostaje = await this.repostajeService.findOne(REPOSTAJE_ID);
            return repostaje;
        }
        catch (error) {
            throw new common_1.NotFoundException('Repostaje no encontrado');
        }
    }
    async update(REPOSTAJE_ID, UpdateRepostajeInput) {
        try {
            const repostaje = await this.repostajeService.update(REPOSTAJE_ID, UpdateRepostajeInput);
            return { message: 'Repostaje actualizado con éxito', repostaje };
        }
        catch (error) {
            throw new common_1.NotFoundException('No se pudo actualizar el repostaje');
        }
    }
    async remove(REPOSTAJE_ID) {
        try {
            await this.repostajeService.remove(REPOSTAJE_ID);
            return { message: 'Repostaje eliminado con éxito' };
        }
        catch (error) {
            throw new common_1.NotFoundException('No se pudo eliminar el producto');
        }
    }
};
exports.RepostajeController = RepostajeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_repostaje_dto_1.CreateRepostajeInput]),
    __metadata("design:returntype", void 0)
], RepostajeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RepostajeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':REPOSTAJE_ID'),
    __param(0, (0, common_1.Param)('REPOSTAJE_ID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RepostajeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':REPOSTAJE_ID'),
    __param(0, (0, common_1.Param)('REPOSTAJE_ID')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_repostaje_dto_1.UpdateRepostajeInput]),
    __metadata("design:returntype", Promise)
], RepostajeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':REPOSTAJE_ID'),
    __param(0, (0, common_1.Param)('REPOSTAJE_ID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RepostajeController.prototype, "remove", null);
exports.RepostajeController = RepostajeController = __decorate([
    (0, common_1.Controller)('repostaje'),
    __metadata("design:paramtypes", [repostaje_service_1.RepostajeService])
], RepostajeController);
//# sourceMappingURL=repostaje.controller.js.map