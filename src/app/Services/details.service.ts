import { Injectable } from '@angular/core';
import { ActiveDetail } from '../Models/active-cases.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  detailList : ActiveDetail[] = [
    new ActiveDetail("active","INDIA",400391,"Maharashtra","Tripura"),
    new ActiveDetail("active","PAKISTAN",60496,"Punjab","Sindh"),
    new ActiveDetail("active","CHINA",5678,"Hubei","Heilongjiang"),
    new ActiveDetail("active","RUSSIA",200546,"Moscow","Sevastopol"),  
  ];

  constructor() { }
}
