import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'fidelis', pathMatch: 'full' },
  {
    path: 'fidelis',
    loadChildren: () => import('./fidelis-challenge/fidelis-challenge.module').
    then(m => m.FidelisChallengeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
