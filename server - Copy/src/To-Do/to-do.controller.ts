import { Controller } from '@nestjs/common';
import { Body, Get, Post, Delete, Patch, Res } from '@nestjs/common/decorators';
import { ToDoService } from './to-do.service';
import { ToDoItem } from './to-doItem';

@Controller('todos')
export class ToDoController {
  constructor(private todoService: ToDoService) {}

  @Post()
  createToDo(@Body() task: string): ToDoItem {
    // Currently the method returns one object whose values are always overridden, try the Factory method here
    return (
      this.todoService.createToDo(1, 'Buy Groceries'),
      this.todoService.createToDo(2, 'Wash the Dishes'),
      this.todoService.createToDo(3, 'Pick up the Kids')
    );
  }

  @Get()
  getTodo(): ToDoItem {
    return this.todoService.getToDo(1);
  }

  @Get('all')
  getAllTodos(@Res() res): void {
    const todos: ToDoItem[] = this.todoService.getAllToDos();
    res.json(todos);
  }

  @Patch()
  updateToDo() {
    this.todoService.updateToDo(2, 'FIGHT BACK NIGGA');
  }

  @Delete()
  deleteToDo(id: number) {
    this.todoService.deleteToDo(1);
  }
}
