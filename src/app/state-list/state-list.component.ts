import { Component, OnInit } from '@angular/core';
import { StateService } from '../Services/state.service';
import { HttpService } from '../Services/http.service';
import { StateDetail } from '../Models/state-detail.model';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css']
})
export class StateListComponent implements OnInit {

  stateDetailList : StateDetail[] = [];

  constructor(private httpService: HttpService,
              private stateService: StateService) { }

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
