import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/interfaces/Categoria';
import { ConexionService } from 'src/app/service/conexion.service';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.css']
})
export class EditCategoriaComponent {

  
  cat: Categoria = {id_categoria:0, cat_nombre:'', cat_descripcion:''};
  
  constructor(private conexion: ConexionService, private router:Router, private route:ActivatedRoute){
    const dato: Observable<any> = this.conexion.leerApi('categorias/'+this.getParam()); //declaro observable dato y este va a observar leerApi
    console.log("entro en listado");
    console.log(this.getParam());
        dato.subscribe(
      (resp: any) => {
        if(resp.codigo==200){
          this.cat = resp.categoria as Categoria;
        }
      })
  }

  getParam(): number{
    return Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(){

  }

  modificar(): void{
    let miObservable: Observable<any> = this.conexion.editApi('categorias', this.cat);
    miObservable.subscribe((resp: any) => {
      let status: number = resp.estado;
      if(status == 301){
        console.log("Modificado correctamente");
      }
    })
    this.router.navigate(['/categorias'])
      .then(() => {
      window.location.reload();
    });
  }
}
