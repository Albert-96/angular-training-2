import { Component, OnInit } from '@angular/core';
import { HttpService } from '../Services/http.service';
import { StateDetail } from '../Models/state-detail.model';
import { StateService } from '../Services/state.service';

@Component({
  selector: 'app-state-dashboard',
  templateUrl: './state-dashboard.component.html',
  styleUrls: ['./state-dashboard.component.css'],
  providers: [StateService]
})
export class StateDashboardComponent implements OnInit {

  stateDetailList : StateDetail[] = [];

  constructor(private httpService : HttpService,
              private stateService : StateService) { }

  ngOnInit(): void {
    this.httpService.get().subscribe(response => {
      this.stateDetailList = response;
    });
  }

  onClick(state: string) {
    let stateDetail = this.stateDetailList.find(x => x.state === state);
    this.stateService.stateSelected.emit(stateDetail);
  }

}
