import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowcaseComponent} from './showcase/showcase.component';

const routes: Routes = [
  {path: '', component: ShowcaseComponent},
  {path: 'фото', component: ShowcaseComponent},
  {path: 'видео', component: ShowcaseComponent},
  {path: 'экскурсии', component: ShowcaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
