import { Component, OnInit } from '@angular/core';
import { CountryDetail } from '../Models/country-detail.model';
import { CountryService } from '../Services/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-covid-details',
  templateUrl: './covid-details.component.html',
  styleUrls: ['./covid-details.component.css']
})
export class CovidDetailsComponent implements OnInit {

  countryDetail : CountryDetail;

  constructor(private countryService: CountryService,
              private router: Router) {
    console.log('detail created');
   }

  ngOnInit(): void {
    console.log('detail intialised');
    this.countryService.countrySelected.subscribe((countryDetail : CountryDetail) => {
      this.countryDetail = countryDetail;
    });
  }

  onClick(parameter: string) {
    this.router.navigate(['/detail',parameter,this.countryDetail.country]);
  }

}
