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
    selector: 'bh-checkout',
    templateUrl: './checkout.template.html'
})

export class checkoutComponent extends NBaseComponent implements OnInit {
    text: string = '';
showText(){
    this.text = "Order placed successfully";
}
    constructor() {
        super();
    }

    ngOnInit() {

    }
}
