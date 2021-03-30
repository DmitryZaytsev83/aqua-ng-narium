import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {ShowcaseComponent} from './showcase/showcase.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SideNavComponent} from './side-nav/side-nav.component';
import {MatListModule} from '@angular/material/list';
import {PhotosComponent} from './photos/photos.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {VideosComponent} from './videos/videos.component';
import {MatCardModule} from '@angular/material/card';
import {JumbotronComponent} from './jumbotron/jumbotron.component';
import {LandingComponent} from './landing/landing.component';
import {ScheduleComponent} from './schedule/schedule.component';
import { FooterComponent } from './footer/footer.component';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ShowcaseComponent,
    SideNavComponent,
    PhotosComponent,
    VideosComponent,
    JumbotronComponent,
    LandingComponent,
    ScheduleComponent,
    FooterComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    AngularYandexMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
