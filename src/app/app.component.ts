import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { MainContentComponent } from "./components/main-content/main-content.component";
import { TaskFormComponent } from "./components/task-form/task-form.component";
import { TaskCommentsComponent } from "./components/task-comments/task-comments.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainContentComponent, TaskFormComponent, TaskCommentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'go-task';
}
