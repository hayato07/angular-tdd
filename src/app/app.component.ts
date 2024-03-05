import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountPanelComponent } from './count-panel/count-panel.component';
import { CountButtonComponent } from './count-button/count-button.component';

const COUNT_MAX = 5;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountPanelComponent, CountButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  count = 0;

  increment(): void {
    if(this.count >= COUNT_MAX) {
      return;
    }

    this.count++;
  }
}
