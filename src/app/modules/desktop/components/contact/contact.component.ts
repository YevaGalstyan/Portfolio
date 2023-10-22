import {Component, HostListener} from '@angular/core';
import {LocalizeService} from '../../../../localizer/localize.service';
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  // Public
  copied: string = this.localize.localize.copy

  @HostListener('click') onClick() {
    this.copied = this.localize.localize.copy
  }
  constructor(public readonly localize: LocalizeService,
              private clipboard: Clipboard) {
  }

  copyToClipboard(text: string, event: Event): void {
    event.stopPropagation();
    this.copied = this.localize.localize.copied
    this.clipboard.copy(text);
  }
}
