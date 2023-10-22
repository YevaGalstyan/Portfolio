import { Component } from '@angular/core';

@Component({
  selector: 'app-desktop',
  template: `
    <div class="body">
      <div class="main_block">
        <app-header></app-header>
        <div class="main_section">
          <router-outlet></router-outlet>
        </div>
        <app-footer></app-footer>
      </div>
    </div>
  `,
  styleUrls: ['desktop.component.scss']
})
export class DesktopComponent {

}
