import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { EditReclamationComponent } from './edit-reclamation/edit-reclamation.component';


@NgModule({
  declarations: [
    ReclamationListComponent,
    AddReclamationComponent,
    EditReclamationComponent
  ],
  imports: [
    CommonModule,
    ReclamationRoutingModule
  ]
})
export class ReclamationModule { }
