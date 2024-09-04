import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import { Country } from '../../interfaces/country.countries';

@Component({
  selector: 'countries-country-table',
 styles:[
  `
   img{
      width:30px
   }
  `

 ],
  templateUrl: './countryTable.component.html',
})
export class CountryTableComponent {

@Input()
public countries : Country[]=[];

 }
