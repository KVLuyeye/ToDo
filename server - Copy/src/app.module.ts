import { Module } from '@nestjs/common';
import { ToDoModule } from './to-do/to-do.module';
import { ToDoController } from './to-do/to-do.controller';
import { ToDoService } from './to-do/to-do.service';

@Module({
  imports: [ToDoModule],
  controllers: [ToDoController],
  providers: [ToDoService],
})
export class AppModule {}
