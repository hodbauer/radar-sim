import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CesiumViewerService {
  private _viewer;
  get viewer() {
    return this._viewer;
  }

  set viewer(viewer) {
    this._viewer = viewer;
  }
}
