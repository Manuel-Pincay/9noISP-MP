"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepostajeModule = void 0;
const common_1 = require("@nestjs/common");
const repostaje_service_1 = require("./repostaje.service");
const repostaje_controller_1 = require("./repostaje.controller");
const dist_1 = require("@nestjs/typeorm/dist");
const repostaje_entity_1 = require("./entities/repostaje.entity");
const repostaje_resolver_1 = require("./repostaje.resolver");
let RepostajeModule = class RepostajeModule {
};
exports.RepostajeModule = RepostajeModule;
exports.RepostajeModule = RepostajeModule = __decorate([
    (0, common_1.Module)({
        providers: [repostaje_resolver_1.RepostajeResolver, repostaje_service_1.RepostajeService],
        controllers: [repostaje_controller_1.RepostajeController],
        imports: [dist_1.TypeOrmModule.forFeature([repostaje_entity_1.Repostaje])],
        exports: [repostaje_service_1.RepostajeService, dist_1.TypeOrmModule]
    })
], RepostajeModule);
//# sourceMappingURL=repostaje.module.js.map