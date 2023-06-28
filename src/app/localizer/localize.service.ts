import {Injectable} from '@angular/core';
import {ILocalize} from './localize';
import {localize} from './eng';

@Injectable({
    providedIn: 'root'
})
export class LocalizeService {

    // Public
    localize: ILocalize = localize;

    constructor() {
    }
}
