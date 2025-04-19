import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { EditReclamationComponent } from './edit-reclamation/edit-reclamation.component';

import { HomeComponent } from '../home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent,
            children: [
  { path: '', redirectTo: 'add-reclamation', pathMatch: 'full' },
  
        { path: 'add-reclamation', component: AddReclamationComponent },
        { path: 'reclamation-list', component: ReclamationListComponent },
        { path: 'edit-reclamation', component: EditReclamationComponent },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationRoutingModule { }
