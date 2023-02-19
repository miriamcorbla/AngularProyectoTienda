import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  
  estado:boolean = false;

  constructor(private router:Router, public nav: AccountService) {}
  
  ngOnInit() {
    this.nav.hide();
  }
  
  login() {
    if(this.email == 'admin@incienso.com' && this.password=="admin"){
      console.log("Logeado correctamente");
      this.estado = true;
      console.log(this.estado);
      this.router.navigate(['/welcome'])
    }

  }
}
