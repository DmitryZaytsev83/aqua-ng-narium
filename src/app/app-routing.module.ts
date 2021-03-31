import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhotosComponent} from './pages/photos/photos.component';
import {VideosComponent} from './pages/videos/videos.component';
import {LandingComponent} from './pages/landing/landing.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'фото', component: PhotosComponent},
  {path: 'видео', component: VideosComponent},
  {path: 'экскурсии', component: LandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
