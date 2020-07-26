import { Component, OnInit } from '@angular/core';
import { CountryDetail } from '../Models/country-detail.model';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { CountryService } from '../Services/country.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {

  country : CountryDetail;

  countryForm : FormGroup;

  get countryInput() { return this.countryForm.get('country'); }

  get activeInput() { return this.countryForm.get('active'); }

  get reportedInput() { return this.countryForm.get('reported'); }

  get deleteInput() { return this.countryForm.get('reported'); }

  constructor(private fb: FormBuilder,
              private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryForm = this.fb.group({
      'country': new FormControl('', [Validators.required]),
      'active': new FormControl('0', [Validators.required]),
      'reported': new FormControl('0', [Validators.required]),
      'death': new FormControl('0', [Validators.required]),
    });
  }

  onSubmit() {
    this.country = new CountryDetail(
      this.countryForm.value['country'],
      this.countryForm.value['active'],
      this.countryForm.value['reported'],
      this.countryForm.value['death'],
      );
    this.countryService.addCountry(this.country);
  }

}
