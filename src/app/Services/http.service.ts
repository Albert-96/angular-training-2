import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { StateDetail, DistrictDetail } from '../Models/state-detail.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url : string = 'https://api.covid19india.org/state_district_wise.json';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(this.url)
    .pipe(map(responseData => {
      let stateList : StateDetail[] = [];
      for(const key in responseData) {
        let state : StateDetail = new StateDetail();
        state.state = key;
        state.stateCode = responseData[key].statecode;
        for (const x in responseData[key].districtData) {
          let district : DistrictDetail = new DistrictDetail();
          district.district = x;
          district.active = responseData[key].districtData[x].active;
          district.reported = responseData[key].districtData[x].confirmed;
          district.death = responseData[key].districtData[x].deceased;
          state.district.push(district);
        }
        stateList.push(state);
      }
      return stateList;
    }))
  }
}
