import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ConexionService } from './service/conexion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TiendaIncienso';
/*
  listado: any[] = [];
  //inyecto conexionService 
  constructor(private conexion: ConexionService){
    const dato: Observable<any> = this.conexion.leerApi('categorias'); //declaro observable dato y este va a observar leerApi
    console.log("entro en listado");
    //Ahora me suscribo al observable dato. Con lambda. Es Any porque no sé la respuesta que me dará
    //es mejor recibirla y procesarla
    dato.subscribe(
      (resp: any) => {
      this.listado = resp;
      console.log(this.listado);
    })
  }*/
}
