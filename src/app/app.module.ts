import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaComponent } from './componente/categoria/categoria.component';
import { NuevaCategoriaComponent } from './componente/nueva-categoria/nueva-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    NuevaCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
