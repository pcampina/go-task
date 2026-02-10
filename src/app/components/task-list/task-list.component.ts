import { Component, inject } from '@angular/core';
import { TaskCardComponent } from "../task-card/task-card.component";
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  imports: [TaskCardComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  private readonly _taskService = inject(TaskService);

  ngOnInit() {
    this._taskService.todoTasks.subscribe((todoList) => {
      console.log(todoList)

      todoList[0].name = 'Name changed'

      this._taskService.loadCurrentTodoList();
    });
  }
}
