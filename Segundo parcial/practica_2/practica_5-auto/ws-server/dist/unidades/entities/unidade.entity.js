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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unidade = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
let Unidade = class Unidade {
};
exports.Unidade = Unidade;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], Unidade.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Unidade.prototype, "UNIDADES_PLACA", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, type: 'int' }),
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], Unidade.prototype, "NUMERO_UNIDAD", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, type: 'int' }),
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], Unidade.prototype, "ID_EMPRESA", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Unidade.prototype, "CORREO", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true, type: 'boolean' }),
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], Unidade.prototype, "ESTADO", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Unidade.prototype, "COLOR", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Unidade.prototype, "MATRICULA", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, type: 'int' }),
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], Unidade.prototype, "ANIO", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Unidade.prototype, "deletedAt", void 0);
exports.Unidade = Unidade = __decorate([
    (0, typeorm_1.Entity)('unidade'),
    (0, graphql_1.ObjectType)()
], Unidade);
function PrimaryColumn(target, propertyKey) {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=unidade.entity.js.map