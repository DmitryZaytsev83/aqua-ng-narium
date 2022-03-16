import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhotosComponent} from './pages/photos/photos.component';
import {VideosComponent} from './pages/videos/videos.component';
import {LandingComponent} from './pages/landing/landing.component';
import {ExcursionsComponent} from './pages/excursions/excursions.component';
import {EventsComponent} from './pages/events/events.component';
import {SchoolExcursionsComponent} from './pages/school-excursions/school-excursions.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'фото', component: PhotosComponent},
  {path: 'видео', component: VideosComponent},
  {path: 'экскурсии', component: ExcursionsComponent},
  {path: 'школы', component: SchoolExcursionsComponent},
  {path: 'мероприятия', component: EventsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 0]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
