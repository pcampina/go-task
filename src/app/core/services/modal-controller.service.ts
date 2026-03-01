import { inject, Injectable } from "@angular/core";
import { Dialog } from "@angular/cdk/dialog"
import { TaskFormComponent } from "../../features/tasks/components/task-form/task-form.component";
import { TaskCommentsComponent } from "../../features/tasks/components/task-comments/task-comments.component";
import { ITaskFormControls } from "../interfaces/task-form-controls.interface";
import { ITask } from "../../domain/tasks/interfaces/task.interface";

@Injectable({
  providedIn: 'root'
})
export class ModalControllerService {
  private readonly modalSizeOptions = {
      maxWidth: '620px',
      width: '95%'
  }

  private readonly _dialog = inject(Dialog);

  openNewTaskModal() {
    return this._dialog.open<ITaskFormControls>(TaskFormComponent, {
      ...this.modalSizeOptions,
      disableClose: true,
      data: {
        mode: 'create',
        formValues: {
          name: '',
          description: ''
        }
      }
    });
  }

  openEditTaskModal(formValues: ITaskFormControls) {
    return this._dialog.open<ITaskFormControls>(TaskFormComponent, {
      ...this.modalSizeOptions,
      disableClose: true,
      data: {
        mode: 'edit',
        formValues
      }
    });
  }

  openTaskCommentsModal(task: ITask) {
    return this._dialog.open(TaskCommentsComponent, {
      ...this.modalSizeOptions,
      disableClose: true,
      data: task
    });
  }
}
