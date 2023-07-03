import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent {

  private readonly scrollThreshold: number = 500;
  showScrollToTopButton: boolean = false;

  // Listen to the window scroll event
  @HostListener('window:scroll')
  onWindowScroll() {
    this.showScrollToTopButton = window.pageYOffset > this.scrollThreshold;
  }

  // Scroll to top when the button is clicked
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
