import { Component, OnInit } from '@angular/core';
import { CompanyDataService } from 'src/app/core/service/company-data.service';
import { Company } from 'src/app/core/models/company.model';
import {MatDialog} from '@angular/material/dialog';
import { EditFormCompanyComponent } from '../edit-form-company/edit-form-company.component';
import { FormCompanyComponent } from '../form-company/form-company.component';

@Component({
  selector: 'app-table-company',
  templateUrl: './table-company.component.html',
  styleUrls: ['./table-company.component.css']
})
export class TableCompanyComponent implements OnInit {

  company: Company [] = []
  companyOne: Company;


  constructor(
    private companyDataService: CompanyDataService,
    public modal: MatDialog
  ) { }

  ngOnInit(): void {
    this.fetchCompany();
  }

/// Modal

openModal(id: number){
  const activeModal = this.modal.open(EditFormCompanyComponent);
    activeModal.componentInstance.companyId = id;
    activeModal.afterClosed().subscribe(result =>{
      if (this.companyOne != null) {
        this.fetchCompanyId(id)
      }  
      else{
        this.fetchCompany()
      }
  })
}


openModal2(){
  const activeModal = this.modal.open(FormCompanyComponent);
  activeModal.afterClosed().subscribe(result =>{
      this.fetchCompany();    
  })
}



/// Services
  fetchCompany(){
    this.companyDataService.getAllCompany().subscribe( response =>{
      this.company = response
    })
  }

  deleteCompany(id:number){
      this.companyDataService.deleteCompany(id).subscribe(response =>{
        console.log(response);
        if (this.companyOne != null) {
          this.fetchCompanyId(id)
        }  
        else{
          this.fetchCompany()
        }
      })
  }

  fetchCompanyId(id: number){
    this.companyDataService.getOneCompany(id).subscribe(response => {
       this.companyOne = response;
       console.log(this.companyOne);
     })      
   }

}
