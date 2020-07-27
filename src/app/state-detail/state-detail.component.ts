import { Component, OnInit } from '@angular/core';
import { StateDetail, DistrictDetail } from '../Models/state-detail.model';
import { StateService } from '../Services/state.service';

@Component({
  selector: 'app-state-detail',
  templateUrl: './state-detail.component.html',
  styleUrls: ['./state-detail.component.css']
})
export class StateDetailComponent implements OnInit {

  stateDetail : StateDetail;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.stateSelected.subscribe((state) => {
      this.stateDetail = state;
      this.stateDetail.district.forEach(x => {
        this.stateDetail.active += x.active;
        this.stateDetail.reported += x.reported;
        this.stateDetail.death += x.death;
      });
    });
  }

}
