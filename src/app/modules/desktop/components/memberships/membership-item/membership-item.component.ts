import {Component, Input} from '@angular/core';
import {membership} from '../../../../../interfaces/data';
import {localize} from '../../../../../localizer/eng';

@Component({
    selector: 'app-membership-item',
    templateUrl: './membership-item.component.html',
    styleUrls: ['./membership-item.component.scss']
})
export class MembershipItemComponent {
    @Input() membership!: membership
    protected readonly localize = localize;
}
