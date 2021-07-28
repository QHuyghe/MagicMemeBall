import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemeBallComponent } from './components/meme-ball/meme-ball.component';
import { PixelArtComponent } from './components/pixel-art/pixel-art.component';

const routes: Routes = [
  { path: 'memes', component: MemeBallComponent },
  { path: 'pixel', component: PixelArtComponent },
  { path: '**', redirectTo: 'pixel', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
