import { Injectable, EventEmitter } from '@angular/core';
import { StateDetail } from '../Models/state-detail.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  stateSelected = new EventEmitter<StateDetail>();

  constructor() { }
}
