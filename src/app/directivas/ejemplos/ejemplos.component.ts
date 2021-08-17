import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/core/models/company.model';
import { CompanyDataService } from 'src/app/core/service/company-data.service';

@Component({
  selector: 'app-ejemplos',
  templateUrl: './ejemplos.component.html',
  styleUrls: ['./ejemplos.component.css']
})
export class EjemplosComponent implements OnInit {

  companies: Company[] = [];
  companiesSelect: string[] = [];

  repeticiones: number = 4;
  company: string = "";
  
  colorCheck: boolean = false;
  anchuraAltura: number = 100;

  constructor(private companyService: CompanyDataService) {
    companyService.getAllCompany().subscribe(response => {
      this.companies = response;
      response.forEach( (c, index) => { 
        if(index < 3)
        { 
          this.companiesSelect[index] = c.name
        }
      });    });
   }

  ngOnInit(): void {}

  agregarElemento(){
    this.companiesSelect.push(this.company);
    this.company = "";
  }

  cambiaCheck(){
    console.log("colorCheck = " + this.colorCheck);

    this.colorCheck = !this.colorCheck;
    console.log("colorCheck = " + this.colorCheck);

  }

}
