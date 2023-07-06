import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  // Public

  constructor(
      private readonly router: Router) { }

  scrollPage(): void {
    window.scrollTo({ top: 700, behavior: 'smooth' });
  }

  navigate(nav: string): void {
    this.router.navigateByUrl(nav).then();
  }
}
