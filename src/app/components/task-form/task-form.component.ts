import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { ITaskFormModalData } from '../../interfaces/task-form-modal-data.interface';

@Component({
  selector: 'app-task-form',
  imports: [],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  readonly _data: ITaskFormModalData = inject(DIALOG_DATA);
}
