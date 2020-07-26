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
    new ActiveDetail("death","INDIA",400391,"Maharashtra","Tripura"),
    new ActiveDetail("death","PAKISTAN",60496,"Punjab","Sindh"),
    new ActiveDetail("death","CHINA",5678,"Hubei","Heilongjiang"),
    new ActiveDetail("death","RUSSIA",200546,"Moscow","Sevastopol"),
    new ActiveDetail("reported","INDIA",400391,"Maharashtra","Tripura"),
    new ActiveDetail("reported","PAKISTAN",60496,"Punjab","Sindh"),
    new ActiveDetail("reported","CHINA",5678,"Hubei","Heilongjiang"),
    new ActiveDetail("reported","RUSSIA",200546,"Moscow","Sevastopol"),
    
  ];

  constructor() { }
}
