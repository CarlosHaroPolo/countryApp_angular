import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.countries';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {
   this.LoadforLocalStorage();
  }

  private saveToLocalStorage(){
    localStorage.setItem('cacheStore',JSON.stringify(this.cachStore));
  }
  private LoadforLocalStorage(){

 if(!localStorage.getItem('cacheStore')) return
   this.cachStore = JSON.parse(localStorage.getItem('cacheStore')!)
  }

  public cachStore:CacheStore={
      byCapital:{
        term:'',
        countries:[]
      },   byCountries:{
        term:'',
        countries:[]
      },   byRegion:{
        region:'',
        countries:[]
      },
  }


  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError((error) => {
        console.error('Error fetching country data', error); // Imprime el error en la consola
        return of(null); // Devuelve null en caso de error
      })
    );
  }

  private getCountriesRequest(url:string):Observable<Country[]>{
    return this.http.get<Country[]>(url)
    .pipe(catchError(()=>of([])))
  }
  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap(countries=>this.cachStore.byCapital ={
        term:term,countries:countries
      }),
      tap(()=>this.saveToLocalStorage())
    )

  }
  searchByCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}?fullText=true`;
    return this.getCountriesRequest(url).pipe(
      tap((countries)=> this.cachStore.byCountries={term,countries} ),
      tap(()=>this.saveToLocalStorage())
    );
  }
  searchByRegion(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${term}`;
    return this.getCountriesRequest(url).pipe(
     tap(countries=>this.cachStore.byCapital={term:term ,countries:countries}),
     tap(()=>this.saveToLocalStorage())
    )
  }
}
