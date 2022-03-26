import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { OtrElementosComponent } from './components/otr-elementos/otr-elementos.component';
import { EncabezadosComponent } from './components/encabezados/encabezados.component';
import { EstilosFormatoComponent } from './components/estilos-formato/estilos-formato.component';
import { CssEnHtmlComponent } from './components/css-en-html/css-en-html.component';
import { LinksImgsComponent } from './components/links-imgs/links-imgs.component';
import { TablasComponent } from './components/tablas/tablas.component';
import { ListasComponent } from './components/listas/listas.component';
import { LobasicoComponent } from './components/lobasico/lobasico.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    OtrElementosComponent,
    EncabezadosComponent,
    EstilosFormatoComponent,
    CssEnHtmlComponent,
    LinksImgsComponent,
    TablasComponent,
    ListasComponent,
    LobasicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
