import { Component } from '@angular/core';
import {LocalizeService} from '../../../localizer/localize.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  constructor(public readonly localize: LocalizeService,
              private readonly router: Router) {
  }

  navigate(nav: string): void {
    this.router.navigateByUrl(nav).then();
  }
}
