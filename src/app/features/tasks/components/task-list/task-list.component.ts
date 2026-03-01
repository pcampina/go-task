import { Component, inject } from '@angular/core';
import { TaskCardComponent } from "../task-card/task-card.component";
import { TaskService } from '../../../../core/services/task.service';
import { CdkDragDrop, transferArrayItem, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { ITask } from '../../../../domain/tasks/interfaces/task.interface'
import { AsyncPipe } from '@angular/common';
import { TaskStatus } from '../../../../domain/tasks/types/task-status';
import { TaskStatusEnum } from '../../../../domain/tasks/enums/task-status.enum';

@Component({
  selector: 'app-task-list',
  imports: [TaskCardComponent, CdkDropList, CdkDrag, AsyncPipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  readonly _taskService = inject(TaskService);

  onCardDrop(event: CdkDragDrop<ITask[]>) {
    this.moveCardToColumn(event);

    const taskId = event.item.data.id;
    const taskCurrentStatus = event.item.data.status;
    const droppedColumn = event.container.id;

    this.normalizeTaskStatus(taskId, taskCurrentStatus, droppedColumn);
  }

  private normalizeTaskStatus(taskId: string, taskCurrentStatus: TaskStatus, droppedColumn: string) {
    let taskNextStatus: TaskStatus;

    switch (droppedColumn) {
      case 'todo-column':
        taskNextStatus = TaskStatusEnum.TODO;
        break;
      case 'doing-column':
        taskNextStatus = TaskStatusEnum.DOING;
        break;
      case 'done-column':
        taskNextStatus = TaskStatusEnum.DONE;
        break
      default:
        throw Error('Column not found!');
    }

    this._taskService.updateTaskStatus(taskId, taskCurrentStatus, taskNextStatus);
  }

  private moveCardToColumn(event: CdkDragDrop<ITask[]>) {
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
