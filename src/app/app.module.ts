import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ToolbarComponent} from './layouts/toolbar/toolbar.component';
import {ShowcaseComponent} from './pages/landing/showcase/showcase.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SideNavComponent} from './layouts/side-nav/side-nav.component';
import {MatListModule} from '@angular/material/list';
import {PhotosComponent} from './pages/photos/photos.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {VideosComponent} from './pages/videos/videos.component';
import {MatCardModule} from '@angular/material/card';
import {JumbotronComponent} from './pages/landing/jumbotron/jumbotron.component';
import {LandingComponent} from './pages/landing/landing.component';
import {ScheduleComponent} from './pages/landing/schedule/schedule.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {AngularYandexMapsModule} from 'angular8-yandex-maps';
import {MapComponent} from './pages/landing/map/map.component';
import {CostComponent} from './pages/landing/cost/cost.component';
import {ExcursionBriefComponent} from './components/excursion-brief/excursion-brief.component';
import {ExcursionsComponent} from './pages/excursions/excursions.component';
import {EventsComponent} from './pages/events/events.component';
import {SchoolFormComponent} from './pages/school/school-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LectoriumComponent } from './pages/landing/lectorium/lectorium.component';

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
    CostComponent,
    ExcursionBriefComponent,
    ExcursionsComponent,
    EventsComponent,
    SchoolFormComponent,
    LectoriumComponent,
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
    AngularYandexMapsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
