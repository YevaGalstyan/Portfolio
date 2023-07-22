import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class GeneralService {

    // Public
    isMobile!: boolean;

    constructor(private readonly router: Router) {
      this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    scrollPage(top: number): void {
        window.scrollTo({top: top, behavior: 'smooth'});
    }

    navigate(nav: string): void {
        this.router.navigateByUrl(nav).then();
    }
}
