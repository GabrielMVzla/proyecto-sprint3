import { Component, OnInit } from '@angular/core';
import { CompanyDataService } from 'src/app/core/service/company-data.service';
import {Company} from '../../../core/models/company.model'

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {
  company: Company[] = [];
  companyOne: Company;

  page = 1;
  pageSize = 4;
  CompanySize = this.company.length;

  constructor(
    private companyDataService: CompanyDataService,
  ) { }
 
  ngOnInit(): void {
      this.fetchCompany()
   }

    fetchCompany(){
      this.companyDataService.getAllCompany().subscribe(cos =>{
      this.company = cos;
      console.log(cos);
      
      });
      
    }
    fetchCompanyId(id: number){
     this.companyDataService.getOneCompany(id).subscribe(cos => {
        this.companyOne = cos
        console.log(this.companyOne);
      })      
    }

  
}

