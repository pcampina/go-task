import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { ITask } from '../../interfaces/task.interface';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { IComment } from '../../interfaces/comment.interface';
import { generateUniqueIdWithTimestamp } from '../../utils/generate-unique-id-with-timestamp';

@Component({
  selector: 'app-task-comments',
  imports: [ReactiveFormsModule],
  templateUrl: './task-comments.component.html',
  styleUrl: './task-comments.component.css'
})
export class TaskCommentsComponent {
  isTaskCommentsChanged = false;
  commentControl = new FormControl('', [Validators.required]);

  readonly _task: ITask = inject(DIALOG_DATA);
  readonly _dialogRef: DialogRef<boolean> = inject(DialogRef);

  onAddComment() {
    const newComment: IComment = {
      id: generateUniqueIdWithTimestamp(),
      description: this.commentControl.value ? this.commentControl.value : ''
    };

    this._task.comments.unshift(newComment);

    this.commentControl.reset();

    this.isTaskCommentsChanged = true;
  }

  onCloseModal() {
    this._dialogRef.close(this.isTaskCommentsChanged);
  }
}
