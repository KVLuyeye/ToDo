import { ToDoService } from './to-do.service';
import { ToDoItem } from './to-doItem';
export declare class ToDoController {
    private todoService;
    constructor(todoService: ToDoService);
    createToDo(task: string): ToDoItem;
    getTodo(): ToDoItem;
    getAllTodos(res: any): void;
    updateToDo(): void;
    deleteToDo(id: number): void;
}
