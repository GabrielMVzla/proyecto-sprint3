import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDataService } from './service/company-data.service';



@NgModule({
  declarations: [ 
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    CompanyDataService

  ]
})
export class CoreModule { }
