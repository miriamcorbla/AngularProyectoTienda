import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/interfaces/Categoria';
import { ConexionService } from 'src/app/service/conexion.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {

  buscador:string ='';
  eliminado:boolean = false;
  categoria:Categoria = {id_categoria:0, cat_nombre:'', cat_descripcion:''};

  listado: Categoria[] = [];
  //inyecto conexionService 
  constructor(private conexion: ConexionService, private router:Router ) {
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
  
  ngOnInit():void{
  }

  confirmacion(name: string, id:number) {
    if(confirm("Va a eliminar la categoría "+name+ " ¿Está seguro?")) {
      this.eliminar(id);
    }
  }

  eliminar(id_categoria:number): void{
    let miObservable: Observable<any> = this.conexion.deleteApi('categorias/'+id_categoria);
    miObservable.subscribe((resp: any) => {
      let status: number = resp[0];
      if(status == 200){
        this.eliminado = true;

        console.log("eliminado correctamente");
        console.log(this.eliminado);

        this.router.navigate(['/categorias'])
        .then(() => {
        window.location.reload();
        });
      }else{
        alert("ERROR. Ha sido imposible eliminar la categoria.\nMensaje: " + JSON.stringify(resp["mensaje"]));
      }
    })

  }
}
