

import {Component} from '@angular/core';
import {ElementRef} from '@angular/core';
import {OnInit} from '@angular/core';

declare var jQuery:any;

@Component({

    selector: 'my-jquery',
    templateUrl: './jquery.component.html'
})

export class JqueryComponent implements OnInit {
    constructor(private _elemRef:ElementRef){ }

    ngOnInit():any {


        jQuery(this._elemRef.nativeElement).find('button').on('click', function(){

            alert('it works')
        });
    }

}