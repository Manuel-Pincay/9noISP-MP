"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const repostaje_module_1 = require("./repostaje/repostaje.module");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const default_1 = require("@apollo/server/plugin/landingPage/default");
const unidades_module_1 = require("./unidades/unidades.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                playground: false,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                plugins: [
                    (0, default_1.ApolloServerPluginLandingPageLocalDefault)()
                ]
            }),
            repostaje_module_1.RepostajeModule,
            typeorm_1.TypeOrmModule.forRoot({
                "type": "mysql",
                "host": "localhost",
                "port": 3306,
                "username": "root",
                "password": "",
                "database": "city",
                "entities": [(0, path_1.join)(__dirname, '**', '*.entity.{ts,js}')],
                "synchronize": true
            }),
            unidades_module_1.UnidadesModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map