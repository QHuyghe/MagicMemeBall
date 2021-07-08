import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';

const routes: Routes = [
  { path: 'memes', component: BaseComponent },
  { path: '', redirectTo: 'memes', pathMatch: 'full' },
  { path: '**', redirectTo: 'memes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
