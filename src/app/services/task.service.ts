import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ITask } from "../interfaces/task.interface";
import { ITaskFormControls } from "../interfaces/task-form-controls.interface";
import { TaskStatusEnum } from "../enums/task-status.enum";
import { generateGenerateUniqueIdWithTimestamp } from "../utils/generate-unique-id-with-timestamp";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // to do
  private todoTasks$ = new BehaviorSubject<ITask[]>([]);
  readonly todoTasks = this.todoTasks$.asObservable();

  // doing
  private doingTasks$ = new BehaviorSubject<ITask[]>([]);
  readonly doingTasks = this.doingTasks$.asObservable();

  // done
  private doneTasks$ = new BehaviorSubject<ITask[]>([]);
  readonly doneTasks = this.doneTasks$.asObservable();

  addTask(task: ITaskFormControls) {
    const newTask: ITask = {
      ...task,
      status: TaskStatusEnum.TODO,
      id: generateGenerateUniqueIdWithTimestamp(),
      comments: []
    }

    const currentTasks = this.todoTasks$.value;

    this.todoTasks$.next([...currentTasks, newTask]);
  }
}
