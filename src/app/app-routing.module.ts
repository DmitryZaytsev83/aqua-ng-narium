import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowcaseComponent} from './showcase/showcase.component';
import {PhotosComponent} from './photos/photos.component';
import {VideosComponent} from './videos/videos.component';

const routes: Routes = [
  {path: '', component: ShowcaseComponent},
  {path: 'фото', component: PhotosComponent},
  {path: 'видео', component: VideosComponent},
  {path: 'экскурсии', component: ShowcaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
