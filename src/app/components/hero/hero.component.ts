import { Component, inject } from '@angular/core';
import { ModalControllerService } from '../../services/modal-controller.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  private readonly _modalControllerService = inject(ModalControllerService);

  openNewTaskModal() {
    this._modalControllerService.openNewTaskModal()
  }
}
