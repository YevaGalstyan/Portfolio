import { Component } from '@angular/core';
import {localize} from '../../localizer/eng';
import {LocalizeService} from '../../localizer/localize.service';
import {DataService} from '../../services/data';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {

    constructor(public readonly localize: LocalizeService,
                public readonly dataService: DataService,) {
    }
}
