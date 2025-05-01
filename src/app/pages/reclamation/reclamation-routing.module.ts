import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { ReclamationStatsComponent } from './reclamation-stats/reclamation-stats.component';

const routes: Routes = [
    {
            path: '', component: HomeComponent,
            children: [
              {path:'',redirectTo:'list',pathMatch:'full'},
              {path:'list',component:ReclamationListComponent},
              {path:'add',component:AddReclamationComponent},
              {path: 'stats', component: ReclamationStatsComponent },

            ]

          }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationRoutingModule { }
