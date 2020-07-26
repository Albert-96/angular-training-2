import { Component, OnInit } from '@angular/core';
import { CountryService } from '../Services/country.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [CountryService]
})
export class DashboardComponent implements OnInit {

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

}
