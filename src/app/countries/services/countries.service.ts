import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.countries';

@Injectable({providedIn: 'root'})
export class CountriesService {
  private apiUrl :string='https://restcountries.com/v3.1'
  constructor(private http: HttpClient) { }

searchCountryByAlphaCode(code: string): Observable<Country | null> {
  const url = `${this.apiUrl}/alpha/${code}`;
  return this.http.get<Country[]>(url).pipe(
    map(countries => countries.length > 0 ? countries[0] : null),
    catchError(error => {
      console.error('Error fetching country data', error); // Imprime el error en la consola
      return of(null); // Devuelve null en caso de error
    })
  );
}

  searchCapital(term :string):Observable<Country[]>{
    const url =`${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url).pipe(
      // puedes repasar RxJs
      //tenemos al map ,tap
      //tap(countries=>console.log('Paso por el tap',countries)),
     // map(countries =>[]) // El operador map trasforma las opearaciones

     // OPCION 1
     catchError(error=>{
        console.log(error);
        return of([])  // vas a regresar un arreglo vacio para que no pordusca ningun error
        }  )

    );
}
searchByCountry(term:String):Observable<Country[]>{
const url =`${this.apiUrl}/name/${term}?fullText=true`
return this.http.get<Country[]>(url).pipe(
  catchError(error=> of ([]))
)

}
searchByRegion(term:string):Observable<Country[]>{
const url =`${this.apiUrl}/region/${term}`
return this.http.get<Country[]>(url).pipe(
  catchError(error=> of ([]))
)
}

}
