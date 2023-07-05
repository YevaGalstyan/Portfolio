import {Component, HostListener} from '@angular/core';

@Component({
    selector: 'app-scroll-to-top',
    templateUrl: './scroll-to-top.component.html',
    styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent {

    // In case of long scroll add component to easily scroll to top
    private readonly scrollThreshold: number = 300;
    showScrollToTopButton: boolean = false;

    @HostListener('window:scroll')
    onWindowScroll() {
        this.showScrollToTopButton = window.pageYOffset > this.scrollThreshold;
    }

    scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}
