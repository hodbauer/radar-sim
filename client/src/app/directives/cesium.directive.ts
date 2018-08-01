import { Directive, ElementRef, OnInit } from '@angular/core';
import { CesiumViewerService } from '../services/cesium-viewer.service';

@Directive({
  selector: '[appCesium]'
})
export class CesiumDirective implements OnInit {

  constructor(private el: ElementRef, private cesiumViewer: CesiumViewerService) { }

  ngOnInit() {
    this.cesiumViewer.viewer = new Cesium.Viewer(this.el.nativeElement, {boxInfo: false});
  }
}
