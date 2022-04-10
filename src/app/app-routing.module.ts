import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CssEnHtmlComponent } from './components/css-en-html/css-en-html.component';
import { EncabezadosComponent } from './components/encabezados/encabezados.component';
import { EstilosFormatoComponent } from './components/estilos-formato/estilos-formato.component';
import { HomeComponent } from './components/home/home.component';
import { LinksImgsComponent } from './components/links-imgs/links-imgs.component';
import { ListasComponent } from './components/listas/listas.component';
import { LobasicoComponent } from './components/lobasico/lobasico.component';
import { OtrElementosComponent } from './components/otr-elementos/otr-elementos.component';
import { TablasComponent } from './components/tablas/tablas.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'lobasico', component: LobasicoComponent },
  {path: 'otr-elementos', component: OtrElementosComponent },
  {path: 'encabezados', component: EncabezadosComponent },
  {path: 'estilos-formato', component: EstilosFormatoComponent },
  {path: 'css-en-html', component: CssEnHtmlComponent },
  {path: 'links-imgs', component: LinksImgsComponent },
  {path: 'tablas', component: TablasComponent },
  {path: 'listas', component: ListasComponent },
  {path: 'about', component: AboutComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
