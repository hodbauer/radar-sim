import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, tap} from 'rxjs/operators';
import {CesiumViewerService} from '../../services/cesium-viewer.service';
import {ADD_POINTS} from '../actions/points.action';

@Injectable()
export class PointsEffect {

  constructor(private actions$: Actions, private viewerService: CesiumViewerService) {
  }

  @Effect({dispatch: false})
  point$ = this.actions$.pipe(
    ofType<any>(ADD_POINTS),
    map(action => action.payload),
    tap((entities: any[]) => {
      entities.forEach(radarEntity => {
        const entity = this.viewerService.viewer.entities.getOrCreateEntity(`radar_point_${radarEntity.id}`);
        entity.position = Cesium.Cartesian3.fromDegrees(radarEntity.longitude, radarEntity.latitude);
        entity.billboard = {
            image: 'https://image.flaticon.com/icons/svg/186/186078.svg',
            width: 30,
            height: 30
        };
      });
    })
  );
}
