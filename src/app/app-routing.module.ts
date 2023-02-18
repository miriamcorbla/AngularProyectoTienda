import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './componente/categoria/categoria.component';
import { ContactoComponent } from './componente/contacto/contacto.component';
import { EditCategoriaComponent } from './componente/edit-categoria/edit-categoria.component';
import { NuevaCategoriaComponent } from './componente/nueva-categoria/nueva-categoria.component';
import { WelcomeComponent } from './componente/welcome/welcome.component';

const routes: Routes = [
  {path: 'categorias', component: CategoriaComponent},
  {path: 'categorias/nuevaCategoria', component: NuevaCategoriaComponent},
  {path: 'categorias/editCategoria/:id', component:EditCategoriaComponent},
  {path: 'welcome', component:WelcomeComponent},
  {path: 'contacto', component:ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
