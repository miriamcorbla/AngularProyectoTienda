import { Component } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor( public nav: AccountService ) {}
}
