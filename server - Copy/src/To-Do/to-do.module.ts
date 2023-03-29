import { Module } from '@nestjs/common';
import { ToDoService } from './to-do.service';
import { ToDoController } from './to-do.controller';

@Module({
  providers: [ToDoService],
  controllers: [ToDoController]
})
export class ToDoModule {}
