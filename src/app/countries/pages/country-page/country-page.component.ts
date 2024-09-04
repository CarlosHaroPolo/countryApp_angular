import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.countries';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})

//necesito el id y navegar
export class CountryPageComponent implements OnInit {

public country?:Country;

//trabajemos con el observabor para trabajar de forma dinamica
  constructor(private activatedRoute:ActivatedRoute , private service:CountriesService,private router:Router){
   // redireccionar cuando si es incorrecta
  }

  ngOnInit(): void {
    //ya tome la informacion del id
    this.activatedRoute.params
    .pipe(
      //basicamente recibe los parametrso anteriores y e objetivo es devolver un nuevo observabol
      switchMap(({id})=> this.service.searchCountryByAlphaCode(id))
    ) // na no nos da los param sino nos entrea el arreglo de conuntry
    .subscribe(country=>{
      if(!country)   return this.router.navigateByUrl('');
      return this.country= country;

    })
  }

}
