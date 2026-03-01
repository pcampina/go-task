import { Component } from '@angular/core';
import { HeroComponent } from "../../../../core/layout/hero/hero.component";
import { TaskListComponent } from "../task-list/task-list.component";

@Component({
  selector: 'app-main-content',
  imports: [HeroComponent, TaskListComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
