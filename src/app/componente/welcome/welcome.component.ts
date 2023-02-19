import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/interfaces/Categoria';
import { AccountService } from 'src/app/service/account.service';
import { ConexionService } from 'src/app/service/conexion.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  contCategorias: number = 0;
  listado: Categoria[] = [];
  //inyecto conexionService 
  constructor(public nav: AccountService, private conexion: ConexionService, private router:Router ) {
    const dato: Observable<any> = this.conexion.leerApi('categorias'); //declaro observable dato y este va a observar leerApi
    console.log("entro en listado");
    //Ahora me suscribo al observable dato. Con lambda. Es Any porque no sé la respuesta que me dará
    //es mejor recibirla y procesarla
    dato.subscribe(
      (resp: any) => { //resp es mi respuesta de la bbdd. Mi lista de cosas
        if(resp.codigo==200){ //si el codigo es correcto, empiezo a llenar las categorias
          this.listado = resp.datos as Categoria[];
        }
      })

      
  }
  
  cuentaCategorias():number{
    return this.listado.length;
  }
  
  ngOnInit() {
    this.nav.show();
  }
}
