import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './componente/categoria/categoria.component';
import { EditCategoriaComponent } from './componente/edit-categoria/edit-categoria.component';
import { NuevaCategoriaComponent } from './componente/nueva-categoria/nueva-categoria.component';

const routes: Routes = [
  {path: 'categorias', component: CategoriaComponent},
  {path: 'categorias/nuevaCategoria', component: NuevaCategoriaComponent},
  {path: 'categorias/editCategoria/:id', component:EditCategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
