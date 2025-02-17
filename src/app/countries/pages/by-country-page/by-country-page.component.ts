import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.countries';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})

export class ByCountryPageComponent  implements OnInit{
  public countries:Country[]=[];
  public initialValue :string ='';
  constructor(private service:CountriesService){}
  ngOnInit(): void {
  this.initialValue=this.service.cachStore.byCountries.term
  this.countries=this.service.cachStore.byCountries.countries
  }
  searchByCountry(term:string){
    this.service.cachStore.byCountries.term=term;
  this.service.searchByCountry(term)
  .subscribe(countries=>{
    this.countries =countries;
   // this.service.cachStore.byCountries.countries=countries;
  }
  )
  }

}
