"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoItem = void 0;
class ToDoItem {
    constructor(task, id) {
        this.task = task;
        this.id = id;
    }
    newTodo(task, id) {
        return new ToDoItem(task, id);
    }
}
exports.ToDoItem = ToDoItem;
//# sourceMappingURL=to-doItem.js.map