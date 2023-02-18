import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaComponent } from './componente/categoria/categoria.component';
import { NuevaCategoriaComponent } from './componente/nueva-categoria/nueva-categoria.component';
import { FormsModule } from '@angular/forms';
import { EditCategoriaComponent } from './componente/edit-categoria/edit-categoria.component';
import { HeaderComponent } from './componente/header/header.component';
import { FooterComponent } from './componente/footer/footer.component';
import { SidebarComponent } from './componente/sidebar/sidebar.component';
import { WelcomeComponent } from './componente/welcome/welcome.component';
import { ContactoComponent } from './componente/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    NuevaCategoriaComponent,
    EditCategoriaComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    WelcomeComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
