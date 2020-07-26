import { Component, OnInit } from '@angular/core';
import { CountryService } from '../Services/country.service';
import { CountryDetail } from '../Models/country-detail.model';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countryList: string[] = [];
  countryDetailList: CountryDetail[] = [];


  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryList = this.countryService.countryList;
    this.countryDetailList = this.countryService.countryDetailList;
    console.log('arrays initialized');
    this.countryService.countrySelected.emit(this.countryDetailList[0]);
    console.log('Clicked');
  }

  onClick(country: string) {
    let index = this.countryList.indexOf(country);
    this.countryService.countrySelected.emit(this.countryDetailList[index]);
  }
}
