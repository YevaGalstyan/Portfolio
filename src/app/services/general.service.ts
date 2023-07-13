import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  // Public

  constructor(
      private readonly router: Router) { }

  scrollPage(top: number): void {
    window.scrollTo({ top: top, behavior: 'smooth' });
  }

  navigate(nav: string): void {
    this.router.navigateByUrl(nav).then();
  }
}
