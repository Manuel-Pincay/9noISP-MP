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
exports.UnidadesController = void 0;
const common_1 = require("@nestjs/common");
const unidades_service_1 = require("./unidades.service");
const create_unidade_dto_1 = require("./dto/create-unidade.dto");
const update_unidade_dto_1 = require("./dto/update-unidade.dto");
let UnidadesController = class UnidadesController {
    constructor(unidadesService) {
        this.unidadesService = unidadesService;
    }
    create(createUnidadeDto) {
        return this.unidadesService.create(createUnidadeDto);
    }
    async findOne(id) {
        try {
            const unidades = await this.unidadesService.findOne(id);
            return unidades;
        }
        catch (error) {
            throw new common_1.NotFoundException('Unidad no encontrada');
        }
    }
    async update(id, UpdateUnidadesInput) {
        try {
            const unidades = await this.unidadesService.update(id, UpdateUnidadesInput);
            return { message: 'Unidad actualizada con éxito', unidades };
        }
        catch (error) {
            throw new common_1.NotFoundException('No se pudo actualizar la unidad');
        }
    }
};
exports.UnidadesController = UnidadesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_unidade_dto_1.CreateUnidadeInput]),
    __metadata("design:returntype", void 0)
], UnidadesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_unidade_dto_1.UpdateUnidadeInput]),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "update", null);
exports.UnidadesController = UnidadesController = __decorate([
    (0, common_1.Controller)('unidades'),
    __metadata("design:paramtypes", [unidades_service_1.UnidadesService])
], UnidadesController);
//# sourceMappingURL=unidades.controller.js.map