
import {Component} from '@angular/Core';
import {OnInit} from '@angular/Core'
import {ElementRef} from '@angular/Core';

declare var c3: any;

Component({
    selector: 'my-c3',
    templateUrl: './c3.component.html'
})

export class C3Component implements OnInit{

// constructor(private _elemRef:ElementRef){ }
   ngOnInit(): any{

    //  var chart = c3.generate({
    //         data: {
    //             columns: [
    //                 ['data1', 100, 200, 150, 300, 200],
    //                 ['data2', 400, 500, 250, 700, 300],
    //             ]
    //         }
    //     });

   }
}