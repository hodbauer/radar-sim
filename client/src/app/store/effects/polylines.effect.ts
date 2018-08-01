import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, tap} from 'rxjs/operators';
import {CesiumViewerService} from '../../services/cesium-viewer.service';
import { ADD_POLYLINES } from '../actions/polylines.action';

@Injectable()
export class PolylinesEffect {

  constructor(private actions$: Actions, private viewerService: CesiumViewerService) {
  }

  @Effect({dispatch: false})
  point$ = this.actions$.pipe(
    ofType<any>(ADD_POLYLINES),
    map(action => action.payload),
    tap((entities: any[]) => {
      entities.forEach(radarEntity => {
        const entity = this.viewerService.viewer.entities.getOrCreateEntity(`radar_point_${radarEntity.id}`);
        entity.polyline = {
            positions: [entity.position.getValue(), Cesium.Cartesian3.fromDegrees(radarEntity.longitude, radarEntity.latitude)]
        };
      });
    })
  );
}
