import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  
  constructor(private router:Router) {}
  
  ngOnInit(){

  }
  
  login() {
    if(this.email == 'admin@incienso.com' && this.password=="admin"){
      console.log("Logeado correctamente");
      this.router.navigate(['/welcome'])
    }

  }
}
