import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/interfaces/Categoria';
import { ConexionService } from 'src/app/service/conexion.service';

@Component({
  selector: 'app-nueva-categoria',
  templateUrl: './nueva-categoria.component.html',
  styleUrls: ['./nueva-categoria.component.css']
})
export class NuevaCategoriaComponent {

  cat: Categoria = {id_categoria:0, cat_nombre:'', cat_descripcion:''};
  insertado:boolean = false;
  minLength: number = 5;

  constructor(private conexion: ConexionService, private router:Router){}

  ngOnInit(){

  }
  insertar(): void{
    let miObservable: Observable<any> = this.conexion.insertApi('categorias', this.cat);
    miObservable.subscribe((resp: any) => {
      let status: number = resp.estado;
      if(status == 301){
        console.log("Insertado correctamente");
        this.insertado = true;
      }
    })
    this.router.navigate(['/categorias'])
      .then(() => {
      window.location.reload();
    });
  }
}
