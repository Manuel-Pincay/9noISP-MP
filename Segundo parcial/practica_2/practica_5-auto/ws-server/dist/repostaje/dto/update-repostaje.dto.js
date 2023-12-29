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
exports.UpdateRepostajeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const create_repostaje_dto_1 = require("./create-repostaje.dto");
const class_validator_1 = require("class-validator");
let UpdateRepostajeInput = class UpdateRepostajeInput extends (0, graphql_1.PartialType)(create_repostaje_dto_1.CreateRepostajeInput) {
};
exports.UpdateRepostajeInput = UpdateRepostajeInput;
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateRepostajeInput.prototype, "ESTADO", void 0);
exports.UpdateRepostajeInput = UpdateRepostajeInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateRepostajeInput);
//# sourceMappingURL=update-repostaje.dto.js.map