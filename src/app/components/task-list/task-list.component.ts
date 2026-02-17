import { Component, inject } from '@angular/core';
import { TaskCardComponent } from "../task-card/task-card.component";
import { TaskService } from '../../services/task.service';
import { CdkDragDrop, transferArrayItem, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { ITask } from '../../interfaces/task.interface'
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [TaskCardComponent, CdkDropList, CdkDrag, AsyncPipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  readonly _taskService = inject(TaskService);

  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      event.container.data,
      event.previousIndex,
      event.currentIndex
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
  }
}
