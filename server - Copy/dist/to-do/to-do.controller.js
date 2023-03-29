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
exports.ToDoController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const to_do_service_1 = require("./to-do.service");
const to_doItem_1 = require("./to-doItem");
let ToDoController = class ToDoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    createToDo(task) {
        return (this.todoService.createToDo(1, 'Buy Groceries'),
            this.todoService.createToDo(2, 'Wash the Dishes'),
            this.todoService.createToDo(3, 'Pick up the Kids'));
    }
    getTodo() {
        return this.todoService.getToDo(1);
    }
    getAllTodos(res) {
        const todos = this.todoService.getAllToDos();
        res.json(todos);
    }
    updateToDo() {
        this.todoService.updateToDo(2, 'FIGHT BACK NIGGA');
    }
    deleteToDo(id) {
        this.todoService.deleteToDo(1);
    }
};
__decorate([
    (0, decorators_1.Post)(),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", to_doItem_1.ToDoItem)
], ToDoController.prototype, "createToDo", null);
__decorate([
    (0, decorators_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", to_doItem_1.ToDoItem)
], ToDoController.prototype, "getTodo", null);
__decorate([
    (0, decorators_1.Get)('all'),
    __param(0, (0, decorators_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ToDoController.prototype, "getAllTodos", null);
__decorate([
    (0, decorators_1.Patch)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ToDoController.prototype, "updateToDo", null);
__decorate([
    (0, decorators_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ToDoController.prototype, "deleteToDo", null);
ToDoController = __decorate([
    (0, common_1.Controller)('todos'),
    __metadata("design:paramtypes", [to_do_service_1.ToDoService])
], ToDoController);
exports.ToDoController = ToDoController;
//# sourceMappingURL=to-do.controller.js.map