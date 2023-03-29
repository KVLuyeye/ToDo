import { Injectable } from '@nestjs/common';

import { ToDoItem } from './to-doItem';

@Injectable()
export class ToDoService {
  protected task: string;
  protected id: number;
  count: number;

  todoItem: ToDoItem;
  todoList: ToDoItem[];

  constructor() {
    this.todoItem = new ToDoItem(this.task, this.id);
    this.todoList = [];
  }

  createToDo(id: number, task: string): ToDoItem {
    const newTodo = this.todoItem.newTodo(task, id); //const was used here because we're not changing the value of the new To-Do item, for now //
    this.todoList.push(newTodo);
    return newTodo;
  }

  //looks for an ID and returns the corresponding TO-DO item
  getToDo(id: number): ToDoItem {
    return this.todoList.at(id);
  }

  //returns an array of all To-Do items
  getAllToDos(): ToDoItem[] {
    return this.todoList;
  }

  updateToDo(id: number, newTask: string) {
    // TO-DO
    let update = this.getToDo(id);
    update.task = newTask;
  }

  deleteToDo(id: number) {
    return this.todoList.splice(id);
  }
}
