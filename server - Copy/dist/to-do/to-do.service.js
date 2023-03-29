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
exports.ToDoService = void 0;
const common_1 = require("@nestjs/common");
const to_doItem_1 = require("./to-doItem");
let ToDoService = class ToDoService {
    constructor() {
        this.todoItem = new to_doItem_1.ToDoItem(this.task, this.id);
        this.todoList = [];
    }
    createToDo(id, task) {
        const newTodo = this.todoItem.newTodo(task, id);
        this.todoList.push(newTodo);
        return newTodo;
    }
    getToDo(id) {
        return this.todoList.at(id);
    }
    getAllToDos() {
        return this.todoList;
    }
    updateToDo(id, newTask) {
        let update = this.getToDo(id);
        update.task = newTask;
    }
    deleteToDo(id) {
        return this.todoList.splice(id);
    }
};
ToDoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ToDoService);
exports.ToDoService = ToDoService;
//# sourceMappingURL=to-do.service.js.map