import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhotosComponent} from './pages/photos/photos.component';
import {VideosComponent} from './pages/videos/videos.component';
import {LandingComponent} from './pages/landing/landing.component';
import {ExcursionsComponent} from './pages/excursions/excursions.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'фото', component: PhotosComponent},
  {path: 'видео', component: VideosComponent},
  {path: 'экскурсии', component: ExcursionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
