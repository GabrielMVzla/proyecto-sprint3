import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableCompanyComponent } from './components/table-company/table-company.component';


const routes: Routes = [
  {
    path: '',
    component: TableCompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApConsumeRoutingModule { }
