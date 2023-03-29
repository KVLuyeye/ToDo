export class ToDoItem {
  task: string;
  id: number;

  constructor(task: string, id: number) {
    this.task = task;
    this.id = id;
  }

  //Factory Methdod for a new TODO element
  newTodo(task: string, id: number): ToDoItem {
    return new ToDoItem(task, id);
  }
}
