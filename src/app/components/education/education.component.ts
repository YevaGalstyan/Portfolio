import {Component} from '@angular/core';
import {LocalizeService} from '../../localizer/localize.service';
import {GeneralService} from '../../services/general.service';
import {DataService} from '../../services/data';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  constructor(public readonly localize: LocalizeService,
              public readonly generalService: GeneralService,
              public readonly dataService: DataService) {
  }
}
