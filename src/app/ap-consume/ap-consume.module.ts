import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApConsumeRoutingModule } from './ap-consume-routing.module';
import { TableCompanyComponent } from './components/table-company/table-company.component';
import { FormCompanyComponent } from './components/form-company/form-company.component';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { EditFormCompanyComponent } from './components/edit-form-company/edit-form-company.component';









@NgModule({
  declarations: [
    TableCompanyComponent,
    FormCompanyComponent,
    EditFormCompanyComponent
  ],
  imports: [
    CommonModule,
    ApConsumeRoutingModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class ApConsumeModule { }
