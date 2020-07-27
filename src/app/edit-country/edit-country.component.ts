import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CountryDetail } from '../Models/country-detail.model';
import { CountryService } from '../Services/country.service';

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.css']
})
export class EditCountryComponent implements OnChanges {

  @Input() index : number;

  i: number;
  countryDetail: CountryDetail;
  closeButton: HTMLElement;

  countryForm : FormGroup;

  constructor(private fb : FormBuilder,
              private countryService: CountryService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.i = changes.index.currentValue ?? 0;
    this.countryDetail = this.countryService.getCountry(this.i);
    this.countryForm = this.fb.group({
      'country': new FormControl(this.countryDetail.country, [Validators.required]),
      'active': new FormControl(this.countryDetail.active, [Validators.required]),
      'reported': new FormControl(this.countryDetail.reported, [Validators.required]),
      'death': new FormControl(this.countryDetail.death, [Validators.required]),
    });
    this.closeButton = document.getElementById('editClose') as HTMLElement;
  }

  onSubmit() {
    this.countryDetail.country = this.countryForm.value['country'];
    this.countryDetail.active = this.countryForm.value['active'];
    this.countryDetail.reported = this.countryForm.value['reported'];
    this.countryDetail.death = this.countryForm.value['death'];
    this.countryService.editCountry(this.countryDetail, this.i);
    this.closeButton.click();
  }

}
