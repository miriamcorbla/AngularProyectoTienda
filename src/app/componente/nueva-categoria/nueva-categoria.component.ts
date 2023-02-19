import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, timeout } from 'rxjs';
import { Categoria } from 'src/app/interfaces/Categoria';
import { ConexionService } from 'src/app/service/conexion.service';

@Component({
  selector: 'app-nueva-categoria',
  templateUrl: './nueva-categoria.component.html',
  styleUrls: ['./nueva-categoria.component.css']
})
export class NuevaCategoriaComponent {

  cat: Categoria = {id_categoria:0, cat_nombre:'', cat_descripcion:''};

  minLength: number = 5;

  constructor(private conexion: ConexionService, private router:Router){}

  ngOnInit(){

  }
  insertar(): void{
    let miObservable: Observable<any> = this.conexion.insertApi('categorias', this.cat);
    miObservable.subscribe((resp: any) => {
      let status: number = resp[0];
      if(status == 201){
        console.log(status);
        console.log("Insertado correctamente");
        alert("Categoría " + this.cat.cat_nombre + " guardada con éxito.");
      }else{
        console.log(resp);
        alert("ERROR. Ha sido imposible añadir la categoria: " +this.cat.cat_nombre + ".\nMensaje: " + JSON.stringify(resp["mensaje"]));
      }
    })
    this.recarga();
  }
  recarga():void{
    setTimeout(() => {this.router.navigate(['/categorias'])
    .then(() => {
      window.location.reload();
    })},500);
  }
}
