
import {Component} from '@angular/core';
import {JqueryComponent} from '../components/jq/jquery.component';
import {C3Component} from '../components/c3/c3.component';
declare var c3:any;


@Component({

    selector: 'graphics',
    templateUrl: './graphics.component.html',
    directives: [ C3Component]
})

export class GraphicsComponent {



}



