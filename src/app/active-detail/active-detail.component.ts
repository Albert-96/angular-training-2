import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CountryService } from '../Services/country.service';
import { DetailsService } from '../Services/details.service';
import { ActiveDetail } from '../Models/active-cases.model';

@Component({
  selector: 'app-active-detail',
  templateUrl: './active-detail.component.html',
  styleUrls: ['./active-detail.component.css']
})
export class ActiveDetailComponent implements OnInit {

  countryList: string[] = [];
  detailList: ActiveDetail[] = [];
  selectedDetail: ActiveDetail;

  constructor(private route: ActivatedRoute,
              private countryService: CountryService,
              private detailService: DetailsService) { }

  ngOnInit(): void {
    this.countryList = this.countryService.countryList;
    this.detailList = this.detailService.detailList;
    this.route.params.subscribe((param: Params) => {
      this.selectedDetail = this.detailList.find(x => x.country == param['country'] && x.status == param['status']);
    });
  }

}
