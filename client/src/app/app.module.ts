import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CesiumDirective } from './directives/cesium.directive';
import { reducer as points} from './store/reducers/points.reducer';
import { reducer as polylines} from './store/reducers/polylines.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PointsEffect } from './store/effects/points.effect';
import { PolylinesEffect } from './store/effects/polylines.effect';

@NgModule({
  declarations: [
    AppComponent,
    CesiumDirective
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({points, polylines}),
    EffectsModule.forRoot([PointsEffect, PolylinesEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
