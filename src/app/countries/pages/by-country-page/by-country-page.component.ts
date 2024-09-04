import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.countries';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  public countries:Country[]=[];
  constructor(private service:CountriesService){}
  searchByCountry(term:string){
  this.service.searchByCountry(term)
  .subscribe(countries=>{
    this.countries =countries;
  }
  )
  }

}
