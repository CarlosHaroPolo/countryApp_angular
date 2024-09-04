

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/homePage/homePage.component';
import { AboutPageComponent } from './shared/pages/aboutPage/aboutPage.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
//aca defines toda tus rutas
const routes: Routes = [
  //{
    //path:'', //localHost/home
   // component:HomePageComponent  // te va devolverdicho componente
  //},
  {
    path:'about',
    component:AboutPageComponent
  },

  {
    path:'contact',
    component:ContactPageComponent
  },
  {
    path:'countries',
    loadChildren:()=>import('./countries/countries.module').then(m=>m.CountriesModule)
  },
  {
    path:'**',  //cualquiera que no sea lo anterior retorna a home
    redirectTo:'countries'
  },

];


//tenemos un modulo
@NgModule({
  imports: [RouterModule.forRoot(routes)],  // si es el primer route tienes que poner esto pero
  exports: [RouterModule] // tienes que exportar el router module para que otras puedan ser consumidos
})
export class AppRoutingModule { }
