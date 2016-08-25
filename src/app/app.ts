import {Component} from '@angular/core';
import {JqueryComponent} from './components/jq/jquery.component';
import {C3Component} from './components/c3/c3.component';
@Component({
  selector   : 'app',
  templateUrl: './app.html',
  directives: [JqueryComponent]
})
export class AppComponent {
}
