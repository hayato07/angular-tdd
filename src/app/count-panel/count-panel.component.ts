import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-count-panel',
  standalone: true,
  imports: [],
  templateUrl: './count-panel.component.html',
  styleUrl: './count-panel.component.scss'
})
export class CountPanelComponent {
  @Input() count = 0;
}
