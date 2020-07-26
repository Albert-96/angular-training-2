import { Component, OnInit } from '@angular/core';
import { CountryService } from '../Services/country.service';
import { CountryDetail } from '../Models/country-detail.model';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {

  countryList: CountryDetail[] = [];
  index: number;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryList = this.countryService.countryDetailList;
  }

  setIndex(i : number) {
    this.index = i;
  }

}
