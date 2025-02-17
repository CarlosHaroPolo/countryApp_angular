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

//trabajemos con el observador para trabajar de forma dinámica
  constructor(private activatedRoute:ActivatedRoute , private service:CountriesService,private router:Router){
   // redirection cuando si es incorrecta
  }

  ngOnInit(): void {
    //ya tome la información del id
    this.activatedRoute.params
    .pipe(
      //básicamente recibe los parámetros anteriores y e objetivo es devolver un nuevo observadlo
      switchMap(({id})=> this.service.searchCountryByAlphaCode(id))
    )
    .subscribe(country=>{
      if(!country)   return this.router.navigateByUrl('');
      return this.country= country;

    })
  }

}
