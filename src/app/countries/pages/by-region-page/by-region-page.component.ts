import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.countries';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {



  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion: Region = '';
  constructor(private service: CountriesService) { }
  ngOnInit(): void {
    // necesito capturar los elementos
    this.selectedRegion = this.service.cachStore.byRegion.region
    this.countries = this.service.cachStore.byRegion.countries
  }

  searchByRegion(region: Region) {
    this.selectedRegion = region;
    this.service.cachStore.byRegion.region = region;
    this.service.searchByRegion(region).subscribe(countries => {
      this.countries = countries;
     // this.service.cachStore.byRegion.countries = countries;
    }
    );
  }
}
