import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-count-button',
  standalone: true,
  imports: [],
  templateUrl: './count-button.component.html',
  styleUrl: './count-button.component.scss'
})
export class CountButtonComponent {
  @Output() addClickEvent = new EventEmitter<void>();

  emitAddClickEvent(): void {
    this.addClickEvent.emit();
  }
}
