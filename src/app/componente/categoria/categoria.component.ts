import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/interfaces/Categoria';
import { ConexionService } from 'src/app/service/conexion.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {

  listado: Categoria[] = [];
  //inyecto conexionService 
  constructor(private conexion: ConexionService) {
    const dato: Observable<any> = this.conexion.leerApi('categorias'); //declaro observable dato y este va a observar leerApi
    console.log("entro en listado");
    //Ahora me suscribo al observable dato. Con lambda. Es Any porque no sé la respuesta que me dará
    //es mejor recibirla y procesarla
    dato.subscribe(
      (resp: any) => { //resp es mi respuesta de la bbdd. Mi lista de cosas
        if(resp.codigo==302){ //si el codigo es correcto, empiezo a llenar las categorias
          this.listado = resp.datos as Categoria[];
        }
      })
  }
  
  ngOnInit():void{
  }


}
