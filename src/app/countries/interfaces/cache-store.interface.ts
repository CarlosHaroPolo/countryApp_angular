import { Country } from "./country.countries"
import { Region } from "./region.type"

export interface CacheStore{
  byCapital:termCountries,
  byCountries:termCountries,
  byRegion:termRegion
}

export interface termCountries{
   term:string,
   countries:Country[],
}
export interface termRegion{
  region:Region,
  countries:Country[]
}
