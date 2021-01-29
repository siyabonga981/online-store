/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-materialcomponents',
    templateUrl: './materialcomponents.template.html'
})

export class materialcomponentsComponent extends NBaseComponent implements OnInit {
    addedItems: number = 0;
    add(){
        this.addedItems += 1;
    }
    constructor() {
        super();
    }

    ngOnInit() {

    }
}
