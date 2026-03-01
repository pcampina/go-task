import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ITask } from '../../../../domain/tasks/interfaces/task.interface';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { IComment } from '../../../../domain/tasks/interfaces/comment.interface';
import { generateUniqueIdWithTimestamp } from '../../../../shared/utils/generate-unique-id-with-timestamp';

@Component({
  selector: 'app-task-comments',
  imports: [ReactiveFormsModule],
  templateUrl: './task-comments.component.html',
  styleUrl: './task-comments.component.css'
})
export class TaskCommentsComponent {
  isTaskCommentsChanged = false;
  commentControl = new FormControl('', [Validators.required]);

  @ViewChild('commentInput') commentInputRef!: ElementRef<HTMLInputElement>;

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

    this.commentInputRef.nativeElement.focus();
  }

  onRemoveComment(commentId: string) {
    this._task.comments = this._task.comments.filter(
      (comment) => comment.id !== commentId
    );

    this.isTaskCommentsChanged = true;
  }

  onCloseModal() {
    this._dialogRef.close(this.isTaskCommentsChanged);
  }
}
