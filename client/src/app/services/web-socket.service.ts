import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Store } from '@ngrx/store';
import { AddPoints } from '../store/actions/points.action';
import { AddPolylines } from '../store/actions/polylines.action';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket;

  constructor(private store: Store<any>) { }

  init() {
    this.socket = io('http://localhost:3000');

    this.socket.on('init', (data) => {
      this.store.dispatch(new AddPoints(data));
    });

    this.socket.on('data', (data) => {
      this.store.dispatch(new AddPolylines(data));
    });
  }
}
