import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {path: 'auth', loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationModule)},
  {path: 'extra', loadChildren: () => import('./pages/extra/extra.module').then(m => m.ExtraModule)},
  {path: 'reclamation', loadChildren: () => import('./pages/reclamation/reclamation.module').then(m => m.ReclamationModule)},

  // {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
