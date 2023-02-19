import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from './service/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TiendaIncienso';
  constructor( public nav: AccountService ) {}

  ngOnInit() {
    this.nav.show();
  }
}
