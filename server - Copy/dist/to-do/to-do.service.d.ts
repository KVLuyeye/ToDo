import { ToDoItem } from './to-doItem';
export declare class ToDoService {
    protected task: string;
    protected id: number;
    count: number;
    todoItem: ToDoItem;
    todoList: ToDoItem[];
    constructor();
    createToDo(id: number, task: string): ToDoItem;
    getToDo(id: number): ToDoItem;
    getAllToDos(): ToDoItem[];
    updateToDo(id: number, newTask: string): void;
    deleteToDo(id: number): ToDoItem[];
}
