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
exports.SuperheroesController = void 0;
const common_1 = require("@nestjs/common");
const superheroes_service_1 = require("./superheroes.service");
let SuperheroesController = class SuperheroesController {
    constructor(superheroesService) {
        this.superheroesService = superheroesService;
    }
    addSuperhero(name, superpower, humilityScore) {
        if (!name || !superpower || humilityScore == null) {
            throw new common_1.BadRequestException('All fields are required.');
        }
        if (typeof humilityScore !== 'number' || humilityScore < 1 || humilityScore > 10) {
            throw new common_1.BadRequestException('Humility score must be a number between 1 and 10.');
        }
        return this.superheroesService.addSuperhero(name, superpower, humilityScore);
    }
    getSuperheroes() {
        return this.superheroesService.getSuperheroes();
    }
};
exports.SuperheroesController = SuperheroesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('superpower')),
    __param(2, (0, common_1.Body)('humilityScore')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", void 0)
], SuperheroesController.prototype, "addSuperhero", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SuperheroesController.prototype, "getSuperheroes", null);
exports.SuperheroesController = SuperheroesController = __decorate([
    (0, common_1.Controller)('superheroes'),
    __metadata("design:paramtypes", [superheroes_service_1.SuperheroesService])
], SuperheroesController);
//# sourceMappingURL=superheroes.controller.js.map