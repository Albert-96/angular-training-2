import { Injectable, EventEmitter } from '@angular/core';
import { CountryDetail } from '../Models/country-detail.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countrySelected = new EventEmitter<CountryDetail>();

  countryList : string[] = [
    "INDIA",
    "PAKISTAN",
    "CHINA",
    "RUSSIA"
  ];

  countryDetailList : CountryDetail[] = [
    new CountryDetail("INDIA",400391,1118017,27503),
    new CountryDetail("PAKISTAN",60496,263496,5568),
    new CountryDetail("CHINA",5678,83660,4634),
    new CountryDetail("RUSSIA",200546,771546,12342),
  ];

  constructor() { 
    console.log('service');
  }

  addCountry(country: CountryDetail) {
    this.countryList.push(country.country);
    this.countryDetailList.push(country);
  }

  editCountry(country: CountryDetail, index: number) {
    this.countryList[index] = country.country;
    this.countryDetailList[index] = country;
  }

  deleteCountry(index: number) {
    this.countryList.splice(index, 1);
    this.countryDetailList.splice(index,1);
  }

  getCountry(index: number) : CountryDetail {
    return this.countryDetailList[index];
  }
}
