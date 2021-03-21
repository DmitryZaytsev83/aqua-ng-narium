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
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { LandingComponent } from './landing/landing.component';

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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
