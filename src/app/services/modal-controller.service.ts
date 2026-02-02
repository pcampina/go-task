import { inject, Injectable } from "@angular/core";
import { Dialog } from "@angular/cdk/dialog"
import { TaskFormComponent } from "../components/task-form/task-form.component";
import { TaskCommentsComponent } from "../components/task-comments/task-comments.component";
import { ITaskFormControls } from "../interfaces/task-form-controls.interface";

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
    return this._dialog.open(TaskFormComponent, {
      ...this.modalSizeOptions,
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
    return this._dialog.open(TaskFormComponent, {
      ...this.modalSizeOptions,
      data: {
        mode: 'edit',
        formValues
      }
    });
  }

  openTaskCommentsModal() {
    return this._dialog.open(TaskCommentsComponent, {
      ...this.modalSizeOptions
    });
  }
}
